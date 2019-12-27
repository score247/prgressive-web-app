import * as React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

jest.mock("react-i18next", () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => (Component: React.FunctionComponent) => {
    Component.defaultProps = { ...Component.defaultProps, t: () => "" };
    return Component;
  }
}));

describe("<Footer/>", () => {
  it("Should render correctly", () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
  });
});
