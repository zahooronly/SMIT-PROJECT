import { NextResponse } from "next/server";
// import toast from "react-hot-toast";
export async function GET(){
    try {
        const response=await NextResponse.json({
            message:"User logged out successfully",
            success:true,
        })
        response.cookies.set("token","",{
            httpOnly:true,
            expires:new Date(0),
        });
        return response;
    } catch (error: any) {
        // toast.error(error.message);

        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}