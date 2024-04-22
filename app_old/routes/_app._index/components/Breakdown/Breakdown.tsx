import { Button, Flex, Paper, Title } from '@mantine/core'
import classes from '../../_index.module.css'
import { useState } from 'react'
import Assets from './Assets'
import Liabilities from './Liabilities'

const Breakdown = () => {
  const [breakdown, setBreakdown] = useState('assets')
  return (
    <Paper className={classes.tile}>
      <Flex justify='space-between' align='center'>
        <Title size='h3'>Breakdown</Title>
        <Button.Group>
          <Button
            onClick={() => setBreakdown('assets')}
            color='brand'
            variant={breakdown === 'assets' ? 'filled' : 'outline'}
          >
            Assets
          </Button>
          <Button
            onClick={() => setBreakdown('liabilities')}
            color='brand'
            variant={breakdown === 'liabilities' ? 'filled' : 'outline'}
          >
            Liabilities
          </Button>
        </Button.Group>
      </Flex>
      {breakdown === 'assets' ? <Assets /> : <Liabilities />}
    </Paper>
  )
}

export default Breakdown
