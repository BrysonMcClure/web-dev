import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js";

const PostSummaryList = () => {
  return(`
    <div>
        ${post.map(postItem => {
            return(PostSummaryItem(postItem));
          }).join('')
        }
    </div>
  `);
}

export default PostSummaryList;
