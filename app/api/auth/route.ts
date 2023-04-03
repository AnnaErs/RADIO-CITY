import {type NextRequest} from "next/server";

export async function POST(request: NextRequest) {
    const json = await request.json();

    const expires = new Date(
        new Date().getTime() + Number(json.expires_in),
    ).toUTCString();

    return new Response(JSON.stringify({status: "ok"}), {
        status: 200,
        headers: {
            "Set-Cookie": `token=${json.access_token}; HttpOnly; Expires=${expires}; Path=/`,
        },
    });
}
