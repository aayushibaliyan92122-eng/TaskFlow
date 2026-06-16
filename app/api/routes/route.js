import getCurrentuser from "../../lib/auth.js";
import prisma 
from "../../lib/prisma.js";;



export async function GET() {

  const todos =
  await prisma.todo.findMany()


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
      id: userId
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

  await prisma.todo.delete({
    where: {
      id: data.id,
    },
  });

  return Response.json({
    success: true,
    message: "Todo deleted successfully",
  });
}

export async function PATCH(request) {
  const data = await request.json()
if(data.title){
  await prisma.todo.update({
  where: {
    id: Number(data.id)
  },

  data: {
    title: data.title
  }
})

console.log(data)
console.log("updated data")
}

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