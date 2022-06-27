import NextLink from "next/link";

import { ListItem, List, LinkBox } from "@chakra-ui/react";

const createMenu = (items) => {
    const withoutChildren = (item) => (
        <LinkBox color="orange">
            <NextLink
                href={{
                    pathname: item.url || "/",
                    query: {
                        header: item.header,
                        id: item.id,
                        can_code: item.can_code
                    }
                }}
                passHref>
                {item.name}
            </NextLink>
        </LinkBox>
    );

    const withChildren = (item) => (
        <>
            {item.name} ▼{createMenu(item.children)}
        </>
    );
    return (
        <List paddingLeft="25px">
            {items?.map((item, i) => {
                const { children } = item;
                return (
                    <ListItem key={i}>
                        {!children ? withoutChildren(item) : withChildren(item)}
                    </ListItem>
                );
            })}
        </List>
    );
};

export default function Menu({ menuItems }) {
    return createMenu(menuItems);
}
