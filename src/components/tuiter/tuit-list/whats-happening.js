import React, {useState} from "react";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
  let [whatsHappening, setWhatsHappening]
    = useState('');
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    dispatch({type: 'create-tuit',
               tuit: whatsHappening
    });
    //Clear the What's Happening field after we package up and dispatch off the data so that it is ready to be typed in again.
    setWhatsHappening('');
  }
  return (
    <div className = "p-2 d-flex">
      <div className="pe-2">
          {/*Have to hard code in user image for now since we do not have user accounts that allow us to compute this dynamically, to fix later*/}
          <img src={require('../data/images/avatarIcons/ReactJS.png')}
               className="ttr-tuit-avatar-logo rounded-circle" alt = "Poster's Avatar"/>
      </div>

      <div className="w-100">
        <div className="md-form ttr-textArea form-floating">
          <textarea className="md-textarea form-control" id='whta' value={whatsHappening} placeholder="What's Happening?"
                    onChange={(event) =>
                      setWhatsHappening(event.target.value)}>
          </textarea>
          <label htmlFor="whta">What's Happening?</label>
          <hr/>
        </div>
        <div className="row d-flex">
          <div>
            <i className="col far fa-image me-3" style={{color: 'dodgerblue'}}></i>
            <i className="col fas fa-chart-line me-3" style={{color: 'dodgerblue'}}></i>
            <i className="col far fa-smile me-3" style={{color: 'dodgerblue'}}></i>
            <i className="col far fa-calendar me-3" style={{color: 'dodgerblue'}}></i>
            <button className="btn btn-primary btn-block rounded-pill float-end" onClick={tuitClickHandler}>
              Tweet
            </button>
          </div>
        </div>
       </div>
    </div>
  );
}
export default WhatsHappening;
