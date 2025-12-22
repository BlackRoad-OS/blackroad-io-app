export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // Health check
    if (url.pathname === '/health') {
      return Response.json(
        { status: 'ok', timestamp: new Date().toISOString() },
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Version
    if (url.pathname === '/version') {
      return Response.json(
        {
          name: 'blackroad-api',
          version: '1.0.0',
          environment: 'production'
        },
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Agents endpoint
    if (url.pathname === '/agents') {
      return Response.json(
        {
          agents: [
            { id: 'deploy-bot', name: 'Deploy Bot', status: 'active' },
            { id: 'sweep-bot', name: 'Sweep Bot', status: 'active' },
            { id: 'policy-bot', name: 'Policy Bot', status: 'active' },
          ]
        },
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // 404
    return Response.json(
      { error: 'Not found' },
      { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  },
};
