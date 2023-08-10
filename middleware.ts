import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path=request.nextUrl.pathname;
    const isPublicPath=path=="/login"||path=="/signup";
    const token=request.cookies.get("token")?.value||"";
    if (isPublicPath && token){
        return NextResponse.redirect(new URL("/products",request.nextUrl));
    }
    if (!isPublicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl));
    }
}

export const config = {
    matcher: [
    "/",
    "/dashboard",
    "/products",
    "/profile",
    "/product/create",
    "/product/update",
    "/product/delete",
    "/profile",
    "/cart",
    "/login",
    "/signup",
    ]
}