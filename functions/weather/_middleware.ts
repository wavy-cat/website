// Set CORS to all /weather responses
export const onRequestGet: PagesFunction = async (context: { next: () => any; }) => {
  const response = await context.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Max-Age', '86400');
  return response;
};