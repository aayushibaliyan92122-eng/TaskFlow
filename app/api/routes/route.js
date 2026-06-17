import getCurrentuser from "../../lib/auth.js";
import prisma 
from "../../lib/prisma.js";;



export async function GET() {
 const userId =await  getCurrentuser()

//
if(!userId){
 return Response.json(
  {
   success:false,
   message:"unauthorized"
  },
  {status:401}
 )
}



  const todos =
  await prisma.todo.findMany(
    {
      where:{
        userId:userId.id
      }
    }
  )


  return Response.json({
    success: true,
    todos: todos,
  });

}

export async function 
    POST(request) {
    const data = await request.json();
  
  if(!data.title) {
    return Response.json({
      success: false,
      message: "Title is required",
    }, { status: 400 });
  }


  const userId = await getCurrentuser()
  if(!userId){
    return Response.json(
    {success:false ,message:"unauthorised,no user"},
    {status:401}
    )
  }

  //adding todo in prismadb
 await prisma.todo.create({
  data: {
    title: data.title,
    completed: false,
    user: {
      connect: {
      id: userId.id
     }
   }
  }
});
  return Response.json({
    success: true,
    message: "Todo created successfully",  
  }, { status: 201 })
  
};


export async function DELETE(request) {
  const data = await request.json();

  const userid = await getCurrentuser()

 const todo = await prisma.todo.findUnique({
  where: {
    id: Number(data.id)
  }
})

if(todo.userId !== userid.id){
  return Response.json(
    {success: false, message:"you are not authenticated to do this operation"},
    {status: 401}
  )
}else{
  await prisma.todo.delete(
  { where:{ id : Number(data.id)}}
  )

  return Response.json({
    success: true,
    message: "Todo deleted successfully",
  });
}
}

export async function PATCH(request) {
  const data = await request.json()
  const userid = await getCurrentuser()

   const todo = await prisma.todo.findUnique({
  where: {
    id: Number(data.id)
  }
})


if(todo.userId !== userid.id){
  return Response.json(
    {success: false , message: "u are npt authenticated to perform this operation"},
    {status:401}
  )

}else{
  if(data.title){
  await prisma.todo.update({
  where: {
    id: Number(data.id)
  },

  data: {
    title: data.title
  }
})
}

console.log(data)
console.log("updated data")
}

  // FIX: Added closing brace for else block
  //toggling
  if(data.completed !== undefined){
  await prisma.todo.update({
 where: {
   id:
     Number(data.id)
 },

 data: {
   completed:
      !data.completed
 }
}
)
  }

  return Response.json({
   success: true,
   message:
    "Todo updated successfully"
  })
}