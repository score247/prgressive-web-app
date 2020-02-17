import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Props } from "./index";
import SoccerTable from "./index";

jest.mock("next/config", () => () => ({
    publicRuntimeConfig: {}
}));

describe("<SoccerTable />", () => {
    let props: Props;
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        props = {
            matches: [],
            selectedDate: new Date()
        };
        wrapper = shallow(<SoccerTable {...props} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
