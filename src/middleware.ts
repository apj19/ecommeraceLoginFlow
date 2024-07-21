import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {


  const currentPath = request.nextUrl.pathname;
  const isPublicPath = (currentPath === '/') || currentPath === '/signup' 
   const verifypath=currentPath === '/verify'
   const token = request.cookies.get('token')?.value ?? '';
   
   
   if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/home', request.nextUrl))
  }

  // if(verifypath && token) {
  //   return NextResponse.redirect(new URL('/home', request.nextUrl))
  // }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }
  
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/signup','/home','/verify'],
}