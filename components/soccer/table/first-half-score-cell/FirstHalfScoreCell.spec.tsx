import React from "react";
import { render } from "enzyme";
import { Props } from "./type";
import FirstHalfScoreCell from "./index";
import { PeriodType } from "../../../../common/enums/period-type";
import { DeviceContext } from "../../../../contexts/device-context";

describe("FirstHalfScoreCell", () => {
  let props: Props;
  beforeEach(() => {
    props = {
      firstHalfPeriod: {
        AwayScore: 0,
        HomeScore: 1,
        Number: 1,
        PeriodType: {
          DisplayName: "regular",
          Value: PeriodType.Regular
        }
      }
    };
  });

  it("should render first half cell on desktop", () => {
    const wrapper = render(
      <DeviceContext.Provider value={{ isMobile: false }}>
        <FirstHalfScoreCell {...props} />
      </DeviceContext.Provider>
    );
    expect(wrapper.hasClass("text-1H")).toBe(true);
  });

  it("should not render first half cell on mobile", () => {
    const wrapper = render(
      <DeviceContext.Provider value={{ isMobile: true }}>
        <FirstHalfScoreCell {...props} />
      </DeviceContext.Provider>
    );
    expect(wrapper.html()).toBeNull();
  });
});
