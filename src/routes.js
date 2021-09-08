
import Admin from "./pages/Admin"
import Basket from "./pages/Basket";
import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import { ADMIN_Route , SHOP_Route, LOGIN_Route , REGISTRATION_Route ,BASKET_Route } from "./utils/constants";

export const authRoutes = [
    {
        path: ADMIN_Route,
        Component: Admin
    },
    {
        path: BASKET_Route,
        Component: Basket
    },
]
export const publicRoutes =[
    
      
        {
            path: SHOP_Route,
            Component: Shop
        },
        {
            path: LOGIN_Route,
            Component: Auth
        },
        {
            path:REGISTRATION_Route,
            Component: Auth
        },
       
        
 
    
]