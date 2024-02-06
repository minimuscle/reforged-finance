import { Group } from "@mantine/core"
import FilterButton from "./FilterButton"

const ChartFilters = ({
  active,
  setActive,
}: {
  active: string
  setActive: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <Group gap={0}>
      <FilterButton name="3M" active={active} setActive={setActive}>
        3M
      </FilterButton>
      <FilterButton name="6M" active={active} setActive={setActive}>
        6M
      </FilterButton>
      <FilterButton name="1Y" active={active} setActive={setActive}>
        1Y
      </FilterButton>
      <FilterButton name="5Y" active={active} setActive={setActive}>
        5Y
      </FilterButton>
      <FilterButton name="YTD" active={active} setActive={setActive}>
        YTD
      </FilterButton>
      <FilterButton name="ALL" active={active} setActive={setActive}>
        ALL
      </FilterButton>
    </Group>
  )
}

export default ChartFilters
