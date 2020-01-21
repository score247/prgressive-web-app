import { enUS, vi } from "date-fns/locale";
import { format as datefnsFormat } from "date-fns";

export function getLocale(language = "en") {
  switch (language) {
    case "en":
      return enUS;
    case "vi":
      return vi;
  }

  return enUS;
}

export function formatDate(date: Date, format: string, language = "en") {
  return datefnsFormat(date, format, { locale: getLocale(language) });
}

export function covertToUTC(date: Date) {
  return date.toISOString().split(".")[0] + "Z";
}
