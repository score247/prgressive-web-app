import React from "react";
import { shallow, render } from "enzyme";
import MobileSearchBar from ".";
import { SearchBarProps } from '../type';
import { DeviceContext } from "../../../../contexts/device-context";

type Props = {
    onCancel: () => void;
} & SearchBarProps;

describe("MobileSearchBar", () => {
    let props: Props;

    beforeEach(() => {
        props = {
            filterText: "abc",
            onFilterTextChange: jest.fn(),
            onReset: jest.fn(),
            placeHolder: "Search",
            onCancel: jest.fn()
        };
    });

    it("should render correctly", () => {
        const wrapper = shallow(<MobileSearchBar {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it("should trigger onCancel when click cancel", () => {
        const wrapper = shallow(<MobileSearchBar {...props} />);
        wrapper.dive().find(".btn-cancel").simulate("click");
        expect(props.onCancel).toBeCalledTimes(1);
    });
});
