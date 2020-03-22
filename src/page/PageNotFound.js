import React from "react";
import {PageBox, PageContent} from "@control-ui/core/es/PageContent";
import Head from "@control-ui/core/es/Head";

export default function PageMain() {
    return (
        <>
            <Head
                title={'404 Control-UI'}
            />
            <PageContent>
                <PageBox
                    title={'404 Page not found'}
                />
            </PageContent>
        </>
    );
}
