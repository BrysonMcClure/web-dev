import React from "react";
import ExploreComponent from "./ExploreComponent";
//I simplified this in A7 since tuiter/index.js now displays the sidebars by default, and so explore screen appearing as an outlet just creates extra stuff that appears overcorwded
//Spacing of page is the same so now we can just simply return the explore component from here and acheive the same affect/ effect
const ExploreScreen = () => {
  return(
    <ExploreComponent/>
  );

};
export default ExploreScreen;

