import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type == "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id:Date.now(),
        title:postTitle,
        body:postBody,
        reaction:reactions,
        tags:tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going to Mumbai",
    body: "Hi, Friends, I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace out.",
    reaction: 2,
    userId: "user-9",
    tags: ["Vacation", "Mumbai", "Enjoy"],
  },
  {
    id: 2,
    title: "Paas hogaya bhai",
    body: "4 Saal ki masti k baad bhi ho gaye hain pass. HArd to belive.",
    reaction: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbeliavable"],
  },
];

export default PostListProvider;
