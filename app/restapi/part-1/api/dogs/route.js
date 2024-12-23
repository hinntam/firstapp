import {z} from "zod";
import {neon} from "@neondatabase/serverless";
import { promises as fs } from 'fs';
import path from 'path';
export async function GET() {
    //retrive all dogs from database
    //database functionality goes here
    const dbURL = process.env.DATABASE_URL || "";
    const sql = neon(dbURL);
    const response = await sql`select * from dogs`;

    return new Response(JSON.stringify(response),{status:200});

}


export async function POST(request) {
    /*
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

    */
    const newDog= await request.formData();
    const dogName = newDog.get("name");
    const dogAge = newDog.get("age");
    const dogFile = newDog.get("file");
    if (!dogFile) {
        return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 });
    }
     // Convert file data to buffer
     const arrayBuffer = await dogFile.arrayBuffer();
     const buffer = Buffer.from(arrayBuffer);
    // Define the file path
    const filePath = path.join(process.cwd(), 'public', `${dogName+dogAge}.jpg`);
    // Save the buffer as an image file
    await fs.writeFile(filePath, buffer);

    //insert new dog to database
    //database functionality goes here
    
    //ad newdog to the database
    const dbURL = process.env.DATABASE_URL || "";
    const sql = neon(dbURL);
    const response = await sql`INSERT INTO dogs(name,age,img,cat_num) VALUES(${dogName},${dogAge},${dogName+dogAge+'.jpg'},3) 
    RETURNING *;`;
    //newDog.id = 4;
    // INSERT INTO dogs(id,name,age) values(....)
    return new Response(JSON.stringify(response),{status:201});

}
