import React from "react";

const NavigationSidebar = ({active = 'explore'}) => {
  return(
    <>
            <div className="list-group">
                <a className="list-group-item" href="/">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-home" ></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Home
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`} aria-current="true">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-hashtag" ></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block" >
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-bookmark"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-list"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Lists
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="#" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <div className = "row">
                        <div className = "col-2">
                            <span className="fa-stack fa-xs">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            More
                        </div>
                    </div>
                </a>
            </div>
            {/*Tweet Button at Bottom*/}
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
  </>
    );
}
export default NavigationSidebar;
