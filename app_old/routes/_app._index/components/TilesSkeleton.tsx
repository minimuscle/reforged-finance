import { Skeleton } from '@mantine/core'
import Tile from './Tile'

const TilesSkeleton = () => {
  return (
    <>
      <Tile title='Networth Trend'>
        <Skeleton />
      </Tile>
      <Tile title='Safety Net'>
        <Skeleton />
      </Tile>
      <Tile title='Total Savings Rate'>
        <Skeleton />
      </Tile>
    </>
  )
}

export default TilesSkeleton
