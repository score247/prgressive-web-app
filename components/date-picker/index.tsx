import "./style.scss";
import React, { PureComponent } from "react";
import DatePicker, { ReactDatePickerProps } from "react-datepicker";
import { i18n } from "../../common/helpers/Localizer";
import { registerDatePickerLocale } from "./register-locale";

registerDatePickerLocale();

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
