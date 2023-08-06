import { connected } from "@/config/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connected();

export async function POST(request: NextRequest) {
    try {
        const reqBody=await request.json();
        const {email,password}=reqBody;
        console.log("Request.Body: \n",reqBody);

        // check if user already exists
        const user=await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400});
        }
        
        // check if password is correct
        const isMatch=await bcryptjs.compare(password,user.password); 
        if(!isMatch){
            return NextResponse.json({error:"Invalid credentials"},{status:400});
        }
        // create tokenData
        const tokenData={
            id:user._id,
            name:user.name,
            email:user.email,
        }
        // create token
        const token=await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{
            expiresIn:"1d",
        });

        // create response
        const response=NextResponse.json({
            message:"User logged in successfully",
            success:true,
        })

        // set cookie
        response.cookies.set("token",token,{
            httpOnly:true,
        })
        return response;
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
        
    }
}