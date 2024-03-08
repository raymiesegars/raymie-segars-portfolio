import { Resend } from "resend";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { Separator } from "@/components/ui/separator";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email, subject, body } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Raymie <onboarding@resend.dev>",
      to: "raymievsegarsiv@gmail.com",
      subject: subject,
      react: (
        <div>
          <p>{body}</p>
          <br />
          <br />
          <p>
            This email was sent via cc to: {email} and
            raymievsegarsiv@gmail.com{" "}
          </p>
        </div>
      ),
    });

    console.log(data);
    return NextResponse.json({ body: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ body: error }, { status: 500 });
  }
}
