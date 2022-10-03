import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./tuit-list-item";
//import * as service from '../services/tuits-service';
import './tuits.css';
import {findAllTuits} from "../actions/tuits-actions";

const TuitList = () => {
  //Selector to pull in reducer state
  const tuits = useSelector(state => state.tuits);

  //Server side communication and then output to recuder
  const dispatch = useDispatch();
  //Gets called automagically on file launch/render
  useEffect(() => findAllTuits(dispatch), []);
  //mapping function of tuit list items
  return (
    <ul className="ttr-tuits list-group">
      {
        tuits.map && tuits.map(tuit =>
                                 <TuitListItem key={tuit._id}
                                               tuit={tuit}/>)
      }
    </ul>
  );
}

export default TuitList;
