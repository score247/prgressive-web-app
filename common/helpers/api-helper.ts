import axios from "axios";
import { decode } from "@msgpack/msgpack";
import { AuthenticateAPI } from "./token-storage";
import { HttpStatusCode } from "../constants";

const instance = axios.create({
    headers: {
        accept: "application/x-msgpack"
    },
    responseType: "arraybuffer",
    transformResponse: [
        data => {
            if (data.byteLength > 0) {
                return decode(new Uint8Array(data));
            }

            return data;
        }
    ]
});

instance.interceptors.request.use(config => {
    const token = AuthenticateAPI.getToken();
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
}, error => {
    Promise.reject(error);
});

instance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        if (error.response && error.response.status === HttpStatusCode.UNAUTHORIZED) {

            return AuthenticateAPI.getNewToken()
                .then((token) => {
                    const config = error.config;
                    config.headers['Authorization'] = `Bearer ${token}`;
                    return new Promise((resolve, reject) => {
                        axios.request(config).then(response => {
                            resolve(response);
                        }).catch((err) => {
                            reject(err);
                        });
                    });
                });
        }

        return Promise.reject(error);
    }
);

export default instance;
