export default function ZohoSalesIQ(props) {
  window.$zoho = window.$zoho || {}
  window.$zoho.salesiq = window.$zoho.salesiq || {
    widgetcode:
      "02ff060a8d809d2e0d47590d33e09f4e0b76aab88b15a0df3689a772eba66f01",
    values: {},
    ready: function () {},
  }
  const d = document
  let s
  s = d.createElement("script")
  s.type = "text/javascript"
  s.id = "zsiqscript"
  s.defer = true
  s.src = "https://salesiq.zoho.com/widget"
  let t
  t = d.getElementsByTagName("script")[0]
  t.parentNode.insertBefore(s, t)
  return (
    <>
      <div id="zsiqwidget"></div>
    </>
  )
}
