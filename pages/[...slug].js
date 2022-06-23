import { useRouter } from "next/router";
import Menu from "../components/Menu";
import Header from "../components/Header";
import FullPageWithSidebar from "../layouts/FullPageWithSidebar";

const MerlinPage = ({ menuData }) => {
    const { data: menuItems, isLoading, isError } = menuData;
    const router = useRouter();
    // const slug = router?.query?.slug?.join(" ");

    return (
        <FullPageWithSidebar sideBarContent={<Menu menuItems={menuItems} />}>
            <Header />
        </FullPageWithSidebar>
    );
};

export default MerlinPage;
