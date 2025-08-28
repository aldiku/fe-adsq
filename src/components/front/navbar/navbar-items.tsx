import { Box, Button, Menu, MenuItem } from "@mui/material";
import { navbarData, NavbarItem } from "./data";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

const NavbarItems = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [menuAnchor, setMenuAnchor] = useState<{ [key: string]: HTMLElement | null }>({});

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, title: string) => {
    setMenuAnchor((prev) => ({ ...prev, [title]: event.currentTarget }));
  };

  const handleMenuClose = (title: string) => {
    setMenuAnchor((prev) => ({ ...prev, [title]: null }));
  };

  // 👇 Close all menus when the route changes
  useEffect(() => {
    setMenuAnchor({});
  }, [pathname]);


    const renderMenuItems = (items: NavbarItem[], parentTitle: string) => {
        return items.map((item, index) => {
            const hasChildren = item.children && item.children.length > 0;
            const menuKey = `${parentTitle}-${item.title}`;

            return (
                <MenuItem
                    key={index}
                    onClick={(e) => {
                        if (hasChildren) {
                            handleMenuOpen(e as unknown as React.MouseEvent<HTMLButtonElement>, menuKey);
                        } else {
                            router.push(item.path);
                            handleMenuClose(menuKey);
                        }
                    }}
                    className="ritem"
                >
                    {hasChildren ? (
                        <>
                            <Box
                                color={"#3A4F66"}
                                // p={5}
                                sx={{
                                    padding: "4px",
                                    pr: "8px"
                                }}
                            >
                                {item.title}
                            </Box> 
                            <Icon 
                                icon="iconamoon:arrow-right-2-bold" 
                                color={"#3A4F66"} 
                                width={18} 
                                style={{ 
                                    // padding: "2px",
                                    position: 'absolute', 
                                    right: 0 
                                }} 
                            />
                            <Menu
                                anchorEl={menuAnchor[menuKey]}
                                open={Boolean(menuAnchor[menuKey])}
                                onClose={() => handleMenuClose(menuKey)}
                                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}
                            >
                                {item.children && renderMenuItems(item.children, menuKey)}
                            </Menu>
                        </>
                    ) : (
                        <Link href={item.path} style={{ textDecoration: "none", color: "#3A4F66" }}>
                            <Box sx={{
                                padding: "4px",
                                color: "#3A4F66",
                                '&:hover': {
                                    color: "#ee2645"
                                },
                                width:"100%"
                            }}> 
                                {item.title}
                            </Box>
                        </Link>
                    )}
                </MenuItem>
            );
        });
    };

    return (
        <Box className="nav" sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {navbarData.map((item, index) => {
                const hasChildren = item.children && item.children.length > 0;
                
                return (
                    <Box key={index}>
                        {hasChildren ? (
                            <>
                                <Button
                                    onClick={(e) => handleMenuOpen(e, item.title)}
                                    endIcon={<Icon icon="iconamoon:arrow-down-2-bold" width={18} />}
                                    sx={{
                                        color: "#3A4F66",
                                        '&:hover': {
                                            color: "#ee2645"
                                        }
                                    }}
                                >
                                    {item.title}
                                </Button>
                                <Menu
                                    anchorEl={menuAnchor[item.title]}
                                    open={Boolean(menuAnchor[item.title])}
                                    onClose={() => handleMenuClose(item.title)}
                                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                                    transformOrigin={{ vertical: "top", horizontal: "left" }}
                                >
                                    {item.children && renderMenuItems(item.children, item.title)}
                                </Menu>
                            </>
                        ) : (
                            <Link href={item.path} style={{ textDecoration: "none" }}>
                                <Button onClick={() => router.push(item.path)} sx={{
                                    color: "#3A4F66",
                                    '&:hover': {
                                        color: "#ee2645"
                                    }
                                }}>{item.title}</Button>
                            </Link>
                        )}
                    </Box>
                );
            })}
        </Box>
    );
};

export default NavbarItems;
