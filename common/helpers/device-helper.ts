import { NextPageContext } from "next";

export default class DeviceHelper {
  private readonly mobilePattern = /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

  private readonly ctx: NextPageContext;

  constructor(ctx: NextPageContext) {
    this.ctx = ctx;
  }

  isMobile() {
    const userAgent =
      this.ctx.req?.headers["user-agent"] ?? navigator.userAgent;

    return this.mobilePattern.test(userAgent);
  }
}
