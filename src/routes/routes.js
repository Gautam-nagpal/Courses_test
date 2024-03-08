import { Grid } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { EnrollCourse, Homepage } from "../components"

export default function Routes() {

    return (
        <Switch>
            <PublicRoute exact path="/" component={Homepage} />
            <PublicRoute path="/course/:id/enroll/" component={EnrollCourse} />
        </Switch>
    )
};

const PublicRoute = ({ component: Component, ...rest }) => {
    return (
        <React.Fragment >
            <Route
                {...rest}
                render={
                    props => {
                        setTimeout(() => {
                            window.scrollTo(0, 0)
                        }, 250);
                        return (
                            <Grid container component="main" className="main_container" >
                                <Component {...props} />
                            </Grid>
                        )
                    }
                }
            />
        </React.Fragment>
    )
};