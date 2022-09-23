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
        <li className="list-group-item" key={who.handle}>
             <div className = "row" key= {`${who.handle}1`}>
                  <div className = "col-2" key= {`${who.handle}2`}>
                            <img src={who.avatarIcon} className = "img-fluid rounded-circle" alt="UserAvatarImage" key={`${who.handle}3`}/>
                  </div>
                  <div className = "col-6 vstack gap-0" key={`${who.handle}4`}>
                      <span key={`${who.handle}5`}>{who.userName} <i className="fas fa-check-circle"></i></span>
                      <span key={`${who.handle}6`}>@{who.handle}</span>
                  </div>
                  <div className = "col-4" key={`${who.handle}7`}>
                      <span className="btn btn-primary rounded-pill float-end" key={`${who.handle}8`}>Follow</span>
                  </div>
             </div>
        </li>
    );
}
export default WhoToFollowListItem;
