import { Switch, Route } from "react-router";
import Main from './components/main'

const Router = () => {
    return ( 
        <Switch>
            <Route path='/:category?' component={Main}/>
            <Route path='/' component={Main}/>
        </Switch>
    );
}
 
export default Router;