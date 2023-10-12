import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Layout from "./pages/Layout";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <ProductList /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

export default router;
