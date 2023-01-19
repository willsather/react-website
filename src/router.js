import { createBrowserRouter } from "react-router-dom";
import { ExperiencePage } from "./pages/experience";
import { HomePage } from "./pages/home";
import { AboutPage } from "./pages/about";

// export const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<HomePage />}>
//         <Route path="/experience" element={<ExperiencePage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="*" element={<WildcardPage>} />
//       </Route>
//     )
//   );

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "/*",
    element: <HomePage />,
  }
]);