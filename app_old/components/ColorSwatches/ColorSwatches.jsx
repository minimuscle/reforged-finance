import { ColorSwatch, Group, Text, Title } from "@mantine/core"
import React from "react"

const colours = [
  "",
  "var(--mantine-color-gray-6)",
  "var(--mantine-color-red-6)",
  "var(--mantine-color-pink-6)",
  "var(--mantine-color-grape-6)",
  "var(--mantine-color-violet-6)",
  "var(--mantine-color-indigo-6)",
  "var(--mantine-color-blue-6)",
  "var(--mantine-color-cyan-6)",
  "var(--mantine-color-teal-6)",
  "var(--mantine-color-green-6)",
  "var(--mantine-color-lime-6)",
  "var(--mantine-color-yellow-6)",
  "var(--mantine-color-orange-6)",
]

export function ColorSwatches({ setColour }) {
  return (
    <>
      <Text c='dimmed' pb='5px'>
        Select Colour
      </Text>
      <Group maw='175px'>
        {colours.map((colour) => (
          <ColorSwatch
            key={colour}
            component='button'
            style={{ cursor: "pointer" }}
            size='20px'
            color={colour}
            onClick={() => setColour(colour)}
          />
        ))}
      </Group>
    </>
  )
}
