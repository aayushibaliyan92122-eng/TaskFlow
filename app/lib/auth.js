
import jwt from "jsonwebtoken"
import { cookies } from "next/headers"
import prisma from "./prisma"



async function getCurrentUser() {
    const cookieStore = await cookies()
    const token = cookieStore.get("token")
    if (!token?.value) return null

    try {
        const verifiedToken = jwt.verify(token.value, process.env.JWT_SECRET)
        const userId = verifiedToken.userId
        if (!userId) return null

        const userinfo = await prisma.user.findUnique({
            where: { id: userId },
        })
        if(!userinfo){
  return null
}

        return userinfo
    } 
    catch(error){
  console.error("FULL ERROR:", error)
  throw error
}
}
export default getCurrentUser