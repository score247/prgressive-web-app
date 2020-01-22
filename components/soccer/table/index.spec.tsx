import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Props } from "./index";
import SoccerTable from "./index";

jest.mock("../../../app-settings",  () => jest.requireActual("../../../app-settings/__mocks__/"));

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
