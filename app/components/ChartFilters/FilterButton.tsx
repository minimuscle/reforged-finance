import { Button } from "@mantine/core"

const FilterButton = ({
  name,
  active,
  setActive,
  children,
}: {
  name: string
  active: string
  setActive: React.Dispatch<React.SetStateAction<string>>
  children: string
}) => {
  return (
    <Button
      variant={active === name ? "light" : "subtle"}
      size="compact-md"
      color="gray"
      onClick={() => setActive(name)}
    >
      {children}
    </Button>
  )
}

export default FilterButton
