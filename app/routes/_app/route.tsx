import { Outlet, useLoaderData } from '@remix-run/react'
import Sidebar from './components/Sidebar'
import { LoaderFunctionArgs, redirect, defer } from '@remix-run/node'
import { supabaseCreate } from '~/utils/supabase'
import classes from './_app.module.css'
import { Box, Flex } from '@mantine/core'
import { CollapsedContext } from '~/utils/contexts/CollapsedContext'
import { useState } from 'react'
import { authCookie, collapsedCookie } from '~/utils/cookies.server'
//import MobileBar from './components/MobileBar'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const cookie = request.headers.get('Cookie')
  const auth = (await authCookie.parse(cookie)) || {}

  const supabase = supabaseCreate(request)

  const session = await supabase.auth.getSession()
  const userSession = session?.data?.session?.user
  //Takes user to login page if not logged in
  if (!userSession) throw redirect('/login')

  const collapsed = await collapsedCookie.parse(cookie)

  const data = Promise.all([
    supabase.from('profiles').select('*').single(),
    supabase.from('history').select('*'),
    supabase.from('cash').select('*'),
    supabase.from('budget').select('*'),
    supabase.from('super').select('*'),
    supabase.from('debts').select('*'),
    supabase.from('sideIncome').select('*'),
  ])

  return defer({ isCollapsed: collapsed, data })
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  const [isCollapsed, setIsCollapsed] = useState(data.isCollapsed === 'true')

  return (
    <CollapsedContext.Provider value={isCollapsed}>
      <Flex className={classes.app}>
        {/* <MobileBar data={data} /> //TODO: Fix this mobile */}
        <Sidebar data={data} setIsCollapsed={setIsCollapsed} />
        <Box className={`${classes.content} ${isCollapsed && classes.collapsed}`}>
          <Outlet context={data} />
        </Box>
      </Flex>
    </CollapsedContext.Provider>
  )
}
