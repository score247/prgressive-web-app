import "react-datepicker/src/stylesheets/datepicker.scss";
import "./style.scss";

import React from 'react';
import DatePicker, { ReactDatePickerProps } from "react-datepicker";

export default React.memo(function(props: ReactDatePickerProps) {
    return <DatePicker {...props} />;
});
