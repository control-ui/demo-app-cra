import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import {InvertColors as InvertColorsIcon} from '@material-ui/icons';
import {Link as RouterLink} from "react-router-dom";
import {Help} from '@material-ui/icons';
import {AccessTooltipIcon} from "@control-ui/kit/Tooltip";
import {LinkIconButton} from "@control-ui/kit/Link/LinkIconButton";
import {Header} from "@control-ui/app/Header";
import {useSwitchTheme} from "@control-ui/app/AppTheme";
import {Drawer} from "@control-ui/app/Drawer";
import {Footer} from "@control-ui/app/Footer";
import Nav from "./Nav";
import {ReactComponent as Logo} from '../logo.svg';

export const CustomHeader = () => {
    const {switchTheme} = useSwitchTheme();
    return <Header>
        <RouterLink to={'/'}>
            <Logo width={26} style={{marginLeft: 6, display: 'block'}}/>
        </RouterLink>

        <IconButton color="inherit" onClick={switchTheme} style={{marginLeft: 'auto'}}>
            <AccessTooltipIcon title={'Switch Theme'}>
                <InvertColorsIcon/>
            </AccessTooltipIcon>
        </IconButton>
    </Header>;
};

export const CustomDrawer = () => {
    return <Drawer>
        <Nav/>
    </Drawer>;
};

export const CustomFooter = () => {
    return <Footer>
        <LinkIconButton to={'https://github.com/control-ui/control-ui/issues'} color="inherit" style={{color: 'inherit', marginLeft: 'auto'}}>
            <Help fill='currentColor' fontSize={'small'}/>
            <span className={'sr-only'}>To Support</span>
        </LinkIconButton>
    </Footer>;
};
