import React from "react";
import { shallow, render } from "enzyme";
import { State, Props } from "./type";
import DateBar from "./index";

jest.mock("../../common/helpers/Localizer", () => jest.requireActual("../../common/helpers/__mocks__/Localizer"));

describe("DateBar", () => {
  let props: Props;

  beforeEach(() => {
    const instance: any = {
      language: "en",
      languages: ["en", "fr"],
      isInitialized: true
    };

    props = {
      onDateChange: jest.fn(),
      onLiveMatchChange: jest.fn(),
      onlyLiveMatch: false,
      selectedDate: new Date(),
      t: (key: string): string => key,
      i18n: instance,
      tReady: true
    };
  });

  it("render correctly", () => {
    const wrapper = shallow(<DateBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should call onLiveMatchChange when clicking on live match button", () => {
    const wrapper = shallow(<DateBar {...props} />);
    wrapper
      .dive()
      .find(".live-match")
      .at(0)
      .simulate("click");
    expect(props.onLiveMatchChange).toBeCalled();
  });

  it("should call onDateChange when clicking on date button", () => {
    const wrapper = shallow(<DateBar {...props} />);
    wrapper
      .dive()
      .find("div.date-item")
      .at(0)
      .simulate("click");
    expect(props.onDateChange).toBeCalled();
  });
});
