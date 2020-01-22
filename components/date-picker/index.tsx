import "./style.scss";
import React, { PureComponent } from "react";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale,
  setDefaultLocale
} from "react-datepicker";
import { vi, enUS } from "date-fns/locale";

vi.options = { weekStartsOn: 1 };
enUS.options = { weekStartsOn: 1 };

registerLocale("vi", vi);
registerLocale("en", enUS);
setDefaultLocale("en");

class DatePickerWrapper extends PureComponent<ReactDatePickerProps> {
  render() {
    const { className, ...rest } = this.props;

    return (
      <div className={`datepicker-wrapper ${className}`}>
        <DatePicker {...rest} />
      </div>
    );
  }
}

export default DatePickerWrapper;
