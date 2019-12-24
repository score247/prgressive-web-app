import { WithTranslation } from "next-i18next";

export type State = {
  currentDate: Date
};

export type Props = {
  selectedDate: Date;
  onlyLiveMatch: boolean;
  breadcrumbs: string[];
} & WithTranslation;
