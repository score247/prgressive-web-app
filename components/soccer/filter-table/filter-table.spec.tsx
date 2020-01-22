import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import FilterSoccerTable from "./index";

jest.mock("../../../app-settings", () => jest.requireActual("../../../app-settings/__mocks__/"));

describe("<FilterSoccerTable />", () => {
    const props: any = {};
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<FilterSoccerTable {...props} />);
    });

    it("should render correctly", () => {
        expect(wrapper).toMatchSnapshot();
    });
});
