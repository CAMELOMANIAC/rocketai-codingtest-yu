import HeaderFooter from "@/components/layout/HeaderFooter";
import { GetStaticProps } from "next";
import React, { ReactElement, useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useStore } from "./_app";
import { observer } from "mobx-react-lite";

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(context.locale ?? "en", ["common"])),
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale ?? "ko", ["common"])),
      //useTranslation을 사용하려면 서버에서 미리 로케일 파일을 가져와야 함
    },
  };
};

const Test: React.FC & { getLayout?: (page: ReactElement) => ReactElement } = observer(() => {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const store = useStore();
  const [todoContent, setTodoContent] = useState<string>();

  const languageHandler = (lang: string) => {
    router.push(router.pathname, router.pathname, { locale: lang });
  };

  const addTodoHandler = () => {
    if (!todoContent) return;
    store.todoStore.addTodo({
      id: store.todoStore.todos.length + 1,
      content: todoContent,
    });
  };

  return (
    <main>
      <div>
        {t("title")} {i18n.language}
      </div>
      <button onClick={() => languageHandler("en")}>English</button>
      <button onClick={() => languageHandler("ko")}>한국어</button>
      <ul>
        {store.todoStore.todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => store.todoStore.removeTodo(todo.id)}>제거</button>
          </li>
        ))}
      </ul>
      <input type="text" value={todoContent} onChange={(event) => setTodoContent(event.target.value)}></input>
      <button onClick={addTodoHandler}>추가</button>
    </main>
  );
});

export default Test;

Test.getLayout = (page: ReactElement) => <HeaderFooter>{page}</HeaderFooter>;
