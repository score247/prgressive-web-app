import React from "react";
import { WithTranslation } from "next-i18next";

export const withTranslation = function() {
  return function(Component: React.ComponentType<WithTranslation>) {
    return function(props: WithTranslation) {
      return <Component {...props} />;
    };
  };
};
