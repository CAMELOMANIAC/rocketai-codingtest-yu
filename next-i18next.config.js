/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    locales: ["en", "ko", "ja", "de", "ru"],
    defaultLocale: "ko",
    localeDetection: false, //자동 감지를 끄는 이유는 페이지가 첫 로딩될때 config설정보다 브라우저 navigator.language가 우선 적용되므로
  },
  // vercel 배포시에는 아래 주석 해제
  //localePath: path.resolve('./public/locales')
};
