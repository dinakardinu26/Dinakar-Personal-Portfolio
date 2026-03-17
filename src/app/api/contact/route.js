export async function POST(req) {
  try {
    const data = await req.json();
    
    // In a real application, you would send an email here using SendGrid, AWS SES, or save to a Database like Supabase/MongoDB.
    // For this portfolio demonstration, we'll simulate a successful response.
    
    console.log("Form submission received:", data);
    
    return new Response(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
