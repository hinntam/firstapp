// pages/index.js
import ChatWidget from "./components/chatwidget";

export default function Chat() {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4">Welcome to My Chat UI</h1>
      <ChatWidget />
    </div>
  );
}
