import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import * as qs from "qs"
import { fetchIp } from "./baseIp"
import { requestBody, fetchInter } from "./axios"


axios.interceptors.request.use((config: AxiosRequestConfig): AxiosRequestConfig => {
    if (config.method && config.method.toUpperCase() === "POST" && typeof config.data !== "string") {
        config.data = qs.stringify(config.data)
    }
    return config
})

const baseOption: requestBody = {
    ip: fetchIp,
    url: "",
    data: "",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method: 'POST'
}

export const fetch: fetchInter<AxiosResponse, any[]> = ({
    ip = fetchIp,
    url,
    data,
    headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    method = 'POST'
}: requestBody): Promise<AxiosResponse> => {
    return new Promise((resolve, reject) => {
        axios({
            url: ip + url,
            data,
            headers,
            method
        }).then((res: AxiosResponse) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}