import { NextResponse } from "next/server";
import toast from "react-hot-toast";
export async function GET(){
    try {
        const response=await NextResponse.json({
            message:"User logged out successfully",
            success:true,
        })
        
        // console.log("Response: ",response);
        response.cookies.set("token","",{
            httpOnly:true,
            expires:new Date(0),
        });

        // console.log("Response: ",response);
        return response;
    } catch (error: any) {
        toast.error(error.message);
        console.log("Error: ",error);

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}