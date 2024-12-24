import { neon } from "@neondatabase/serverless";

const dbURL = process.env.DATABASE_URL || "";
const sql = neon(dbURL);

export async function GET(request, {params} ) {
    const {id} = await params;
    const idNum= Number(id);
    //retrieve the lists of dogs from the database
    //select * from  dogs
    const response = await sql`select * from dog`;



    let thisDog = response.find((dogs) => dogs.id == idNum );
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
    //TODO: validation and error handling on dog object
    // update dog number idnum in the database
    const response = await sql`
    UPDATE dog SET name=${dog.name}, age=${dog.age} WHERE id=${idNum}
    RETURNING *`;
    //204 not data 200 have data
    return new Response(JSON.stringify(response),{status:200});
}
//
export async function PATCH(request, {params}) {
    const {id} = await params;
    const idNum= Number(id);
    let dog = await request.json();
    try {
        if(dog.name){
            //update the dog name in the database for dog number [idNum]
            await sql`UPDATE dog SET name = ${dog.name} WHERE id = ${idNum};`;
        }
        if(dog.age){
            //update the dog age in the database for dog number
            await sql`UPDATE dog SET age = ${dog.age} WHERE id = ${idNum};`;
        }
    } catch (error) {
        return new Response("Database Error",{status:503});
    }
    
    return new Response(null,{status:204});
}

export async function DELETE(request, {params}) {
    const {id} = await params;
    const idNum= Number(id);
    //check for authenticated user
    //DELETE DOG NUMBER [IDNUM] FROM DATABASE
    await sql`DELETE FROM dog WHERE id = ${idNum}`;
    return new Response(null,{status:204});

}