import {createBrowserRouter} from "react-router-dom";
import MyImagesComp from "../component/MyImagesComp";
import MyTask1 from "../component/MyTask1";
import UserComp from "../component/UserComp";
import FunctionAmaan from "../component/UserComp";
import PageNotFoundComp from "../layout/PageNotFoundComp"

const router = createBrowserRouter([
    {path:"/",element:<FunctionAmaan/>}, //Default
    {path: "/myimagescomp",element: <MyImagesComp/>},
    {path: "/Task1", element:<MyTask1/>},
    {path: "/Task2", element:<UserComp/>},
    {path: "/*", element:<PageNotFoundComp/>} //If wrong
]);

export default router;