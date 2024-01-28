import { Await, useOutletContext } from "@remix-run/react"
import { ReactElement, Suspense } from "react"
import { DataContext } from "~/utils/contexts/DataContext"
import { OutletContext } from "~/utils/types"

const DataDefer = ({
  children,
  fallback,
  data,
}: {
  children: ReactElement[] | ReactElement
  fallback?: ReactElement
  data?: any
}) => {
  //If there is no data supplied, use the outletContext.
  //This is useful for when you want to use the dataDefer component in a route
  //and saves importing outletContext in the route file

  const outletData = useOutletContext()
  if (!data) {
    if (!outletData) throw new Error("No data supplied or found in outlet")
    data = outletData
  }

  //Check if fallback is supplied, if not, use a default fallback
  if (!fallback) fallback = <div>Loading...</div>

  return (
    <Suspense fallback={fallback}>
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
