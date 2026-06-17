
import prisma from "@/app/lib/prisma";
import { cookies } from "next/headers.js";

    

export  async function POST(request) {


   (await cookies()).delete("token")
   

// FIX: Changed status code from 210 to 200 (210 is not a valid HTTP status, 200 is OK)
return Response.json(
    {success:true , message : "cookies are dlted ,logout happened"} , {status: 200}
)
    
}
