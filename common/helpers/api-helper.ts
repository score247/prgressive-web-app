import axios from "axios";
import { decode } from "@msgpack/msgpack";

export default axios.create({
    headers: {
        accept: "application/x-msgpack"
    },
    responseType: "arraybuffer",
    transformResponse: [
        data => {
            return decode(new Uint8Array(data));
        }
    ]
});