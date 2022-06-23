import { useRouter } from "next/router";
import Header from "../components/Header";
import FullPageWithSidebar from "../layouts/FullPageWithSidebar";

const MerlinPage = () => {
    const router = useRouter();
    // const slug = router?.query?.slug?.join(" ");

    return (
        <FullPageWithSidebar>
            <Header />
        </FullPageWithSidebar>
    );
};

export default MerlinPage;
