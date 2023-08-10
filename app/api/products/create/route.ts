import { connected } from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/models/productSchema";

export async function POST(request:NextRequest){
    const {name,category,description,price,color,size,image,stock}=await request.json();
    await connected();
    const product=await Product.create({
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
export async function GET(){
    await connected();
    const products=await Product.find();
    return NextResponse.json({products},{status:200});
}