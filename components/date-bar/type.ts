import { WithTranslation } from "next-i18next";

export type State = {
  isLive: boolean;
  selectedDate: Date;
  dateList: Array<Date>;
};

export type Props = {
  onDateChange: (date: Date) => void;
  onLiveMatchChange: () => void;
} & WithTranslation;
