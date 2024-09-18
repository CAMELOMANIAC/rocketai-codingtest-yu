import { useStore } from "@/pages/_app";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";

const Header = observer(() => {
  const store = useStore();
  const { t } = useTranslation();

  const languageArray = [
    { locale: "ko", description: t("korean"), icon: "🇰🇷" },
    { locale: "en", description: t("english"), icon: "🇺🇸" },
    { locale: "ja", description: t("japanese"), icon: "🇯🇵" },
    { locale: "ru", description: t("russian"), icon: "🇷🇺" },
    { locale: "de", description: t("german"), icon: "🇩🇪" },
  ];

  return (
    <header className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* <!-- Navbar --> */}
        <div className="navbar bg-base-300 w-full">
          <div className="max-w-screen-lg mx-auto w-full">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">
              <div className="flex group w-fit">
                <div className="absolute transition-opacity duration-500 group-hover:opacity-0 max-w-fit font-dunggeunmo text-2xl">
                  {store.wolrdStore.isWolrd ? t("title2") : t("title")}
                </div>
                <div className="relative transition-opacity duration-500 group-hover:opacity-100 opacity-0">
                  <label className="flex cursor-pointer gap-2">
                    <span className="label-text">world</span>
                    <input
                      type="checkbox"
                      className="toggle flex justify-center items-center content-center"
                      onChange={(event) => store.wolrdStore.setWolrd(event.target.checked)}
                    />
                    <span className="label-text">wolrd</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <details className="dropdown dropdown-end">
                    <summary className="btn m-1 flex justify-center items-center content-center">
                      {t("chooseLanguage")}
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow-xl">
                      {languageArray.map((item) => (
                        <li key={item.locale}>
                          <Link href="" locale={item.locale}>
                            {item.icon} {item.description}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* <!-- Sidebar content here --> */}
          <p className="m-2">언어 선택</p>
          {languageArray.map((item) => (
            <li key={item.locale}>
              <Link href="" locale={item.locale}>
                {item.icon} {item.description}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
});

export default Header;
