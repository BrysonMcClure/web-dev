import React from "react";
import {useDispatch} from "react-redux";

//Credit to a7 repository assigment listed as a resource for basing tuit-list component
const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
  };
  return (
    <div className="row mt-2">
      <div className="col">
        <i className="fas fa-comment me-1"></i>
        {tuit.stats && tuit.stats.comments}
      </div>
      <div className="col">
        <i className="fas fa-retweet me-1"></i>
        {tuit.stats && tuit.stats.retuits}
      </div>
      <div className="col">
          <span onClick={likeTuit}>
              {
                tuit.liked &&
                <i className="fas fa-heart me-1"
                   style={{color: 'red'}}></i>
              }
              {
                !tuit.liked &&
                <i className="fas fa-heart me-1"></i>
              }
            {tuit.stats && tuit.stats.likes}
          </span>
      </div>
      <div className="col">
        <i className="fas fa-share"></i>
      </div>
    </div>
  );
}

export default TuitStats;
