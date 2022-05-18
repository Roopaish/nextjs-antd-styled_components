const { withPlugins } = require("next-compose-plugins");
const withAntdLess = require("next-plugin-antd-less");

/** @type {import('next').NextConfig} */
const nextConfig = withPlugins(
  [
    [
      withAntdLess,
      {
        modifyVars: {
          "@primary-color": "#1890FF",
        },
        cssLoaderOptions: {},
      },
    ],
  ],
  {
    reactStrictMode: true,
  }
);

module.exports = nextConfig;
