// pages/api/chat.js
export async function GET(req){
  return new Response("Hello from Langflow API", { status: 200 });
}
export async function POST(req,res) {
  
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }
  
    const { message } = req.body;
  
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo', // or 'gpt-4' if you have access
          messages: [...messages, message],
        }),
      });
  
      const data = await response.json();
      return new Response(JSON.stringify(data),{status:201});
      
    } catch (error) {
      return new Response(JSON.stringify(error),{status:500});
    }
  }
  