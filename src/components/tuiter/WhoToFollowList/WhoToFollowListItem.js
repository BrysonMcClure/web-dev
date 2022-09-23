import React from "react";
const WhoToFollowListItem = (
  {
    who={
      avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png',
      userName: 'NASA',
      handle: 'NASA',
    }
  }) => {
  return(
        <li className="list-group-item">
             <div className = "row">
                  <div className = "col-2">
                            <img src={who.avatarIcon} className = "img-fluid rounded-circle" alt="UserAvatarImage"/>
                  </div>
                  <div className = "col-6 vstack gap-0">
                      <span>{who.userName} <i className="fas fa-check-circle"></i></span>
                      <span>@{who.handle}</span>
                  </div>
                  <div className = "col-4">
                      <span className="btn btn-primary rounded-pill float-end">Follow</span>
                  </div>
             </div>
        </li>
    );
}
export default WhoToFollowListItem;
