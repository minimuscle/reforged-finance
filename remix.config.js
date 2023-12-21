/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  //Add apexcharts to the server bundle
  serverDependenciesToBundle: [
    "internmap",
    "react-lifecycles-compat",
    /@nivo\/.+/,
    /@react-spring\/.+/,
    /d3-.+/,
    /lodash\/.+/,
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
}
