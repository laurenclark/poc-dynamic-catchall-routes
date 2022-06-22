import { useRouter } from "next/router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export default function Breadcrumbs() {
    const router = useRouter();
    const slug = router.query.slug || [];

    return (
        <Breadcrumb separator=">">
            {router.asPath === "/" && (
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
            )}
            {slug.map((link, i) => (
                <BreadcrumbItem>
                    <BreadcrumbLink href={`/${slug[i]}`}>{link}</BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
}
