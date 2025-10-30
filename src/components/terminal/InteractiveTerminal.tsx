import { useState } from "react";

export default function Terminal() {
  const [history, setHistory] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() === "") return;
      setHistory([...history, `$ ${input}`]);
      setInput("");
    }
  };

  return (
    <div className="w-full h-full bg-black text-green-400 font-mono p-4 overflow-y-auto">
      <div className="space-y-1">
        {history.map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        <div className="flex">
          <span className="mr-2">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none text-green-400 w-full caret-green-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
