export function GET(){
    const text="Hello word!";
    return new Response(text);
}


export async function POST(request){
    const data =await request.text();
    return new Response(data);
}