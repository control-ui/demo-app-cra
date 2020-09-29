import React from "react";
import {PageBox, PageContent} from "@control-ui/kit/PageContent";
import {Head} from "@control-ui/kit/Head";

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
