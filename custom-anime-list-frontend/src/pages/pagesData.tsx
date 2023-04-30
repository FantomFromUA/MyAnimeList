import { useParams } from "react-router-dom";
import { routerType } from "../types/router.types";
import About from "./About/About";
import Home from "./Home/Home";

const pagesData: routerType[] = [
  {
    path: "",
    element: <Home />,
    title: "home"
  },
  {
    path: "about",
    element: <About />,
    title: "about"
  },
  {
    path: "animes/:id",
    element: <h1>hello</h1>,
    title: "anime"
  }
];

export default pagesData;