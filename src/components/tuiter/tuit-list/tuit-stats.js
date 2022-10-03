import React from "react";
import {useDispatch} from "react-redux";
import {updateTuit} from "../actions/tuits-actions";

//Credit to a7 repository assigment listed as a resource for basing tuit-list component
const TuitStats = ({tuit}) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    updateTuit(dispatch, {...tuit, likes: tuit.likes + 1});
  };
  const dislikeTuit = () => {
    updateTuit(dispatch, {...tuit, dislikes: tuit.dislikes + 1});
  }
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
          <span>
            <i onClick={dislikeTuit} className="far fa-thumbs-down ms-2"></i>
            {tuit.dislikes}
          </span>
      </div>
      <div className="col">
          <span>
            <i onClick={likeTuit} className="far fa-thumbs-up ms-2"></i>
            {tuit.likes}
          </span>
      </div>
      <div className="col">
        <i className="fas fa-share"></i>
      </div>
    </div>
  );
}

export default TuitStats;
