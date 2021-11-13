import { Route, Redirect, useHistory, useLocation} from "react-router-dom";
import useAuth from "../Hooks/UseAuth";

const PrivateRoute = ({children,...rest}) => {
    const{user,isloading}=useAuth();
    let history=useHistory();
    let location=useLocation();
    if(isloading){
        return("Loading")
    }
    return (
        <Route 
        {...rest}
        render={({ location })=>
            user.email?children:<Redirect
            to={{
                pathname:"/signin",
                state: { from: location }
            }}
            />
        }/>
    );
};

export default PrivateRoute;