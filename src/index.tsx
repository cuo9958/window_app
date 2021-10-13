import ReactDOM from "react-dom";
import "./index.scss";
import { Route } from "react-router";
import { Switch, HashRouter } from "react-router-dom";

import { Routes, iRoute } from "./route";

ReactDOM.render(
    <HashRouter>
        <Switch>{GetRoutes(Routes).map((item) => item)}</Switch>
    </HashRouter>,
    document.getElementById("root")
);
function GetRoutes(list: iRoute[]) {
    const routes: any[] = [];
    list.forEach((item, index) => {
        if (item.child && item.child.length > 0) {
            item.child.forEach((child, jdex) => {
                if (child.Layout) {
                    routes.push(
                        <Route
                            key={index + "_" + jdex}
                            path={item.path + child.path}
                            exact
                            strict
                            render={(data) => (
                                <child.Layout {...data}>
                                    <child.component {...data} />
                                </child.Layout>
                            )}
                        />
                    );
                } else {
                    routes.push(<Route key={index + "_" + jdex} path={item.path + child.path} exact strict render={(data) => <child.component {...data} />} />);
                }
            });
        } else {
            if (item.Layout) {
                routes.push(
                    <Route
                        key={index}
                        path={item.path}
                        exact
                        strict
                        render={(data) => (
                            <item.Layout {...data}>
                                <item.component {...data} />
                            </item.Layout>
                        )}
                    />
                );
            } else {
                routes.push(<Route key={index} path={item.path} exact strict render={(data) => <item.component {...data} />} />);
            }
        }
    });
    return routes;
}
