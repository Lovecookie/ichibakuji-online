interface IHttpRequest {
    url: string;
    headers?: HeadersInit;
    body: string;
}

export async function PostAsync({ url, headers, body }: IHttpRequest): Promise<Response> {
    const response = await fetch(url, {
        method: "POST",
        headers: headers ? headers : { "Content-Type": "application/json" },
        body,
    });

    return response;
}

export async function GetAsync({ url, headers, body }: IHttpRequest): Promise<Response> {
    const response = await fetch(url, {
        method: "GET",
        headers: headers ? headers : { "Content-Type": "application/json" },
        body,
    });

    return response;
}

export async function PutAsync({ url, headers, body }: IHttpRequest): Promise<Response> {
    const response = await fetch(url, {
        method: "PUT",
        headers: headers ? headers : { "Content-Type": "application/json" },
        body,
    });

    return response;
}

export async function DeleteAsync({ url, headers, body }: IHttpRequest): Promise<Response> {
    const response = await fetch(url, {
        method: "DELETE",
        headers: headers ? headers : { "Content-Type": "application/json" },
        body,
    });

    return response;
}
