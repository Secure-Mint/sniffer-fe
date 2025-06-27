import { SnifferModel } from "@/types";
import axios, { AxiosError, AxiosInstance } from "axios";

interface FormattedError {
    status: number;
    message: string;
    details: JSON;
}

class HttpError extends Error {
    private statusCode: number;
    constructor(message: string, statusCode: number) {
        super(message);
        this.name = "HttpError";
        this.statusCode = statusCode;
    }
}

class ApiClient {
    private static baseUrl = process.env.NEXT_PUBLIC_API_URL;
    private static axiosInstance: AxiosInstance = (() => {
        const instance = axios.create({ baseURL: ApiClient.baseUrl });
        instance.interceptors.response.use(
            (res) => res,
            (error: AxiosError): Promise<FormattedError> => {
                const formattedError = {
                    status: error.response?.status || 500,
                    message:
                        (error.response?.data as { message: string })?.message ||
                        error.message ||
                        "Something went wrong",
                    details: error.response?.data || null,
                };

                return Promise.reject(formattedError);
            }
        );
        return instance;
    })();

    public static async setAuthToken(accessToken: string) {
        ApiClient.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    public static async login(payload: { email: string; password: string }): Promise<{ accessToken: string }> {
        try {
            return (await this.axiosInstance.post("/admin/v1/auth/login", payload)).data.data;
        } catch (error: unknown) {
            const formattedError = error as FormattedError;
            throw new HttpError(formattedError.message, formattedError.status);
        }
    }

    public static async sniffToken({ address }: { address: string }): Promise<SnifferModel> {
        try {
            return (await this.axiosInstance.get(`/v1/sniffer?address=${address}`)).data.data;
        } catch (error: unknown) {
            const formattedError = error as FormattedError;
            throw new HttpError(formattedError.message, formattedError.status);
        }
    }
}

export default ApiClient;
