import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next"; //react-i18next 모듈에서 가져오지 않도록 주의
import useChatMessage from "@/utils/hooks/useChatMessage";

const Chat = () => {
  const { t } = useTranslation();
  const { messages, messagesInputRef, chatSubmit } = useChatMessage(); //메세지 관리를 위한 후크
  const chatBubbleRef = useRef<HTMLDivElement>(null);
  const [isComposing, setIsComposing] = useState(false); //IME 입력이 끝날 때까지 이벤트를 무시하기 위한 상태

  //엔터키 입력 시 메시지 전송
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !isComposing) {
        chatSubmit(messagesInputRef.current?.value);
      }
    };
    addEventListener("keydown", handleKeyDown);
    return () => {
      removeEventListener("keydown", handleKeyDown);
    };
  }, [isComposing]); //eslint-disable-line

  //자동 스크롤 기능
  useEffect(() => {
    chatBubbleRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages.length]);

  return (
    <div className="flex-1 m-auto max-w-screen-md bg-zinc-900 rounded-2xl">
      <div className="m-auto w-full h-[700px] lg:h-[500px] md:h-[600px] p-8 overflow-y-auto">
        {messages.map((message) => (
          <div className={message.isUser ? "chat chat-end" : "chat chat-start"} key={message.index} ref={chatBubbleRef}>
            <div className={"chat-bubble text-center" + `${message.isUser ? " chat-bubble-accent" : ""}`}>
              {message.content}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row py-8 px-11">
        <input
          className="border border-black flex-auto p-3 rounded-l-2xl"
          type="text"
          placeholder={t("Enter your message")}
          ref={messagesInputRef}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
        ></input>
        <button
          className="py-3 px-6 border-accent rounded-r-2xl bg-accent text-black active:opacity-80"
          onClick={() => chatSubmit(messagesInputRef.current?.value)}
        >
          {t("Send")}
        </button>
      </div>
    </div>
  );
};

export default Chat;
