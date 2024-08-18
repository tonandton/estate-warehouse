import Layout from "./routers/layout/layout.jsx";
import HomePage from "./routers/homePage/homePage.jsx";
import ListPage from "./routers/listPage/listPage.jsx";
import SinglePage from "./routers/singlePage/SinglePage.jsx";
import ProfilePage from "./routers/profilePage/profilePage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./layout.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
