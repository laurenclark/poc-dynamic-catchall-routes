import { useRouter } from "next/router";

export default function Breadcrumb() {
    const router = useRouter();
    const slug = router.query.slug || [];
    return <h1>Breadcrumb: {slug.join(" / ")}</h1>;
}
