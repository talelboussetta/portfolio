import { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('https://portfolio-back-nul2.onrender.com/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userInput: input }),
      });
      if (!res.ok) {
            const errorText = await res.text();
            console.error('Server Error:', res.status, errorText);
            setMessages(prev => [...prev, { role: 'bot', content: `⚠️ Error: ${res.status}` }]);
            return;}
      const data = await res.json();

      const botMsg = { role: 'bot', content: data.reply };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: 'bot', content: '⚠️ Failed to get response' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setOpen(!open)}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 w-80 bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden">
          <div className="bg-indigo-500 text-white text-sm px-4 py-2 font-semibold">🤖 Talel's Assistant</div>

          <div className="flex-1 px-4 py-2 overflow-y-auto max-h-80 space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`p-2 rounded-md ${msg.role === 'user' ? 'bg-gray-100 text-right' : 'bg-indigo-100 text-left'}`}>
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-400 italic">Typing...</div>}
          </div>

          <div className="flex p-2 border-t">
            <input
              type="text"
              className="flex-1 border rounded-l-md px-2 py-1 text-sm focus:outline-none"
              placeholder="Ask me anything..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-indigo-500 text-white px-3 rounded-r-md text-sm">Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
