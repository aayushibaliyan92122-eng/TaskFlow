import prisma 
from "../../../lib/prisma.js";;
import bcrypt from "bcryptjs";

export async function POST(request) {
    const data = await request.json()
    console.log(data)

    


const user = await prisma.user.findUnique(
{
  where: {
    email: data.loginData.email
  }
})

if(!user){
    return Response.json(
       { success: false,
        message: "invalid credentisls"},
       { status:401,}

    )
}else{
   const comparepassword = await bcrypt.compare(data.loginData.password, user.password)

   if(!comparepassword){
    return Response.json(
       { success: false,
        message: "invalid credentisls"},
       { status:401,}

    )
   }

return Response.json(
       { success: true,
        message: "logged in succesfully"},
       { status:200,}

    )
    
}
}
