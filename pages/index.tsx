// import localFont from "next/font/local";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";
import HeaderFooter from "@/components/layout/HeaderFooter";
import Chat from "@/components/Chat";

// const d2Coding = localFont({
//   src: "./fonts/D2CodingBold-Ver1.3.2-20180524.ttf",
//   weight: "normal",
//   style: "normal",
// });

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "ko", ["common"])),
      //클라이언트에서 useTranslation을 사용하려면 서버에서 미리 로케일 파일을 가져와야 한다.
    },
  };
};

const Home = () => {
  return (
    <>
      <Chat />
    </>
  );
};
export default Home;

Home.getLayout = (page: ReactElement) => <HeaderFooter>{page}</HeaderFooter>;
