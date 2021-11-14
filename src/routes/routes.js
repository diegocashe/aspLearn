import Home from "../components/layout/home/Home";
import { BrowserRouter as div, Switch, Route, Redirect } from "react-router-dom";

const Routes = () => {

    <div className="bg-trueGray-200 overflow-y-auto scroll ">
        <Navbar />
        <div className="app-container bg-trueGray-200 ">
            <Switch>
                <Route exact path="/d-bot-info" component={Home} />
                <Route path="/d-bot-info/faqs" component={Faq} />
                <Route path="/d-bot-info/team" component={Team} />
                <Route path="*">
                    <Redirect to="/404" />
                </Route>
            </Switch>
        </div>
    </div>

}