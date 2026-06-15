
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"



async function getCurrentuser() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")

   const verifiedToken =  jwt.verify(token.value , process.env.JWT_SECRET)

  console.log( verifiedToken.userId)



    
}
export default getCurrentuser