const NavigationSidebar = () => {
  return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-home" ></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Home
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-hashtag" ></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Explore
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Notifications
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Messages
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-bookmark"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Bookmarks
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-list"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Lists
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <i class="fas fa-user"></i>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -10px;">
                            Profile
                        </div>
                    </div>
                </a>
                <a href="#" class="list-group-item list-group-item-action">
                    <div class = "row">
                        <div class = "col-2">
                            <span class="fa-stack fa-xs" style="margin-left: -5px;">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <div class = "col-10 d-none d-xl-block" style="margin-left: -5px;">
                            More
                        </div>
                    </div>
                </a>
            <!-- continue the rest of the list -->
            </div>
            <!--Tweet Button at Bottom-->
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
