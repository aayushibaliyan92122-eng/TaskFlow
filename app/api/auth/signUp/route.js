import prisma 
from "../../../lib/prisma.js";;
import bcrypt from "bcryptjs";

export async function GET() {

  const user =
  await prisma.user.findMany()


  return Response.json({
    success: true,
    data : user,
  });

}

export async function POST(request){

const data =
 await request.json()
  console.log(data)

//  if(!data){
//     return Response.json({
//       success: false,
//       message: " all credentials are required",
//     }, { status: 400 });
//  }

if(
 !data.userData?.name ||
 !data.userData?.email ||
 !data.userData?.password
){
    return Response.json({
      success: false,
      message: " all credentials are required",
    }, { status: 400 });
 }

const existemail = await prisma.user.findUnique({where:{email:data.userData.email}})

if(existemail){
   return Response.json({
    success: false,
    message: "userdata with this email already exist",  
  }, { status: 409 })
}else{

  const hashedPassword = await bcrypt.hash(data.userData.password, 10)
  //creating db
    await prisma.user.create({
  data: {
    name: data.userData.name,
    password:hashedPassword,
    email : data.userData.email
}

});
  return Response.json({
    success: true,
    message: "userdata created successfully",  
  }, { status: 201 })
  
 }
}

