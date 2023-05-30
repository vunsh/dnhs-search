import { NextResponse } from "next/server";

import { gpt } from "chatgpt-api-free";

import data from '../../../data.json'

const model = new gpt({
    'api_key': 'pk-amtqoxijWotmlQZpRLqebuKIOOkQSiouVTWQZYSCcIcIbHEK',
    'temperature': 0.9, 
    'max_tokens': 256 // max: 4090
})

const jsonString = JSON.stringify(data)


export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const q = searchParams.get('q');
    if (!q) {
        return new Response("Bad Request", { status: 400 });
    }
    const completion = await model.chat_completion([
        {
            'role': 'system',
            'content': `You are a friendly question answer bot! Here is the data you have ${jsonString}. If you don't know the answer, you can say you don't have data on this yet.}`
    
        },
        {
            'role': 'user',
            'content': `${q}`
        }
    ])
    const res = completion.choices[0].message.content

    return NextResponse.json({ res });
}
