import React, { Component } from "react";
import {
    BrowserRouter,
    Route 
} from "react-router-dom";
import Login from "./Login.jsx";
import Meetups from "./Meetups.jsx";
import Onemeet from "./Onemeet.jsx";

class Routes extends Component {
    render() {
        return(
            <BrowserRouter>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/meetups" component={Meetups}/>
                <Route exact path="/meetup" component={Onemeet}/>
            </BrowserRouter>
        )
    }
}
export default Routes;