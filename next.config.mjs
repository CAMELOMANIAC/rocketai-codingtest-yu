import pkg from "./next-i18next.config.js";
const { i18n } = pkg;

const config = {
  i18n,
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "http://15.165.85.30:80/chat",
      },
    ];
  },
};

export default config;
