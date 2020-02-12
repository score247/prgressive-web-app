import "./style.scss";
import React, { PureComponent } from "react";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
  setDefaultLocale
} from "react-datepicker";
import { vi, enUS, th, zhCN, zhTW, id } from "date-fns/locale";
import { i18n } from "../../common/helpers/Localizer";

vi.options = { weekStartsOn: 1 };
enUS.options = { weekStartsOn: 1 };

registerLocale("vi", vi);
registerLocale("en", enUS);
registerLocale("th", th);
registerLocale("zhCN", zhCN);
registerLocale("zhTW", zhTW);
registerLocale("id", id);
setDefaultLocale("en");

class DatePickerWrapper extends PureComponent<ReactDatePickerProps> {
  render() {
    const { className, ...rest } = this.props;

    return (
      <div className={`datepicker-wrapper ${className}`}>
        <DatePicker locale={i18n.language} {...rest} />
      </div>
    );
  }
}

export default DatePickerWrapper;
