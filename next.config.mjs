import pkg from "./next-i18next.config.js";

const { i18n } = pkg;

const config = {
  i18n,
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: process.env.API_CHAT_DESTINATION,
      },
    ];
  },
};

export default config;
