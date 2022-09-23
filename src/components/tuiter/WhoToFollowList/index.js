import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who"

const WhoToFollowList = () => {
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
