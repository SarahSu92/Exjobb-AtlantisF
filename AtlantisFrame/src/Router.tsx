import { createBrowserRouter } from "react-router";
import { ErrorPage } from "./pages/ErrorPage";
import { HomePage } from "./pages/HomePage";
import { DestinationPage } from "./pages/DestinationPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { Layout } from "./layout/Layout";


export const Router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/Destinations',
          element: <DestinationPage />,
        },
        {
          path: '/About',
          element: <AboutPage />,
        },
          {
          path: '/Contact',
          element: <ContactPage />,
        },
      ],
    },
  ],
  {
    basename: '/AtlantisFrame', // Important for gh-pages!
  }
);
