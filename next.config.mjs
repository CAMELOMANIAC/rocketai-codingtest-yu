import pkg from "./next-i18next.config.js";
import { loadEnvConfig } from "@next/env";

const { i18n } = pkg;
const projectDir = process.cwd(); // 프로젝트의 루트 디렉토리
const dev = process.env.NODE_ENV !== "production"; // 개발 모드인지 확인

loadEnvConfig(projectDir, dev);

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
