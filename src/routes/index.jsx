import StackRoutes from "./stack.routes";
import Home from "../screens/signIn";


export default function Routes(){
    const signed = false;

    return(
        signed ? <Home /> : <StackRoutes />
    )
}