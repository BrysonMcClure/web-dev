import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.json";

const PostSummaryList = () => {
  return(
    <div>
        {
          post.map(postItem => {
            return(<PostSummaryItem post={postItem}/>);
          })
        }
    </div>
  );
}

export default PostSummaryList;
