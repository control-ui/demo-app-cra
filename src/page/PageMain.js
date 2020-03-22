import React from "react";
import {Typography} from "@material-ui/core";
import {PageBox, PageContent} from "@control-ui/core/es/PageContent";
import Head from "@control-ui/core/es/Head";
import {ReactComponent as Logo} from '../logo.svg';

export default function PageMain() {
    return (
        <>
            <Head
                title={'Control-UI'}
                description={'React Components for Web-Apps, with or without API, using the Material-UI Design-System.'}
            />
            <PageContent>
                <Logo width={150} style={{marginTop: 24}}/>
                <PageBox
                    title={'Control-UI'}
                >

                    <Typography component={'p'} variant={'body1'} gutterBottom>
                        <strong>React Components</strong> for Web-Apps, with or without API, using the Material-UI Design-System.
                    </Typography>
                </PageBox>
            </PageContent>
        </>
    );
}
