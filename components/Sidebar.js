import { Box } from "@chakra-ui/react";

export default function Sidebar({ children }) {
    return (
        <Box
            position="absolute"
            top="0"
            height="calc(100vh - 100px)"
            width="350px"
            sx={{ fontWeight: "bold" }}>
            <Box
                position="absolute"
                overflowY="scroll"
                width="100%"
                height="100%"
                paddingX="5px"
                color="orange">
                <Box paddingTop="20px" paddingX="15px" marginBottom="20px">
                    {children}
                </Box>
            </Box>
        </Box>
    );
}
