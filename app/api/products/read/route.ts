import { connected } from "@/config/dbConfig";
import Product from "@/models/productSchema";
import { NextResponse } from "next/server";

export async function GET(){
    await connected();
    const products=await Product.find();
    return NextResponse.json({products},{status:200});
}