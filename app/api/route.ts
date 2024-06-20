import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    const { subject, message, name, email } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "meta",
      host: "smtp.meta.ua",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: "denis_vr@meta.ua",
      to: "denis_vr@meta.ua",
      subject: subject,
      text: message,
      html: `<p>name: ${name}. ${message}</p>
             <p>email: ${email}</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email send successfully", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send email", status: 500 },
      { status: 500 }
    );
  }
};
