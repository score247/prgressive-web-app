import CryptoJS from "crypto-js";
import axios, { AxiosRequestConfig } from "axios";
import lscache from "lscache";

export class AuthenticateAPI {
    private static readonly LOCAL_STORAGE_TOKEN = 'token';
    private static readonly authenticateAPIUrl = "https://api.score247.net/api/authenticate/generateToken";


    public static getAuthentication() {
        this.initToken();

        return {
            accept: "application/x-msgpack",
            Authorization: `Bearer ${this.getToken()}`
        };
    }

    private static initToken(): void {
        const key = "350cd642f6764a154a9e4f03eb3121b6";
        const iv = "382af5535cba45839752a452c16bc618";
        const encrypted = CryptoJS.AES.encrypt("WebApp", key, { iv: iv }).toString();
        const data = {
            userId: "WebApp",
            encryptedInfo: encrypted
        };

        axios
            .post(this.authenticateAPIUrl, data)
            .then(response => {
                const token = response.data;
                this.storeToken(token);
            });

    }

    private static storeToken(token: string): void {
        lscache.set(this.LOCAL_STORAGE_TOKEN, token, 120);
    }

    public static getToken(): string | null {
        return lscache.get(this.LOCAL_STORAGE_TOKEN);
    }
}
