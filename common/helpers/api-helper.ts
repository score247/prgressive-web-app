import axios from "axios";
import { decode } from "@msgpack/msgpack";
import { AuthenticateAPI } from "../../apis/authenticate-api";


export default axios.create({
    headers: AuthenticateAPI.getAuthentication(),
    responseType: "arraybuffer",
    transformResponse: [
        data => {
            return decode(new Uint8Array(data));
        }
    ]
});
