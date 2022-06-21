import Sidebar from "../components/Sidebar";

export default function FullPageWithSidebar({ children, sideBarContent }) {
    return (
        <>
            <main>{children}</main>
            <Sidebar>{sideBarContent}</Sidebar>
        </>
    );
}
