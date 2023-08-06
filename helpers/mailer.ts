import nodemailer from 'nodemailer';
import User from '@/models/userModel';
import bcryptjs from 'bcryptjs';

export const sendEmail = async ({email,emailType,userId}:any) => {
    try {
        // create a hashed token
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        
        if (emailType==="VERIFY"){
            await User.findByIdAndUpdate(userId,{verifyToken:hashedToken,verifyTokenExpires:Date.now()+3600000});
        } else if (emailType==="RESET"){
            await User.findByIdAndUpdate(userId,
                {
                    forgotPasswordToken:hashedToken,
                    forgotPasswordTokenExpire:Date.now()+3600000
            });
        }
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAIL_USERNAME,
              pass: process.env.MAIL_PASSWORD
              //TODO: added these credentials to .env file
            }            
        });
        const mailOptions = {
            from: process.env.MAIL_FROM,
            to: email,
            subject: emailType==="VERIFY"?"Verify your email":"Reset your password",
            html: emailType==="VERIFY"?`<p>Click <a href="${process.env.DOMAIN_NAME}/verify/${hashedToken}">here</a> to verify your email</p>`:`<p>Click <a href="${process.env.DOMAIN_NAME}/reset/${hashedToken}">here</a> to reset your password
            or copy and paste the following link in your browser ${process.env.DOMAIN_NAME}/reset/${hashedToken}
            
            </p>`
        }
        return await transport.sendMail(mailOptions);
        // return info;
    } catch (error:any) {
        throw new Error(error.message);
        
    }
}
