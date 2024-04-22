import {
  Box,
  Button,
  Divider,
  Flex,
  Group,
  Image,
  Space,
  Stack,
  Title,
  useMantineColorScheme,
} from '@mantine/core'
import NavLink from './Navlink'
import { RiBankLine, RiVipCrown2Fill } from 'react-icons/ri/index.js'
import { RxDashboard } from 'react-icons/rx/index.js'
import {
  BsCash,
  BsClipboard,
  BsClockHistory,
  BsCurrencyDollar,
} from 'react-icons/bs/index.js'
import { LiaHandshake } from 'react-icons/lia/index.js'
import UserMenu from './UserMenu'
import DataDefer from '~/components/DataDefer'
import Logo from '~/assets/images/Logo.png'
import classes from '../_app.module.css'
import { useFetcher } from '@remix-run/react'

export default function MobileBar({ data }: { data: any }) {
  const fetcher = useFetcher()

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
    <Group className={`${classes.mobileBar}`}>
      <NavLink to='/' icon={<RxDashboard />}>
        Dashboard
      </NavLink>
      <NavLink to='/cash' icon={<BsCash />}>
        Cash
      </NavLink>
      <NavLink to='/' icon={<RiBankLine />}>
        Select
      </NavLink>
      <NavLink to='/history' icon={<BsClockHistory />}>
        History
      </NavLink>
      <NavLink to='/' icon={<BsClipboard />}>
        Account
      </NavLink>
    </Group>
  )
}

/**
 * 
 * <Flex h={'100%'} direction={'column'} gap={'md'}>
        <Group gap={'5px'}>
          <Image h={'auto'} w={'40px'} src={Logo} />
          <Title className={`${classes.title}`} size={'h3'}>
            Reforged Finance
          </Title>
        </Group>
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

        <Flex direction={'column'} h={'100%'} justify={'space-between'}>
          <Space />
          <Stack>
            <Divider />
            <Box>
              <DataDefer data={data}>
                <UserMenu />
              </DataDefer>
            </Box>
          </Stack>
        </Flex>
      </Flex>
 */
