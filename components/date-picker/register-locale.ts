import { vi, enUS, th, zhCN, zhTW, id } from "date-fns/locale";
import { registerLocale, setDefaultLocale } from "react-datepicker";

export function registerDatePickerLocale() {
  vi.options = { weekStartsOn: 1 };
  enUS.options = { weekStartsOn: 1 };
  th.options = { weekStartsOn: 1 };
  zhCN.options = { weekStartsOn: 1 };
  zhTW.options = { weekStartsOn: 1 };
  id.options = { weekStartsOn: 1 };

  registerLocale("vi", vi);
  registerLocale("en", enUS);
  registerLocale("th", th);
  registerLocale("zhCN", zhCN);
  registerLocale("zhTW", zhTW);
  registerLocale("id", id);
  setDefaultLocale("en");
}
