export declare interface headersBody {
    "Content-Type": string,
    [index: string]: any
}

export declare interface requestBody {
    ip: string,
    url: string,
    data: any,
    headers: headersBody,
    method: 'post' | 'POST' | 'get' | 'GET'
}

export declare interface responseBody {
    [propName: string]: any
}

export declare type fetchInter<T, P extends any[]> = (...args: P) => Promise<T>