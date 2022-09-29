import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
  return(`

            <!-- Search Bar, search field and cog -->
            <div class="row">
                  <div class="col-11">
                      <div class ="input-group mb-3">
                        
                        <span class="input-group-prepend">
                            <button class="btn rounded-pill-left bg-white pr-n5" type="button">
                                <i class="fas fa-search" style="color: #5c636a"></i>
                            </button>
                        </span>
                        <input class = "form-control rounded-pill-right ml-n5 " id="search-bar" type="text" placeholder="Search Twitter"/>
                      </div>
                          
                  </div>
                  <div class="col-1">
                      <a href="explore-settings.html"><i class ="fas fa-cog fa-2x"></i></a>
                  </div>    
                       
           </div>
           <!-- Navigation Tabs -->
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <!-- This needs to disapper in the smallest configuration -->
                <li class="nav-item">
                    <a class="nav-link d-sm-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>         
           </ul>
           <!-- image with overlaid text -->
           
           <!-- Main Image-->
            <div class="wordImageContainer img-fluid mb-2">
              <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" alt="Starship" class="img-fluid"">
              <h4 class="bottom-left">Space X's Starship</h4>
            </div>
           
           <!--Tweets-->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
