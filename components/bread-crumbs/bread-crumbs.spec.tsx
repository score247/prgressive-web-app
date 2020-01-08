import React from "react";
import { shallow, mount } from "enzyme";
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
      t: (key: string): string => key,
      i18n: instance,
      tReady: true,
      breadcrumbs: ["soccer", "today"]
    };
  });

  it("render correctly", () => {
    const wrapper = shallow(<Breadcrumbs {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render breadcrumbs", () => {
    const wrapper = shallow(<Breadcrumbs {...props} />);
    expect(wrapper.dive().find(".selected-sport").length).toBeGreaterThanOrEqual(1);
  });

  it("should call clearInterval when unmount", () => {
    global.clearInterval = jest.fn();
    const wrapper = mount(<Breadcrumbs {...props} />);
    wrapper.unmount();
    expect(global.clearInterval).toBeCalled();
  });
});
