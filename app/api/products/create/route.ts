import { connected } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import ProductModel from "@/models/productSchema";

export async function POST(request:NextRequest){
    const {name,category,description,price,color,size,image,stock}=await request.json();
    await connected();
    const product=await ProductModel.create({
        name,
        category,
        description,
        price,
        color,
        size,
        image,
        stock
    })
    return NextResponse.json({message:"Product created successfully",product},{status:201});
}



// export async function GET(){
//     try {
//         await connected();
//         const products=await ProductModel.find();
//         return NextResponse.json({products},{status:200});
//     } catch (error) {
//         console.log("Error: ",error);
//     }
// }


export async function DELETE(request:NextRequest){
    const id=request.nextUrl.searchParams.get("id");
    await connected();
    await ProductModel.findByIdAndDelete(id);
    return NextResponse.json({message:"Product deleted successfully"},{status:200});
}