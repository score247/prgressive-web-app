import NextI18Next, { WithTranslation } from "next-i18next";
import { NextPage } from "next";
import { useTranslation as originalUseTranslation } from "react-i18next";
const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["vi", "id", "ms", "th", "zh"],
  localePath:
    typeof window === "undefined" ? "public/static/locales" : "static/locales",
  localeSubpaths: {
    vi: "vi",
    id: "id",
    ms: "ms",
    th: "th",
    zh: "zh"
  }
});

export const {
  withTranslation,
  appWithTranslation,
  Link,
  i18n,
} = NextI18NextInstance;

export const useTranslation = originalUseTranslation;

export type LocalizedPage<P = {}, IP = P> = NextPage<
  P & WithTranslation,
  IP & { namespacesRequired: string[] }
>;

export default NextI18NextInstance;
