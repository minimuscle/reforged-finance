import { Await } from "@remix-run/react"
import { ReactElement, Suspense, cloneElement } from "react"
import { DataContext } from "~/utils/contexts/DataContext"
import { OutletContext } from "~/utils/types"

const DataDefer = ({
  children,
  data,
}: {
  children: ReactElement
  data: any
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={data.data}>
        {(resolvedData) => {
          const transformedData: OutletContext = {
            user: resolvedData[0].data,
            history: resolvedData[1].data,
            cash: resolvedData[2].data,
            budget: resolvedData[3].data,
          }
          //the below code passes the data to the children via props
          return (
            <DataContext.Provider value={transformedData}>
              {children}
            </DataContext.Provider>
          )
        }}
      </Await>
    </Suspense>
  )
}

export default DataDefer
