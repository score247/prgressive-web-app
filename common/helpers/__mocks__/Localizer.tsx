import React from "react";

export const withTranslation = function() {
  return function(Component: React.ComponentType) {
    return function(props: any) {
      return <Component {...props} />;
    };
  };
};
