import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../features/postSlice";

const CreatePost = () => {
  // Set the initial state for the form
  const [title, setTitle] = useState(""),
    [body, setBody] = useState(""),
    [addPostRequestStatus, setAddPostRequestStatus] = useState("idle"),
    // Get the dispatch function
    dispatch = useDispatch(),
    // Get the navigate function [replace the history.push() method]
    navigate = useNavigate(),
    // Handle form field value changes
    onTitleChange = (e) => setTitle(e.target.value),
    onBodyChange = (e) => setBody(e.target.value),
    /* 
   Get the Boolean value based on whether the form is empty or not && the post request status.
   We use the Boolean value returned to toggle the disbale status submit button
 */
    canSavePost =
      [title, body].every(Boolean) && addPostRequestStatus === "idle",
    // Handle form submission
    handleAddPost = async (e) => {
      e.preventDefault();
      const post = { title, body };
      if (canSavePost) {
        try {
          setAddPostRequestStatus("pending");
          await dispatch(addPost(post)).unwrap();
          setTitle("");
          setBody("");

          navigate("/");
        } catch (err) {
          console.error("Unable to create post:", err);
        } finally {
          setAddPostRequestStatus("idle");
        }
      }
    };

  return (
    <div className="">
      <div className="">
        <form className="flex justify-center" onSubmit={handleAddPost}>
          <div className="container px-5 mx-auto flex">
            <div className="lg:w-1/3 md:w-1/2 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full relative z-10">
              <h2 className=" text-lg mb-1 font-medium title-font">
                Create new Post
              </h2>
              <p className="leading-relaxed mb-5">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <div className="relative mb-4">
                <label htmlFor="title" className="leading-7 text-sm ">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none  py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  onChange={onTitleChange}
                  value={title}
                />
              </div>
              <div className="relative mb-4">
                <label htmlFor="body" className="leading-7 text-sm ">
                  Body
                </label>
                <textarea
                  required
                  id="body"
                  name="body"
                  className="w-full  rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none  py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  onChange={onBodyChange}
                  value={body}
                />
              </div>
              <div className="flex justify-center gap-4">
                <button
                  type="reset"
                  className=" bg-gray-200 border-0 py-2 px-6 focus:outline-none active:bg-gray-300 rounded text-lg text-slate-400"
                  onClick={() => {
                    navigate("/");
                    setTitle("");
                    setBody("");
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg text-white"
                  disabled={!canSavePost}
                >
                  Publish
                </button>
              </div>
              <p className="text-xs  text-opacity-90 mt-3">
                blog helvetica normcore iceland tousled brook viral artisan.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
