import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import Breadcrumbs from "../components/Breadcrumb";

export default function Header({ title = "Dashboard" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box height="230px" background="#cc4631">
                <Breadcrumbs />
                <Heading padding="0 15px" color="white">
                    {title}
                </Heading>
            </Box>
        </>
    );
}
