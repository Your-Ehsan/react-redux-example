import { useDispatch, useSelector } from "react-redux";
import Posts from "../components/Posts";
import { useEffect, useState } from "react";
import { getPosts } from "../features/postSlice";

const Home = () => {
  const dispatch = useDispatch(),
    posts = useSelector((state) => state.posts),
    [IsMounted, setIsMounted] = useState(false),
    { postsList, status, error } = posts;
  // sortedPosts = postsList.splice().sort((a, b) => b.id - a.id);
  
  useEffect(() => {
    setIsMounted(true);
    if (status === "idle" && IsMounted) {
      dispatch(getPosts());
    }
    return () => {
      setIsMounted(false);
    };
  }, [status, dispatch, IsMounted]);

  console.log(postsList);

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {status === "loading" ? (
            <h1>loading ...</h1>
          ) : status === "succesfull" ? (
            postsList.map((post) => <Posts key={post.id} posts={post} />)
          ) : (
            <div>{error}</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Home;
