import React from "react";
import {ListItemLink} from "@control-ui/kit/List/LinkList";
import {useRouter} from "@control-ui/app/RouterProvider";
import {NavListNested, NavList} from "@control-ui/kit/Menu/NavList";

export default ({dense = true, closeOnClick}) => {
    const {routes} = useRouter();
    return <NavList dense={dense}>
        <NavListNested
            routes={routes.routes}
            dense={dense}
            filter={route => route.nav && !route.nav.footer}
        />
        <ListItemLink to={'impress'} primary={'Impress'} dense={dense} showActive onClick={closeOnClick}/>
        <ListItemLink to={'privacy'} primary={'Privacy Policy'} dense={dense} showActive onClick={closeOnClick}/>
    </NavList>;
};
