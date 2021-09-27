import { Switch, Route } from "react-router";
import Main from './components/pages/Main'

const Router = () => {
    return ( 
        <Switch>
            <Route path='/:category?' component={Main}/>
            <Route path='/' component={Main}/>
        </Switch>
    );
}
 
export default Router;