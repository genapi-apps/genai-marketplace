import axios from "axios"
import Cookies from "js-cookie"
import { setCookie } from "@/utils/itemConfig"
const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL

const authFetch = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`
    },
})

const getNewAccessToken = async (token: string) => {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/getNewAccessToken`, { refreshToken: token })
    // console.log("use effect is working here", response.data.user);
    localStorage.setItem("user", JSON.stringify(response.data.user))
    const { accessToken } = response.data
    if (accessToken)
        setCookie("accessToken", accessToken, 8000, "/")
}


// request interceptor
authFetch.interceptors.request.use(
    (config) => {
        config.headers["Authorization"] = `Bearer ${Cookies.get("accessToken")}`
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)
// response interceptor
authFetch.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response.status === 401) {
            getNewAccessToken(Cookies.get("refreshToken")!)
        }
        if (error.response.status === 403) {
            // toast.error("Not authorized to access this route")
        }
        return Promise.reject(error)
    }
)

export default authFetch