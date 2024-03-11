import { Button, Flex, Title } from '@mantine/core'
import classes from './Heading.module.css'

export default function Heading({
  title,
  buttonText,
}: {
  title: string
  buttonText?: string
}) {
  return (
    <Flex className={classes.header}>
      <Title>{title}</Title>
      {buttonText && (
        <>
          <Button color='dark' darkHidden>
            {buttonText}
          </Button>
          <Button color='dark' variant='white' lightHidden>
            {buttonText}
          </Button>
        </>
      )}
    </Flex>
  )
}
