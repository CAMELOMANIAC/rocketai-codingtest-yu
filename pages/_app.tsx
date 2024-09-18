import "@/styles/globals.css";
import rootStore from "@/utils/stores/global";
import { NextPage } from "next";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import { createContext, ReactElement, ReactNode, useContext } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const StoreContext = createContext(rootStore);
export const useStore = () => useContext(StoreContext);

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <StoreContext.Provider value={rootStore}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
};

export default appWithTranslation(App);
