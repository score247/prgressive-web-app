export class ResourceType {
  public static readonly COMMON = "common";
  public static readonly FOOTER = "footer";
  public static readonly HEADER = "header";
  public static readonly BASKETBALL = "basketball";
  public static readonly SOCCER = "soccer";
  public static readonly E_SPORTS = "esports";
}

export class ResourceKey {
  public static readonly BASKETBALL = "basketball";
  public static readonly SOCCER = "soccer";
  public static readonly E_SPORTS = "esports";
  public static readonly TODAY = "today";
  public static readonly LIVE = "live";
  public static readonly LIVE_MATCH = "livematch";
  public static readonly MY_FAVORITES = "myfavorites";
  public static readonly LEAGUES = "leagues";
  public static readonly TV_SCHEDULES = "tvschedules";
  public static readonly TV = "tv";
  public static readonly SETTINGS = "settings";
  public static readonly NEWS = "news";
  public static readonly MOBILE = "mobile";
  public static readonly FAVORITES = "favorites";
}

export class HttpStatusCode {
  public static readonly FOUND = 302;
  public static readonly UNAUTHORIZED = 401;
  public static readonly NOTFOUND = 404;
  public static readonly INTERNAL_SERVER_ERROR = 500;
}

export class DateTimeFormat {
  public static readonly DAY_MONTH_ONLY = "dd MMM";
  public static readonly WEEKDAY = "iii";
  public static readonly DATE_ONLY = "dd MMM yyyy";
  public static readonly TIME_AND_ZONE = "HH:mm OOO";
  public static readonly TIME = "HH:mm";
  public static readonly LONG_DATE = "iiii dd/MM/yyyy";
  public static readonly UTC_ISO = "yyyy-MM-dd'T'HH:mm:ss'Z'";
  public static readonly DATE_TIME = "dd/MM/yyyy HH:mm";
}

export class DisplayMode {
  public static readonly SHOW_ALL = 0;
  public static readonly HIDE = 1;
  public static readonly SHOW_ONLY = 2;
}

export class ViewMode {
  public static readonly DESKTOP = "desktop";
  public static readonly MOBILE = "mobile";
}

export class CookieName {
  public static readonly VIEW_MODE = "viewmode";
}

export class MobileAppUrl {
  public static readonly APP_STORE = "https://apps.apple.com/us/app/score247/id1490241313?ls=1";
}
