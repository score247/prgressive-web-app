import React from "react";
import { shallow } from "enzyme";
import DateBar from "./index";
import {State, Props} from "./type";
import { WithTranslation } from "next-i18next";
import {  getI18n } from "react-i18next";

jest.mock('react-i18next', () => ({
    withTranslation: () => (Component: React.ComponentType)=> {
      Component.defaultProps  = { ...Component.defaultProps, t: (key: string) => key};
      return Component;
    },
  }));

describe("DateBar", () => {
  it("DateBar-render correctly", () => {
/*     const props: Props & WithTranslation = {
      onDateChange: function(date: Date) {},
      onLiveMatchChange: function (onlyLiveMatch: boolean){},
      onlyLiveMatch: false,
      selectedDate: new Date(),
      t: (key: string): string => key,
      i18n:  getI18n(),
      tReady: true
    }; */

    //const wrapper = shallow(<DateBar {...props} />);

    //expect(wrapper).toMatchSnapshot();
  });
});
