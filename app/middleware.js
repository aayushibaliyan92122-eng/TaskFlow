
import { NextResponse } from "next/server"


export async function middleware(request) {
   
    

    const  token = await request.cookies.get("token")
    if(!token){
      const redir =  NextResponse.redirect(
        new URL("/auth/login", request.url)

)

      return redir
    }else{
        
 
       const nex = NextResponse.next()
        return nex
    }
   
  
}




    export  const config = {
  matcher: ["/dashboard", "/todospage"]
}