import { ServerResponse } from "http";
import Router from "next/router";

export const redirectToLoading = (server?: ServerResponse) => {
    const loadingUrl = "/loading";
    if (server) {
        server.writeHead(302, { Location: loadingUrl });
        server.end();
    } else {
        Router.push(loadingUrl);
    }
}