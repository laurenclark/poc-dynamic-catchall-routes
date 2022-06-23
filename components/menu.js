import { memo } from "react";
import NextLink from "next/link";

import { ListItem, List, LinkBox } from "@chakra-ui/react";

function Menu({ menuItems }) {
    return (
        <>
            <List paddingLeft="0">
                {menuItems?.map(({ name, url, children }, i) => (
                    <ListItem key={i}>
                        {!children ? (
                            <LinkBox color="orange">
                                <NextLink href={url || "/"} passHref>
                                    {name}
                                </NextLink>
                            </LinkBox>
                        ) : (
                            <>{name} ▼</>
                        )}
                        {children && (
                            <List paddingLeft="15px">
                                {children.map(({ name, url, children }, i) => (
                                    <ListItem key={i}>
                                        <LinkBox color="gold">
                                            <NextLink
                                                href={url || "/"}
                                                passHref>
                                                {name}
                                            </NextLink>
                                        </LinkBox>
                                    </ListItem>
                                ))}
                            </List>
                        )}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default memo(Menu);
