import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost = () => {

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, postTitle, postBody, reactions, tags);
    userIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label forhtml="userId" className="form-label">
        User Id
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          ref={userIdElement}
          aria-describedby="User Id"
          placeholder="Enter your user id"
        />
      </div>
      <div className="mb-3">
        <label forhtml="title" className="form-label">
        Post Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          ref={postTitleElement}
          aria-describedby="Title"
          placeholder="How are you feeling today..."
        />
      </div>
      <div className="mb-3">
        <label forhtml="body" className="form-label">
        Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          ref={postBodyElement}
          aria-describedby="Title"
          placeholder="Tell us more about it"
          rows={4}
        />
      </div>
      <div className="mb-3">
        <label forhtml="reactions" className="form-label">
        Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          id="reactions"
          ref={reactionsElement}
          aria-describedby="reactions"
          placeholder="How many people reacted on this post."
        />
      </div>
      <div className="mb-3">
        <label forhtml="tags" className="form-label">
        Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          ref={tagsElement}
          aria-describedby="tags"
          placeholder="Please enter tags using space."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
