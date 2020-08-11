// nodemailer
"use strict";
const nodemailer = require("nodemailer");
const fs = require('fs');
const ejs = require('ejs');
// const template = fs.readFileSync('./email.html', 'utf-8')
const template = fs.readFileSync('./email.ejs', 'utf-8')
const html = ejs.compile(template)
const htmlWithData = html({
    userName: '老姐',
    lists:['管姐','巧姐']
})

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.qq.com",
    // 或
    service: 'qq',
    port: 465, // 端口 为 465
    secure: true, // true for 465, false for other ports
    auth: {
      user: '1239941131@qq.com', // generated ethereal user
      pass: '授权码', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"xiao zhou ya" <1239941131@qq.com>', // sender address
    to: "1358238105@qq.com, 2289029828@qq.com", // list of receivers  1239941131@qq.com
    subject: "哈喽", // Subject line
    text: "Hello 老姐", // plain text body
    // html: template, // html body
    // 为了调试样式 我们把 html 分开独立出去
    html: htmlWithData,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);