import { createBrowserRouter } from "react-router";
import Layout from "../components/Layout";
import Homepage from "../views/Homepage";
import GamesPage from "../views/GamesPage";
import { getAllGenres} from "./loader";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                Component: Homepage
            },

            {
                path:'/games',
                Component: GamesPage,
                loader: getAllGenres
            }
        ]
    }
]);

export default router;