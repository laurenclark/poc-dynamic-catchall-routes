import Sidebar from "../components/Sidebar";
import Menu from "../components/Menu";
import { Box } from "@chakra-ui/react";

export default function FullPageWithSidebar({
    children,
    sideBarContent = <Menu />
}) {
    return (
        <Box width="100vw" height="100vh">
            <Box marginLeft="250px" marginBottom="100px ">
                {children}
            </Box>
            <Sidebar>{sideBarContent}</Sidebar>
        </Box>
    );
}
