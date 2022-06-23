import FullPageWithSidebar from "../layouts/FullPageWithSidebar";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default function Home({ menuData }) {
    const { data: menuItems } = menuData;
    return (
        <FullPageWithSidebar sideBarContent={<Menu menuItems={menuItems} />}>
            <Header />
        </FullPageWithSidebar>
    );
}
