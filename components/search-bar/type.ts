export type SearchBarProps = {
  filterText: string;
  onFilterTextChange: (filterText: string) => void;
  onReset: () => void;
};
