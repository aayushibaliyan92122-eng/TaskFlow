

import {  NextResponse } from "next/server"
import getCurrentUser from "../../../lib/auth"


export async function GET() {




    try {
        const userInfo = await getCurrentUser()

        // FIX: Removed invalid NextResponse.redirect from Response.json - can only return Response, not mix with json
        if (!userInfo) {
            return Response.json(
                { success: false, message: "user is not available" },
                { status: 401 }
            )
             
        }

        return Response.json(
            { success: true, message: "user fetched", userinfo:  {
 id: userInfo.id,
 name: userInfo.name,
 email: userInfo.email
} },
            { status: 200 }
        )
    } catch (error) {
        console.error("/api/auth/me error:", error)
        return Response.json(
            { success: false, message: "failed to fetch user" },
            { status: 500 }
        )
    }
}