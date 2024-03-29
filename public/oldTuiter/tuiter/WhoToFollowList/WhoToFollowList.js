import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return(` 
         <ul class = "list-group">
            <li class="list-group-item">
                    Who to Follow</li>
            ${who.map(whoItem => {
              return(WhoToFollowListItem(whoItem));
            }).join('')
            }
         </ul>
  `);
}

export default WhoToFollowList;
