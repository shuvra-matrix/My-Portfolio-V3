import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root.jsx";
import Error from "./components/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
