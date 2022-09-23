import React from "react";
import PostSummaryList from "../PostSummaryList";
import './index.css';

const ExploreComponent = () => {
  return(
    <div>
      {/*<!-- Search Bar, search field and cog -->*/}
            <div className="row">
                  <div className="col-11">
                      <div className ="input-group mb-3">
                        
                        <span className="input-group-prepend">
                            <button className="btn rounded-pill-left bg-white pr-n5" type="button">
                                <i className="fas fa-search" style={{"color": "#5c636a"}}></i>
                            </button>
                        </span>
                        <input className = "form-control rounded-pill-right ml-n5 " id="search-bar" type="text" placeholder="Search Twitter"/>
                      </div>
                          
                  </div>
                  <div className="col-1">
                      <a href="#"><i className ="fas fa-cog fa-2x"></i></a>
                  </div>    
                       
           </div>
      {/*<!-- Navigation Tabs -->*/}
           <ul className="nav mb-2 nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sports</a>
                </li>
      {/*<!-- This needs to disappear in the smallest configuration -->*/}
                <li className="nav-item">
                    <a className="nav-link d-sm-none d-md-block" href="#">Entertainment</a>
                </li>         
           </ul>
      {/*<!-- image with overlaid text -->*/}

      {/*<!-- Main Image-->*/}
            <div className="wordImageContainer img-fluid mb-2">
              <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="Starship" className="img-fluid"/>
              <h4 className="bottom-left">Space X's Starship</h4>
            </div>
           
           {/*<!--Tweets-->*/}
           <PostSummaryList/>
    </div>
      );
}
export default ExploreComponent;
