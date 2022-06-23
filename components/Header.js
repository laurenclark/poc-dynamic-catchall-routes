import { Box, Heading } from "@chakra-ui/react";
import Breadcrumbs from "../components/Breadcrumb";

export default function Header({ title = "Millertech" }) {
    return (
        <Box height="230px" background="#cc4631">
            <Breadcrumbs />
            <Heading padding="0 15px" color="white">
                {title}
            </Heading>
        </Box>
    );
}
