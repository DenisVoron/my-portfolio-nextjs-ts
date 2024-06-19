import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // use SSL
});

// export const GET = async (data: any) => {
//   try {
//     const info = await transporter.sendMail({
//       from: `"${data.name} 👻" ${data.email}`, // sender address
//       to: "denis.voronko@gmail.com", // list of receivers
//       subject: data.subject, // Subject line
//       text: data.message, // plain text body
//       html: "<b>Hello world?</b>", // html body
//     });

//     console.log(info);
//   } catch (error) {}
// };
