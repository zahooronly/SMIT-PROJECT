import { connected } from "@/config/dbConfig";
import ProductModel from "@/models/productSchema";
import { NextRequest, NextResponse } from "next/server";


export async function PUT(request:NextRequest,{params}:any){
    const {id}=params;
    const {
        newName:name,
        newCategory:category,
        newDescription:description,
        newPrice:price,
        newColor:color,
        newSize:size,
        newImage:image,
        newStock:stock
    }=await request.json();
    await connected();
    try {
        
        await ProductModel.findByIdAndUpdate(
            id,{name,category,description,price,color,size,image,stock}
            );
    } catch (error) {
        console.log("Error: ",error);
    }
    return NextResponse.json({message:"Product updated successfully"},{status:200});
}