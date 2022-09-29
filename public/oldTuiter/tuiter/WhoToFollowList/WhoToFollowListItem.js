const WhoToFollowListItem = (who) => {
  return(`  
        <li class="list-group-item">
             <div class = "row">
                  <div class = "col-2">
                            <img src=${who.avatarIcon} class = "img-fluid rounded-circle"/>
                  </div>
                  <div class = "col-6 vstack gap-0">
                      <span>${who.userName}<i class="fas fa-check-circle"></i></span>
                      <span>${who.handle}</span>
                  </div>
                  <div class = "col-4">
                      <span class="btn btn-primary rounded-pill float-end">Follow</span>
                  </div>
             </div>
        </li>    
    `);
}
export default WhoToFollowListItem;
