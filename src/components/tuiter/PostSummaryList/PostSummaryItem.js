const PostSummaryItem = (
  {
    post = {
      "topic": "Web Development",
      "userName": "ReactJS",
      "time": "2h",
      "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02jcTAy6AjS6poKeVmEjp-q5A1-VowyNWIQ&usqp=CAU"
    }
  }) => {
  const timeLabel = <small className="text-muted">- {post.time}</small>;
  const hasATopic = (post.topic !== '');
  //let topicText = '';
  /*if(post.topic !== '') {
    topicText = `<p class="card-text"> {post.topic} </p>`;
  }*/
  return(
    <div className="card" style= {{"width" : "100%"}}>
         <div className="row no-gutters">
             <div className="col-9">
                 <div className="card-body"> 
                     {hasATopic && <p className="card-text"> {post.topic} </p>}
                     <h5 className="card-title">{post.userName} <span className="fas fa-check-circle"></span> {timeLabel} </h5>
                     <h5 className="card-title">{post.title}</h5>
                 </div>
             </div>
             <div className="col-3">
                        <img src={post.image} className="card-img" alt="PostLogo"/>
             </div>
         </div>
    </div>
  );
}

export default PostSummaryItem;
