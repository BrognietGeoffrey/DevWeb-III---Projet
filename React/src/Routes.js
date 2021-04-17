import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js"

class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route render={function () {
                    return <p>Not found</p>
                }} />
                {/* Finally, catch all unmatched routes */}
            </Switch>
        )
    }
}

export default Routes;