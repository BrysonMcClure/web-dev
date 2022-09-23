import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who"

const WhoToFollowList = () => {
  return( 
         <ul className = "list-group">
            <li className="list-group-item">
                    Who to Follow</li>
            {
              who.map(whoItem => {
                return(
                  <WhoToFollowListItem who={whoItem}/>);
              })
            }
         </ul>
  );
}

export default WhoToFollowList;
