
import getCurrentUser from "../../../lib/auth"


export async function GET() {
    

const userId = await getCurrentUser()
if(!userId){
    return Response.json(
        {success: false, message: "user is not available"},
        {status:401}
    )
}else {
    return Response.json(
        {success: true ,message:"user fetched", userId: userId},
        {status:208}
    )
}



}