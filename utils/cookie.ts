export const getCookie = (name: string) => {
    if(typeof document === 'undefined') {
        return undefined;
    }

    const matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
                name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                "=([^;]*)",
        ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const setCookie = (name: string, value: string, expires: string) => {
    const options: Record<string, unknown> = {
        path: "/",
        expires: new Date(new Date().getTime() + Number(expires)).toUTCString(),
    };

    let updatedCookie =
        encodeURIComponent(name) + "=" + encodeURIComponent(value);

    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }

    document.cookie = updatedCookie;
};
