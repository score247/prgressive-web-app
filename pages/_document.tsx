import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from "next/document";
import Sentry from "../common/helpers/sentry";

process.on("unhandledRejection", err => {
  Sentry.captureException(err);
});

process.on("uncaughtException", err => {
  Sentry.captureException(err);
});

class Score247Document extends Document<{ isMobileView: boolean }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    const isMobileView = (
      ctx.req?.headers["user-agent"] ?? navigator.userAgent
    ).match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    );
    return { ...initialProps, isMobileView };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#F8F9FC" />
          <meta name="Description" content="Score247" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            href="/static/images/icon152x152.png"
          ></link>
        </Head>
        <body className={this.props.isMobileView ? "mobile" : ""}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Score247Document;
