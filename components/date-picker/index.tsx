import "react-datepicker/src/stylesheets/datepicker.scss";
import "./style.scss";

import React, {PureComponent} from "react";
import DatePicker, {
  ReactDatePickerProps,
  registerLocale
} from "react-datepicker";
import vi from "date-fns/locale/vi";

registerLocale("vi", vi);

export default class DatePickerWrapper extends PureComponent<ReactDatePickerProps> {
    render(){
        return <DatePicker {...this.props} />;
    }
}
