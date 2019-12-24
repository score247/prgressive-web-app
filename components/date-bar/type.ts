import { WithTranslation } from "next-i18next";

export type State = {
  dateList: Array<Date>;
};

 export type Props = {
  selectedDate: Date;
  onlyLiveMatch: boolean;
  onDateChange: (date: Date) => void;
  onLiveMatchChange: (onlyLiveMatch: boolean) => void;
} & WithTranslation ;
