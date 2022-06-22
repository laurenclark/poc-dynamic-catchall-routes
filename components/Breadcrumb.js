import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export default function Breadcrumb() {
    const router = useRouter();
    const slug = router.query.slug || [];
    return (
        <Box marginTop="20px">
            Breadcrumb: <a href={router.asPath}>{slug.join(" / ")}</a>
        </Box>
    );
}
