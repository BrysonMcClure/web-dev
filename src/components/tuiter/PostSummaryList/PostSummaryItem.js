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
  const timeLabel = <small className="text-muted" key={`${post.title}0`}>- {post.time}</small>;
  const hasATopic = (post.topic !== '');
  //let topicText = '';
  /*if(post.topic !== '') {
    topicText = `<p class="card-text"> {post.topic} </p>`;
  }*/
  return(
    <div className="card" style= {{"width" : "100%"}} key={post.title}>
         <div className="row no-gutters" key={`${post.title}1`}>
             <div className="col-9" key={`${post.title}2`}>
                 <div className="card-body" key={`${post.title}3`}>
                     {hasATopic && <p className="card-text" key={`${post.title}4`}> {post.topic} </p>}
                     <h5 className="card-title" key={`${post.title}5`}>{post.userName} <span className="fas fa-check-circle" key={`${post.title}6`}></span> {timeLabel} </h5>
                     <h5 className="card-title" key={`${post.title}7`}>{post.title}</h5>
                 </div>
             </div>
             <div className="col-3" key={`${post.title}8`}>
                        <img src={post.image} className="card-img" alt="PostLogo" key={`${post.title}9`}/>
             </div>
         </div>
    </div>
  );
}

export default PostSummaryItem;
