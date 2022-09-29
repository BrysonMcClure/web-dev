import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return( 
         <ul className = "list-group">
            <li className="list-group-item" key="title">
                    Who to Follow</li>
            {
              who.map(whoItem => {
                return(
                  <WhoToFollowListItem who={whoItem} key={whoItem.handle}/>);
              })
            }
         </ul>
  );
}

export default WhoToFollowList;
