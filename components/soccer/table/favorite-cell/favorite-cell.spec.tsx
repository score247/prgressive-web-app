import React from "react";
import { shallow } from "enzyme";
import FavoriteCell from "./index";

describe("FavoriteCell", () => {
    it("should render correctly", () => {
        const props = {
            rowSpan: 1
        };

        const wrapper = shallow(<FavoriteCell {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
