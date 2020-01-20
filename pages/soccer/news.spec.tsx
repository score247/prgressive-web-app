import React from "react";
import { shallow } from "enzyme";
import NewsPage from "./news";

describe("NewsPage", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<NewsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
