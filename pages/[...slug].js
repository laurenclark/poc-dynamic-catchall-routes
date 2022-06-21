import { useRouter } from "next/router";

const Page = () => {
    const router = useRouter();
    if (String(router.query.slug) === "404") {
        return "The 404 page.";
    }
    const slug = router.query.slug || [];

    return <h1>Breadcrumbs: {slug.join("/")}</h1>;
};

export default Page;
