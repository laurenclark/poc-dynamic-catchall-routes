import NextLink from "next/link";

import { ListItem, List, LinkBox } from "@chakra-ui/react";

const createMenu = (items) => {
    const withoutChildren = ({ name, url }) => (
        <LinkBox color="orange">
            <NextLink href={url || "/"} passHref>
                {name}
            </NextLink>
        </LinkBox>
    );

    const withChildren = ({ name, children }) => (
        <>
            {name} ▼{createMenu(children)}
        </>
    );
    return (
        <List>
            {items?.map(({ name, url, children }, i) => (
                <ListItem key={i}>
                    {!children
                        ? withoutChildren({ name, url })
                        : withChildren({ name, children })}
                </ListItem>
            ))}
        </List>
    );
};

export default function Menu({ menuItems }) {
    return createMenu(menuItems);
}
