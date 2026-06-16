
import prisma from "@/app/lib/prisma";
import { cookies } from "next/headers.js";

    

export  async function POST(request) {


   (await cookies()).delete("token")
   

return Response.json(
    {success:true , message : "cookies are dlted ,logout happened"} , {status: 210}
)
    
}
