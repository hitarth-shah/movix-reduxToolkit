import React from "react";

import "./style.scss";

import ContentWrapper from "../../commonComponents/contentWraper/ContentWraper";

const PageNotFound = () => {
  return (
    <div className="pageNotFound">
      <ContentWrapper>
        <span className="bigText">404</span>
        <span className="smallText">Page not found!</span>
      </ContentWrapper>
    </div>
  );
};

export default PageNotFound;
