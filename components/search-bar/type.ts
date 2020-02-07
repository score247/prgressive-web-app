export type SearchBarProps = {
  filterText: string;
  onFilterTextChange: (filterText: string) => void;
  sortByValue: number;
  onSortChange: (sortValue: number) => void;
  leagues: string[];
  selectedLeagues: string[];
  onSelectLeague: (selectedLeagues: string[]) => void;
  onSubmitFilterLeagues: () => void;
};
