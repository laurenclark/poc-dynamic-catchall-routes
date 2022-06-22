import { useRouter } from "next/router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export default function Breadcrumbs() {
    const router = useRouter();
    const slug = router.query.slug || [];
    const current = router.asPath.split("/").pop();

    return (
        <Breadcrumb separator=">">
            {router.asPath === "/" && (
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
            )}
            {slug.map((link, i) => (
                <BreadcrumbItem key={i}>
                    <BreadcrumbLink
                        href={`/${slug
                            .filter((item) => item !== current)
                            .join("/")}`}>
                        {link}({i})
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
}
