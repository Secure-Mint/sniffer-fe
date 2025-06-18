import { SnifferModel } from "@/types";
import axios, { AxiosError, AxiosInstance } from "axios";

class ApiClient {
    private static baseUrl = process.env.NEXT_PUBLIC_API_URL;
    private static axiosInstance: AxiosInstance = (() => {
        const instance = axios.create({ baseURL: ApiClient.baseUrl });
        instance.interceptors.response.use(
            (res) => res,
            (error: AxiosError) => Promise.reject(error)
        );
        return instance;
    })();

    public static async setAuthToken(accessToken: string) {
        ApiClient.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    public static async login(payload: { email: string; password: string }): Promise<{ accessToken: string }> {
        try {
            return (await this.axiosInstance.post("/admin/v1/auth/login", payload)).data.data;
        } catch (error) {
            throw new Error((error as AxiosError).message);
        }
    }

    public static async sniffToken({ address }: { address: string }): Promise<SnifferModel> {
        try {
            console.log(ApiClient.baseUrl);
            return (await this.axiosInstance.get(`/v1/sniffer?address=${address}`)).data.data;
        } catch (error) {
            throw new Error((error as Error).message);
        }
    }
}

export default ApiClient;
