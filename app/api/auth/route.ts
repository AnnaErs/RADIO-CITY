import {type NextRequest} from "next/server";

import {createUser, getUserInfoByToken} from "@api/usersAPI";

export async function POST(request: NextRequest) {
    try {
        const json = await request.json();

        const expires = new Date(
            new Date().getTime() + Number(json.expires_in),
        ).toUTCString();

        const {data} = await getUserInfoByToken(json.access_token);
        await createUser(data);

        return new Response(JSON.stringify({status: "ok"}), {
            status: 200,
            headers: {
                "Set-Cookie": `token=${json.access_token}; HttpOnly; Expires=${expires}; Path=/`,
            },
        });
    } catch (e) {
        console.log(e);
        return new Response(e, {
            status: 500,
        });
    }
}
