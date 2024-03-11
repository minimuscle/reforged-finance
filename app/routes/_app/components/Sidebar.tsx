/* eslint-disable react/jsx-no-target-blank */
import {
  Box,
  Divider,
  Flex,
  Group,
  Image,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import NavLink from './Navlink'
import { RiBankLine } from 'react-icons/ri/index.js'
import { RxDashboard } from 'react-icons/rx/index.js'
import {
  BsCash,
  BsClipboard,
  BsClockHistory,
  BsCurrencyDollar,
} from 'react-icons/bs/index.js'
import { LuRocket } from 'react-icons/lu/index.js'
import { LiaHandshake } from 'react-icons/lia/index.js'
import UserMenu from './UserMenu'
import DataDefer from '~/components/DataDefer'
import Logo from '~/assets/images/Logo.png'
import classes from '../_app.module.css'
import Premium from './Premium'
import UserMenuSkeleton from './UserMenuSkeleton'

export default function Sidebar({
  data,
}: {
  data: any
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}) {
  //const fetcher = useFetcher()

  /**<ActionIcon
        className={classes.chevron}
        radius="xl"
        color="gray"
        type="submit"
        onClick={() => {
          setIsCollapsed(!isCollapsed)
          fetcher.submit(
            { intent: "updateCollapsed", collapsed: !isCollapsed },
            { method: "POST", action: "/" }
          )
        }}
      >
        {isCollapsed ? <BsChevronRight /> : <BsChevronLeft />}
      </ActionIcon> */
  return (
    <Flex className={`${classes.sidebar}`}>
      <Group className={classes.logo}>
        <Image src={Logo} />
        <Title size='h3'>Reforged Finance</Title>
      </Group>
      <Text className={classes.heading}>Main Menu</Text>
      <NavLink to='/' icon={<RxDashboard />}>
        Dashboard
      </NavLink>
      <NavLink to='/cash' icon={<BsCash />}>
        Cash
      </NavLink>
      <NavLink to='/side-income' icon={<BsCurrencyDollar />}>
        Side Income
      </NavLink>
      <NavLink to='/debts' icon={<RiBankLine />}>
        Liabilities / Debts
      </NavLink>
      <NavLink to='/super' icon={<LiaHandshake />}>
        Super
      </NavLink>
      <NavLink to='/budget' icon={<BsClipboard />}>
        Budget
      </NavLink>
      <NavLink to='/history' icon={<BsClockHistory />}>
        History
      </NavLink>
      <Divider className={classes.divider} />
      <NavLink
        target='_blank'
        to='https://reforgedfinance.freshdesk.com/support/home'
        icon={<LuRocket />}
      >
        Submit Feedback
      </NavLink>

      <Flex className={classes.bottom}>
        <Space />
        <Stack>
          <Premium />
          <Divider />
          <Box>
            <DataDefer data={data} fallback={<UserMenuSkeleton />}>
              <UserMenu />
            </DataDefer>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  )
}
