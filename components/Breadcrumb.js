import { useRouter } from "next/router";
import { Box, Link } from "@chakra-ui/react";

export default function Breadcrumb() {
    const router = useRouter();
    const slug = router.query.slug || [];

    return (
        <Box marginTop="20px">
            <span>
                Breadcrumb:
                {router.asPath === "/" && (
                    <Link color="navy" href="/">
                        &nbsp;Dashboard
                    </Link>
                )}
                {slug.map((link, i) => (
                    <span key={i}>
                        <Link color="navy" href={`/${link}`}>
                            {link}
                        </Link>
                        {slug.length > 1 && i !== slug.length - 1 && " > "}
                    </span>
                ))}
            </span>
        </Box>
    );
}
