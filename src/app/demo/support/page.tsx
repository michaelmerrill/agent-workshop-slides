"use client";

import dynamic from "next/dynamic";

const ChatPage = dynamic(() => import("./chat-page"), { ssr: false });

export default function Page() {
  return <ChatPage />;
}
