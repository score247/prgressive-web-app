import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["vi", "id", "ms", "th", "zh"],
  localeSubpaths: {
    vi: "vi",
    id: "id",
    ms: "ms",
    th: "th",
    zh: "zh"
  }
});

export default NextI18NextInstance;
export const { withTranslation, appWithTranslation } = NextI18NextInstance;
