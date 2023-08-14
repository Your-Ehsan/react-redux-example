import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import CreatePost from "./pages/CreatePost";

const App = () => {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route element={<CreatePost />} path="createpost" />
          </Route>,
        ),
      )}
    />
  );
};

export default App;
