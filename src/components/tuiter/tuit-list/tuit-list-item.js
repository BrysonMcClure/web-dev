import React from "react";
import TuitStats from "./tuit-stats";
import TuitImage from "./tuit-image";
import {useDispatch} from "react-redux";

//Credit to A7 repository assignment referenced as a resource for bassing styling, some elements customized and changed.
const TuitListItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuit = (tuit) => {
    dispatch({type: 'delete-tuit', tuit})
  };
  return(
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          tuit.postedBy &&
          <img src={require(`../data/images/avatarIcons/${tuit.postedBy.username}.png`)}
               className="ttr-tuit-avatar-logo rounded-circle" alt="Avatar Icon"/>
        }
      </div>
      <div className="w-100">
        <i onClick={() => deleteTuit(tuit)} className="fas fa-times fa-pull-right"></i>
        <h2
          className="fs-5">
          {tuit.postedBy && tuit.postedBy.username}
          @{tuit.postedBy && tuit.postedBy.username} -
        </h2>
        {/*Actual content/ message of tuit*/}
        {tuit.tuit}
        {
          (tuit.attachments && tuit.attachments.image) && <TuitImage tuit={tuit}/>
        }
        <TuitStats tuit={tuit}/>
      </div>
    </li>
  );
}

export default TuitListItem;
