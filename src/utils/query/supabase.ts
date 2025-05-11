import { createClient } from "@supabase/supabase-js"
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
      eq: DB.Row<TTable>["id"]
    }
  | {
      from: TTable
      type: "delete"
      eq: DB.Row<TTable>["id"]
    }

//TODO: types don't work exactly right, the EQ and Data props don't like it if you don't define type. But eh it works mostly for how I will write types sooo

async function post<TTable extends keyof DB.Tables>(params: PostParams<TTable>) {
  // @ts-ignore: TypeScript may not infer types correctly for some cases here
  const { type = "insert", from, data, eq } = params
  const query = supabase.from(from)

  switch (type) {
    case "insert":
      return await query.insert(data).select()
    case "upsert":
      return await query.upsert(data).select()
    case "update":
      if (eq == null) throw new Error(`Missing 'eq' (id) for update`)
      return await query
        .update(data as any)
        .eq("id", eq as any)
        .select()
    case "delete":
      if (eq == null) throw new Error(`Missing 'eq' (id) for delete`)
      return await query.delete().eq("id", eq as any)
    default:
      throw new Error(`Unknown post type: ${type}`)
  }
}

export const api = {
  post,
}
