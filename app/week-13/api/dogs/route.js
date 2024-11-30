import {z} from "zod";
import {neon} from "@neondatabase/serverless";

export async function GET() {
    //retrive all dogs from database
    //database functionality goes here
    const dbURL = process.env.DATABASE_URL || "";
    const sql = neon(dbURL);
    const response = await sql`select * from dogs`;

    return new Response(JSON.stringify(response),{status:200});

}


export async function POST(request) {
    const newDog= await request.json();
    //validate the incoming data
    if(typeof newDog.name!='string' || !newDog.name instanceof String){

    }
    if(newDog.age){newDog.age=Number(newDog.age);}
    const newDogSchema = z.object({
        name: z.string(),
        age: z.number().min(1).max(30)
    });
    try {
        newDogSchema.parse(newDog);
    } catch (error) {
        return new Response(null, {status:406});
    }


    //ad newdog to the database
    const dbURL = process.env.DATABASE_URL || "";
    const sql = neon(dbURL);
    const response = await sql`INSERT INTO dogs(name,age) VALUES(${newDog.name},${newDog.age}) 
    RETURNING *;`;
    //newDog.id = 4;
    // INSERT INTO dogs(id,name,age) values(....)
    return new Response(JSON.stringify(response),{status:201});

}
