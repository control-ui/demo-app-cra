import React from 'react';
import Loadable from 'react-loadable';
import './App.css';
import App from "@control-ui/layouts/es/App";
import {routes} from "./routes";
import {Layout} from "@control-ui/layouts/es/default/Layout";
import {CustomDrawer, CustomFooter, CustomHeader} from "./component/Layout";
import {LoadingCircular} from "@control-ui/core/es/Loading/LoadingCircular";

const Provider = ({children}) => (
    <>
        {children}
    </>
);

const PageNotFound = Loadable({
    loader: () => import('./page/PageNotFound'),
    loading: () => <LoadingCircular title={'Not Found'}/>,
});

const CustomLayout = () => <Layout
    Header={CustomHeader}
    Drawer={CustomDrawer}
    Footer={CustomFooter}
    NotFound={PageNotFound}
/>;

const i18n = {
    allLanguages: {
        en: '0.1',
    },
    detection: ['localStorage'],
    defaultLanguage: 'en',
    loader: (url) => import ('./locales/' + url + '.json'),
    l10n: {ns: {de: {}}}
};

const CustomApp = () => <App
    routes={routes}
    Layout={CustomLayout}
    i18n={i18n}
    Provider={Provider}
/>;

export default CustomApp;
