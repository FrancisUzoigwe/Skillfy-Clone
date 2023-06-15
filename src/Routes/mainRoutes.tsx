import {createBrowserRouter} from "react-router-dom";
import Layout from "../Components/Common/Layout";
// import HomeScreen from "../Pages/HomeScreen";
import GlobalFile from "../Global/GlobalFile";


export const mainRoutes = createBrowserRouter([
    {
        path : "/",
        element : <Layout/>,
        children : [
            {
                index : true, 
                element : <GlobalFile/>,
            }
        ]
    }
])