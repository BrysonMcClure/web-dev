import React from "react";
import {Link} from "react-router-dom";
//import NavigationSidebar from "./NavigationSidebar";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
//import WhoToFollowList from "./WhoToFollowList";
//import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
//import PostSummaryList from "./PostSummaryList";
//import ExploreComponent from "./ExploreScreen/ExploreComponent";
import ExploreScreen from "./ExploreScreen";

const Tuiter = () => {
  return(
    <>
      {/*
      <NavigationSidebar active="home"/>
      {/*<WhoToFollowListItem who={{
        avatarIcon: 'https://cdn.worldvectorlogo.com/logos/virgin-1.svg',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic',
      }}/>}
      <WhoToFollowList/>
      {/*<PostSummaryItem post={{
        "topic": "Web Development",
        "userName": "",
        "title": "jQuery",
        "time": "last week",
        "image": "https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png",
        "tweets": "122K"
      }}/>}
      <PostSummaryList/>
      <ExploreComponent/>*/}
      <ExploreScreen/>
      <h1>Tuiter!</h1>
      <Link to="/hello">
        Hello
      </Link>
      <Link to="/">
        Labs
      </Link>
    </>
  )
};

export default Tuiter;
