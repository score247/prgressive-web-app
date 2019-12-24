import React from "react";
import { shallow, render } from "enzyme";
import { Props } from "./type";
import Breadcrumbs from "./index";

jest.mock("../../common/helpers/Localizer", () =>
  jest.requireActual("../../common/helpers/__mocks__/Localizer")
);

describe("DateBar", () => {
  let props: Props;

  beforeEach(() => {
    const instance: any = {
      language: "en",
      languages: ["en", "fr"],
      isInitialized: true
    };

    props = {
      onlyLiveMatch: false,
      selectedDate: new Date(),
      t: (key: string): string => key,
      i18n: instance,
      tReady: true,
      breadcrumbs: ["soccer"]
    };
  });

  it("render correctly", () => {
    const wrapper = shallow(<Breadcrumbs {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render breadcrumbs", () => {
    const wrapper = shallow(<Breadcrumbs {...props} />);
    expect(wrapper.dive().find(".selected-sport")).toHaveLength(1);
  });
});
