
import getCurrentUser from "../../../lib/auth"


export async function GET() {
    try {
        const userInfo = await getCurrentUser()

        if (!userInfo) {
            return Response.json(
                { success: false, message: "user is not available" },
                { status: 401 }
            )
        }

        return Response.json(
            { success: true, message: "user fetched", userinfo: userInfo },
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