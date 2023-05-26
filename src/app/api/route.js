import { NextResponse } from "next/server";

import { ChatGPTUnofficialProxyAPI } from "chatgpt";

const ai = new ChatGPTUnofficialProxyAPI({
    accessToken: process.env.ACCESS_TOKEN,
    apiReverseProxyUrl: 'https://api.pawan.krd/backend-api/conversation',
})

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    if (!q) {
        return new Response("Bad Request", { status: 400 });
    }
    const res = await ai.sendMessage(q);
    return NextResponse.json({ res });
}
