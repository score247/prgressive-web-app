export type State = {
  currentDate: Date
};

export type Props = {
  selectedDate: Date;
  onlyLiveMatch: boolean;
  breadcrumbs: string[];
};
