import NextI18Next, { WithTranslation } from "next-i18next";
import { NextPage } from "next";
const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["vi", "id", "th", "zhTW", "zhCN"],
  localePath:
    typeof window === "undefined" ? "public/static/locales" : "static/locales",
  localeSubpaths: {
    vi: "vi",
    id: "id",
    th: "th",
    zhCN: "zhCN",
    zhTW: "zhTW",
  }
});

export const {
  withTranslation,
  appWithTranslation,
  Link,
  i18n,
  useTranslation
} = NextI18NextInstance;

export type LocalizedPage<P = {}, IP = P> = NextPage<
  P & WithTranslation,
  IP & { namespacesRequired: string[] }
>;

export default NextI18NextInstance;
