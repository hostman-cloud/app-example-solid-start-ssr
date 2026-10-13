export function GET() {
  return Response.json({
    message: "Hello from the SolidStart API (runs on the server)",
    at: new Date().toISOString()
  });
}
