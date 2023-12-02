import { Flex } from "@mantine/core"
import { createSupabaseServerClient } from "../util/supabase.server"
import AssetDistribution from "../components/Widgets/Dashboard/AssetDistribution"
import NetWorth from "../components/Widgets/Dashboard/NetWorth"

export const meta = () => {
  return [{ title: "Dashboard | WealthForge" }]
}

export const loader = async ({ request }) => {
  const supabase = createSupabaseServerClient({ request })
  const { data: history } = await supabase
    .from("history")
    .select("*")
    .order("date", { ascending: true })
  return {
    history,
  }
}

export default function Index() {
  return (
    <>
      <Flex gap="md" wrap>
        <AssetDistribution />
        <NetWorth />
      </Flex>
    </>
  )
}
