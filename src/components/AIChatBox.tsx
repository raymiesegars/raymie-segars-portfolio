import { cn } from "@/lib/utils";
import { Message, useChat } from "ai/react";
import { Bot, XCircle } from "lucide-react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

interface AIChatBoxProps {
  open: boolean;
  onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
  //hook is coming from the vercel.ai SDK installed, this SDK makes it easy to implement the chat functionality and has helper classes to connect it to OpenAI and LangChain
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    isLoading,
    error,
    //useChat automatically calls an endpoint called /api/chat when we call handleSubmit
  } = useChat({
    initialMessages: [
      {
        id: "1",
        role: "assistant",
        content: "Hi, I'm the chatbot!",
      },
      {
        id: "2",
        role: "user",
        content: "Hi, I am the user!",
      },
      {
        id: "3",
        role: "assistant",
        content: ` 
[test](https://codinginflow.com)
List:
- Item 1
- Item 2
- Item 3
`,
      },
    ],
  });

  return (
    <div
      className={cn(
        "bottom-0 right-0 z-50 w-full max-w-[500px] p-1 xl:right-36",
        open ? "fixed" : "hidden",
      )}
    >
      <button onClick={onClose} className="mb1 ms-auto block">
        <XCircle size={30} className="rounded-full bg-background" />
      </button>
      <div className="flex h-[600px] flex-col rounded border bg-background shadow-xl">
        <div className="mt-3 h-full overflow-y-auto px-3">
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div
      className={cn(
        "mb-3 flex items-center",
        isAiMessage ? "me-5 justify-start" : "ms-5 justify-end",
      )}
    >
      {isAiMessage && <Bot className="mr-2 flex-none" />}
      <div
        className={cn(
          "rounded-md border px-3 py-2",
          isAiMessage ? "bg-background" : "bg-foreground text-background",
        )}
      >
        <ReactMarkdown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link
                {...props}
                href={props.href ?? ""}
                className="text-primary hover:underline"
              />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
