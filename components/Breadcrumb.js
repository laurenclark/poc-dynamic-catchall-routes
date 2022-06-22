import { useRouter } from "next/router";
import { Box, Link } from "@chakra-ui/react";

export default function Breadcrumb() {
    const router = useRouter();
    const slug = router.query.slug || [];

    return (
        <Box marginTop="20px">
            <span>
                Breadcrumb:&nbsp;
                {router.asPath === "/" && (
                    <Link color="navy" href="/">
                        Dashboard
                    </Link>
                )}
                {slug.map((link, i) => (
                    <span key={i}>
                        <Link color="navy" href={`/${slug[i]}`}>
                            {link}
                        </Link>
                        {slug.length > 1 && i !== slug.length - 1 && " > "}
                    </span>
                ))}
            </span>
        </Box>
    );
}
