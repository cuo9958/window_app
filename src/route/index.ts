import HomePage from "../pages/home";
import NotFundPage from "../pages/notfund";
import DetailPage from "../pages/home/detail";
import AppsPage from "../pages/apps";
import RecommendPage from "../pages/recommend";
import AboutPage from "../pages/about";
import SharedPage from "../pages/shared";

import Layout from "@/layout";
import TestPage from "../pages/test";

export const Routes: iRoute[] = [
    {
        path: "/",
        component: HomePage,
        Layout,
        meta: {
            title: "首页",
        },
    },
    {
        path: "/detail/:id",
        component: DetailPage,
        Layout,
    },
    {
        path: "/apps",
        component: AppsPage,
        Layout,
    },
    {
        path: "/recommend",
        component: RecommendPage,
        Layout,
    },
    {
        path: "/about",
        component: AboutPage,
        Layout,
    },
    {
        path: "/shared",
        component: SharedPage,
        Layout,
    },
    {
        path: "/test",
        child: [
            {
                path: "/:id",
                component: TestPage,
            },
        ],
    },
    {
        path: "*",
        component: NotFundPage,
    },
];

export interface iRoute {
    path: string;
    component?: any;
    child?: any[];
    meta?: iMeta;
    Layout?: any;
}

interface iMeta {
    title?: string;
}
