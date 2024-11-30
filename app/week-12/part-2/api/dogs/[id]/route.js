export async function GET(request, {params} ) {
    const {id} = await params;
    const idNum= Number(id);
    //retrieve the lists of dogs from the database
    //select * from  dogs
    const dogs=[
        {id:1, name:"Luna", age:2},
        {id:2, name:"Max", age:4},
        {id:3, name:"Rover", age:3}
    ];
    let thisDog = dogs.find((dogs) => dogs.id == idNum );
    //not exist 
    if (!thisDog) {
        return new Response("This dog does not exist", {status:404});
    }
    return new Response(JSON.stringify(thisDog), {status:200});
}
export async function PUT(request, {params}) {
    const {id} = await params;
    const idNum= Number(id);
    let dog = await request.json();
    //validation and error handling on dog object
    // update dog number idnum in the database
    return new Response(null,{status:204});
}
//
export async function PATCH(request, {params}) {
    const {id} = await params;
    const idNum= Number(id);
    let dog = await request.json();
    if(dog.name){
        //update the dog name in the database for dog number

    }
    if(dog.age){
        //update the dog age in the database for dog number

    }
    return new Response(null,{status:204});
}

export async function DELETE(request, {params}) {
    const {id} = await params;
    const idNum= Number(id);
    //check for authenticated user
    
    //DELETE DOG NUMBER [IDNUM] FROM DATABASE
    return new Response(null,{status:204});

}