import {createBrowserRouter} from "react-router";
import {Root} from "./root";
import {ProcessListPage} from "../pages/process-list";
import {ProcessPage} from "../pages/process";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children:[
            {
                index:true,
                element:<ProcessListPage/>
            },
            {
                path:'process/:id',
                element:<ProcessPage/>
            }
        ]
    }
])
