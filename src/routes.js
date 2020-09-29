import React from 'react';
import Loadable from 'react-loadable';
import {LoadingCircular} from "@control-ui/kit/Loading/LoadingCircular";

export const routes = {
    routes: [
        {
            path: '/',
            nav: {
                to: '/',
                label: 'Home',
            },
            content: {
                exact: true,
                component: Loadable({
                    loader: () => import('./page/PageMain'),
                    loading: (props) => <LoadingCircular {...props} title='Loading Home'/>,
                })
            }
        },
    ]
};
