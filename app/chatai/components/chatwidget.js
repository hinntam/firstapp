"use client"
import { useState } from "react";
import Image from "next/image";

export default function ChatWidget({OPENAI_API_KEY, OPENAI_URL}) {
  const [message, setMessage] = useState("");
  const [input, setInput] = useState('');
  
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello, how can I help you today?' },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    //setLoading(true);
    
    try {
      const response = await fetch(`${OPENAI_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: 'gpt-4', // or 'gpt-3.5-turbo'
          messages: [...messages, userMessage]
        })
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || 'No response';
      console.log(botReply);

      setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);

    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error: Unable to fetch response' }]);
    } finally {
      //setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 rounded-xl shadow-lg border border-gray-200 bg-white">
      <div className="flex items-center justify-between px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <Image src="/coder.webp" alt="Olivia" width={32} height={32} className="rounded-full" />
          <span className="font-semibold text-gray-800">John Nguyen</span>
        </div>
        <Image src="/coder.webp" alt="McDonald's" width={24} height={24} />
      </div>

      <div className="p-4 max-h-60 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, idx) => (
            <div key={idx} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.role === 'user' ? 'You' : 'John Nguyen'}:</strong> {msg.content}</p>
          </div>
        
        ))}
        {loading && <div className="text-gray-400">Typing...</div>}
      </div>

      <div className="flex items-center border-t p-2">
        <input
          type="text"
          placeholder="Write a reply..."
          value={input}
          onChange={e => setInput(e.target.value)}
          className="flex-1 px-3 py-2 text-sm border rounded-full focus:outline-none focus:ring-2"
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-teal-500 text-white p-2 rounded-full w-10"
        >
          ➤
        </button>
      </div>

      <div className="text-xs text-center text-gray-400 p-1">
        Powered by <a className="underline" href="#">John Nguyen</a>
      </div>
    </div>
  );
}
