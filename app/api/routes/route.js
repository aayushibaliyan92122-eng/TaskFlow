let todos = [];


export async function GET() {

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
   todos.push(data.title);
  return  Response.json({
    success: true,
    message: "Todo created successfully",  
  }, { status: 201 })
  
};



export async function
DELETE(request) {

  const data =
    await request.json();

  console.log(data);

  todos = todos.filter(
    (_, index) =>
      index !==
      data.index
  );

  return Response.json({
    success: true,
    message:
      "Todo deleted successfully",
  });

  
}

