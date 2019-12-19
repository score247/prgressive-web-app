import NextI18Next, {  WithTranslation } from 'next-i18next';
import { NextPage } from 'next';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['vi', 'id', 'ms', 'th', 'zh'],
  localeSubpaths: {
    vi: 'vi',
    id: 'id',
    ms: 'ms',
    th: 'th',
    zh: 'zh'
  }
});

export default NextI18NextInstance;
export const {
  withTranslation,
  appWithTranslation,
  Link
} = NextI18NextInstance;

export type LocalizedPage<P = {}, IP = P> = NextPage<
  P & WithTranslation,
  IP & { namespacesRequired: string[] }
>;
