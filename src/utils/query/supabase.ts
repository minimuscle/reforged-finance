import { createClient } from "@supabase/supabase-js"
import { auth } from "containers/auth/queries"
import { queryClient } from "utils/query/queryClient"
import { DB } from "utils/types"
import { Database, Tables } from "utils/types/database.types"

export const supabase = createClient<Database>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
)

type PostParams<TTable extends keyof DB.Tables> =
  | {
      from: TTable
      type?: "insert" | "upsert"
      data: DB.Insert<TTable> | Array<DB.Insert<TTable>>
    }
  | {
      from: TTable
      type: "update"
      data: DB.Update<TTable>
      eq?: DB.Row<TTable>["id"]
    }
  | {
      from: TTable
      type: "delete"
      eq?: DB.Row<TTable>["id"]
    }

function getId() {
  const {
    // @ts-ignore: User will be defined
    data: {
      user: { id },
    },
  } = queryClient.getQueryData(["user"])
  return id
}

async function post<TTable extends keyof DB.Tables>(params: PostParams<TTable>) {
  // @ts-ignore: TypeScript may not infer types correctly for some cases here
  const { type = "insert", from, data, eq = getId() } = params
  const query = supabase.from(from)

  let request
  switch (type) {
    case "insert":
      request = query.insert(data).select()
      break
    case "upsert":
      request = query.upsert(data).select()
      break
    case "update":
      if (eq == null) throw new Error(`Missing 'eq' (id) for update`)
      request = query.update(data).eq("id", eq).select()
      break
    case "delete":
      if (eq == null) throw new Error(`Missing 'eq' (id) for delete`)
      request = query.delete().eq("id", eq)
      break
    default:
      throw new Error(`Unknown post type: ${type}`)
  }

  const { data: result_data } = await request.throwOnError()
  return result_data
}

function get<TTable extends keyof DB.Tables, TSelect extends keyof DB.Row<TTable>>(
  from: TTable,
  select?: TSelect | TSelect[]
) {
  if (!select) {
    return supabase.from(from).select("*") // ← parameter is the literal "*"
  }
  const cols = Array.isArray(select) ? select.join(",") : select
  return supabase.from(from).select(String(cols))
}

export const api = {
  get,
  post,
}
