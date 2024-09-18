import { useRef, useState } from "react";

const useChatMessage = () => {
  const [messages, setMessages] = useState<Messages[]>([]);
  const messagesInputRef = useRef<HTMLInputElement>(null);

  //메시지 요청 함수
  const getMessages = async (messagesContent: string) => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: messagesContent }),
    });
    try {
      if (response.ok) {
        return response.text();
      }
      if (response.status > 300) {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //메시지 전송 함수
  const chatSubmit = async (inputValue: string | undefined) => {
    if (!inputValue) {
      return;
    }
    if (inputValue.trim() === "") {
      return;
    }
    setMessages((prev) => [...prev, { content: inputValue, index: prev.length + 1, isUser: true }]);
    const result = await getMessages(inputValue);
    result && setMessages((prev) => [...prev, { content: result, index: prev.length + 1, isUser: false }]);

    if (messagesInputRef.current) {
      messagesInputRef.current.value = "";
    }
  };

  return { messages, messagesInputRef, chatSubmit };
};

export default useChatMessage;

type Messages = {
  content: string;
  index: number;
  isUser: boolean;
};
