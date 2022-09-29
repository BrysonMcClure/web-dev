import React from "react";

const NavigationSidebar = ({active = '/explore'}) => {
  return(
    <>
            <div className="list-group">
                <a className="list-group-item" href="/" key="tuiter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="/tuiter" className={`list-group-item list-group-item-action ${active === '/' ? 'active' : ''}`} key="home">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-home" ></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Home
                        </div>
                    </div>
                </a>
                <a href="/tuiter/explore" className={`list-group-item list-group-item-action ${active === '/explore' ? 'active' : ''}`} aria-current="true" key="explore">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-hashtag" ></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="/" className={`list-group-item list-group-item-action ${active === '/notifications' ? 'active' : ''}`} key="notifications">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-bell"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block" >
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="/" className={`list-group-item list-group-item-action ${active === '/messages' ? 'active' : ''}`} key="messages">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="/" className={`list-group-item list-group-item-action ${active === '/bookmarks' ? 'active' : ''}`} key="bookmarks">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-bookmark"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="/" className={`list-group-item list-group-item-action ${active === '/lists' ? 'active' : ''}`} key="lists">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-list"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Lists
                        </div>
                    </div>
                </a>
                <a href="/" className={`list-group-item list-group-item-action ${active === '/profile' ? 'active' : ''}`} key="profile">
                    <div className = "row">
                        <div className = "col-2">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className = "col-10 d-none d-xl-block">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="/" className={`list-group-item list-group-item-action ${active === '/more' ? 'active' : ''}`} key="more">
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
            <div className="d-grid mt-2" key="tweet">
                <a href="/"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
  </>
    );
}
export default NavigationSidebar;
