import { Box, Heading, Button } from "@chakra-ui/react";
import Head from "next/head";
import Breadcrumbs from "../components/Breadcrumb";

export default function Header({ title = "Dashboard", buttonText }) {
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

                {buttonText && (
                    <Button
                        display="block"
                        float="right"
                        marginTop="50px"
                        marginRight="40px">
                        {buttonText}
                    </Button>
                )}
            </Box>
        </>
    );
}
