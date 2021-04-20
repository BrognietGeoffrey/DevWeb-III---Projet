import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import Notes from "./pages/Notes.js";
import PagePrincipale from "./pages/PagePrincipale";

class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/notes" component={Notes} />
                <Route exact path='/page-principale' component={PagePrincipale} />
                <Route render={function () {
                    return <p>Not found</p>
                }} />
                {/* Finally, catch all unmatched routes */}
            </Switch>
        )
    }
}

export default Routes;