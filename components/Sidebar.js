import { memo } from "react";
import { Box } from "@chakra-ui/react";

function Sidebar({ children }) {
    return (
        <Box
            position="absolute"
            top="0"
            height="100vh"
            width="350px"
            sx={{ fontWeight: "bold" }}>
            <Box
                position="absolute"
                overflowY="scroll"
                width="100%"
                height="100%"
                paddingX="5px">
                <Box paddingTop="20px" paddingX="15px" marginBottom="20px">
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default memo(Sidebar);
