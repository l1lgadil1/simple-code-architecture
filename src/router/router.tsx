import {createBrowserRouter} from "react-router";
import {Root} from "./root";
import {ProcessPage} from "../pages/process";
import { ProcessListPage } from "../pages/process-list";

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
