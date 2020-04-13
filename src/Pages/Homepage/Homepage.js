import React from "react";

import { HomePageContainer } from "./HomePageContainer.styles";

import Directory from "../../Components/directory/directory";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
