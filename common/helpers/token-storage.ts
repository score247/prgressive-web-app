import CryptoJS from "crypto-js";
import axios from "axios";
import lscache from "lscache";
import appSettings from "../../app-settings";

export class AuthenticateAPI {
    private static readonly LOCAL_STORAGE_TOKEN = 'token';

    public static getNewToken(): Promise<string> {
        const key = appSettings.encryptKey;
        const iv = appSettings.salt;
        const deviceId = "WebApp";
        const encrypted = CryptoJS.AES.encrypt(deviceId, key, { iv: iv }).toString();
        const data = {
            userId: deviceId,
            encryptedInfo: encrypted
        };

        return new Promise((resolve, reject) => {
            axios
                .post(appSettings.authenticateUrl, data)
                .then(response => {
                    const token = response.data;
                    this.storeToken(token);

                    resolve(token);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }

    private static storeToken(token: string): void {
        const expiryMilliseconds = 1000;
        const numExpiryUnits = 420;
        lscache.setExpiryMilliseconds(expiryMilliseconds);
        lscache.set(this.LOCAL_STORAGE_TOKEN, token, numExpiryUnits);
    }

    public static getToken(): string | null {
        return lscache.get(this.LOCAL_STORAGE_TOKEN);
    }
}
