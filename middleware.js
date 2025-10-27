import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);
import {
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_LOGIN_REDIRECT_CLIENT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes"

export default auth((req) => {

  // console.log("ROUTE: ", req.nextUrl.pathname)
  const {nextUrl} = req;
  console.log("req is :", req.nextUrl.pathname)
  const isLogedIn = !!req.auth
  console.log("Is Logged In: ", isLogedIn)
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)
  console.log("IsAPiAuthRoute", isApiAuthRoute)
  console.log("Auth route is: ", isAuthRoute)
  if(isApiAuthRoute){
    return NextResponse.next();
  };
  
  if(isAuthRoute){
    console.log("Auth route is: ", isAuthRoute)
    if(isLogedIn){
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return NextResponse.next();
  }
  if( isLogedIn && nextUrl.pathname === "/") return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT_CLIENT, nextUrl));


  if(!isLogedIn && !isPublicRoute){
    let callbackUrl = nextUrl.pathname;
    if(nextUrl.search){
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    console.log("Redirecting to Login: ", `/auth/login?${encodedCallbackUrl}`)
    return NextResponse.redirect(new URL(
      `/auth/login?callbackUrl=${encodedCallbackUrl}`,
       nextUrl
    ));
  }

  return NextResponse.next(); //Means:  Allow It!! Don't do anything if the user is logged in and trying to access a public route.

})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}