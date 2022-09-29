import React from "react";
import {Link} from "react-router-dom";
//import NavigationSidebar from "./NavigationSidebar";
//import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem";
//import WhoToFollowList from "./WhoToFollowList";
//import PostSummaryItem from "./PostSummaryList/PostSummaryItem";
//import PostSummaryList from "./PostSummaryList";
//import ExploreComponent from "./ExploreScreen/ExploreComponent";
//import ExploreScreen from "./ExploreScreen";
import {Outlet, useLocation} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList"
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
const reducer = combineReducers({tuits: tuitsReducer, who: whoReducer});
const store = createStore(reducer);
//import "./tuiter.css";

const Tuiter = () => {
  const location = useLocation();
  {/*Calculates the last part of the active path, which should be the name of the active page to be used by NavigationSidebar for dynamic highlighting.*/}
  const activePage = () => {
    const pathName = location.pathname;
    return pathName.substring(pathName.lastIndexOf("/"), location.pathname.length);
  }
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-lg-1 col-xl-2">
          <NavigationSidebar active={activePage()}/>
        </div>
        <div className="col-10 col-lg-7 col-xl-6">
          <Outlet/>
        </div>
        <div className="d-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>

      <h1>Tuiter!</h1>
      <Link to="/hello">
        Hello
      </Link>
      <Link to="/">
        Labs
      </Link>
    </Provider>
  );
};
export default Tuiter;
