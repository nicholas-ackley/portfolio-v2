import React, { useState, useRef, useEffect } from "react";

export default function TerminalContent() {
  const [lines, setLines] = useState<string[]>([
    "$ whoami",
    "Nicholas Ackley - Software Engineer",
    "$ pwd",
    "/building/cool/projects",
  ]);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const parts = cmd.trim().split(" ");
    const main = parts[0]?.toLowerCase();
    const arg = parts.slice(1).join(" ");

    const append = (output: string | string[]) => {
      setLines((prev) => [...prev, `$ ${cmd}`, ...(Array.isArray(output) ? output : [output])]);
    };

    switch (main) {
      case "help":
        append([
          "Available commands:",
          "whoami, pwd, ls, cat, wget, clear",
          "Example: cat current.status",
        ]);
        break;

      case "whoami":
        append("Nicholas Ackley - Software Engineer @ UTD");
        break;

      case "pwd":
        append("/building/cool/projects");
        break;

      case "ls":
        append([
          ".experience.sh",
          ".projects.sh",
          ".blogs.sh",
          ".contact.sh",
        ]);
        break;

      case "cat":
        if (arg === "current.status") {
          append([
            "Location: Dallas, TX",
            "Currently: Building projects and expanding my portfolio",
            "Studies: University of Texas at Dallas",
            "Side-Project: Game Development with Godot Engine",
          ]);
        } else if (arg === "skills") {
          append([
            "/TypeScript /React /Python /FastAPI /Java /SQL /MongoDB",
          ]);
        } else {
          append(`cat: ${arg || "[missing filename]"}: No such file or directory`);
        }
        break;
case "wget":
  append([
    '$ wget resume',
    'Downloading resume...',
    'nicholasackley.pdf (click to download)',
  ]);
  setTimeout(() => {
    const link = document.createElement("a");
    link.href = "/nicholasackley.pdf";
    link.download = "nicholasackley.pdf";
    link.click();
  }, 500);
  break;




      case "clear":
        setLines([]);
        break;

      default:
        append(`${main}: command not found (type 'help')`);
        break;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim() !== "") handleCommand(input);
      setInput("");
    }
  };

  return (

    <div
      ref={containerRef}
      className="flex-1 border-t overflow-y-auto p-1 space-y-1 font-mono mt-10"
      onClick={() => inputRef.current?.focus()}
    >
{lines.map((line, i) => (
  <p
    key={i}
    className="whitespace-pre mb-3 animate-fadeIn"
    dangerouslySetInnerHTML={{
      __html: line.includes("nicholasackley.pdf")
        ? line.replace(
            "nicholasackley.pdf",
            `<a href="/nicholasackley.pdf" download class="underline text-hackerGreen hover:text-hackerGreen/70">nicholasackley.pdf</a>`
          )
        : line,
    }}
  />
))}


      <div className="flex animation m-2">
        <span className="mr-1">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent outline-none text-hackerGreen flex-1"
          spellCheck={false}
          autoComplete="off"
          autoFocus
        />
        <span className="animate-blink">_</span>

      </div>
    </div>
  );
}
