import "./style.scss";

import React, { PureComponent } from "react";
import { State } from "./type";

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

class DatePickerWrapper extends PureComponent<ReactDatePickerProps, State> {
  minWidth = 1025;

  constructor(props: ReactDatePickerProps) {
    super(props);

    this.state = {
      withPortal: false
    };

    this.handleSizeChange = this.handleSizeChange.bind(this);
  }

  componentDidMount() {
    this.handleSizeChange();
    window.addEventListener("resize", this.handleSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleSizeChange);
  }

  handleSizeChange() {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    const withPortal = width < this.minWidth;
    
    if (this.state.withPortal !== withPortal) {
      this.setState({ withPortal });
    }
  }

  render() {
    const { className, ...rest } = this.props;

    return (
      <div className={`datepicker-wrapper ${className}`}>
        <DatePicker {...rest} withPortal={this.state.withPortal} />
      </div>
    );
  }
}

export default DatePickerWrapper;
