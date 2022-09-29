const PostSummaryItem = (post) => {
  const timeLabel = `<small class="text-muted">- ${post.time}</small>`;
  let topicText = '';
  if(post.topic !== '') {
    topicText = `<p class="card-text"> ${post.topic} </p>`;
  }
  return(`
    <div class="card" style=" width: 100%;">
         <div class="row no-gutters">
             <div class="col-9">
                 <div class="card-body"> 
                     ${topicText}
                     <h5 class="card-title">${post.userName}<span class="fas fa-check-circle"></span> ${timeLabel} </h5>
                     <h5 class="card-title">${post.title}</h5> 
                 </div>
             </div>
             <div class="col-3">
                        <img src=${post.image} class="card-img" alt="...">
             </div>
         </div>
    </div>
  `);
}

export default PostSummaryItem;
