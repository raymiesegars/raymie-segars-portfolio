import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChatForm } from "@/components/chat/chatForm";

function Chat({
  isCollapsed,
  setIsCollapsed,
  onSubmitSuccess,
}: {
  isCollapsed: boolean;
  setIsCollapsed: any;
  onSubmitSuccess: () => void;
}) {
  const closeChat = () => {
    setIsCollapsed(false);
  };
  return (
    <div
      className={`fixed bottom-0 right-0 z-[1] m-5 flex flex-col items-end space-y-1 pb-1 ${!isCollapsed ? "pointer-events-none" : "pointer-events-auto"}`}
    >
      <Card
        className={`px-3 transition-all duration-200 ease-linear  ${!isCollapsed ? "invisible translate-y-5 opacity-0" : "visible translate-y-0"}`}
      >
        <CardHeader>
          <CardTitle className={"text-2xl"}>Contact Me</CardTitle>
          <CardDescription>Fill the form and send me an email</CardDescription>
        </CardHeader>
        <CardContent>
          <ChatForm onSubmitSuccess={onSubmitSuccess} />{" "}
        </CardContent>
        <CardFooter
          className={"flex w-full flex-col items-start justify-end text-xs"}
        >
          <span>
            {" "}
            No data is <span className={"text-xs font-bold"}>Stored.</span>
          </span>

          <span>
            {" "}
            The Email service is provide by{" "}
            <span className={"text-xs font-bold"}>Resend &#169;</span>
          </span>
        </CardFooter>
      </Card>

      <Button
        style={{ pointerEvents: "auto" }}
        variant={"outline"}
        size={"iconLg"}
        onClick={() => setIsCollapsed(!isCollapsed)}
        aria-label="Email me a message button"
      >
        <svg
          className="with-icon_icon__MHUeb"
          data-testid="geist-icon"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: "var(--geist-foreground)",
            width: "24px",
            height: "24px",
          }}
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      </Button>
    </div>
  );
}

export default Chat;
