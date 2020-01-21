import React from "react";
import { shallow } from "enzyme";
import { Props } from "./type";
import Advertisement from "./index";


describe("Advertisement", () => {


  it("render correctly", () => {
      const props: Props ={
          href:"href",
          imageSrc:"imageSrc"
      }
    const wrapper = shallow(<Advertisement {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("a").prop("href")).toEqual(props.href);
    expect(wrapper.find("img").prop("src")).toEqual(props.imageSrc);
  });
});
