import React from "react";
const TuitImage = ({tuit}) => {
  return(
    <div className="position-relative">
      {console.log(tuit.attachments.image)}
      <img src={require(`../data/images/${tuit.attachments.image}`)}
           className="mt-2 w-100 ttr-rounded-15px" alt="Attached"/>
      {
        tuit.imageOverlay &&
        <span
          className={`fa-2x text-white fw-bold bottom-0
                      ttr-tuit-image-overlay position-absolute`}>
          {tuit.imageOverlay}
        </span>
      }
    </div>
  );
};
export default TuitImage;
