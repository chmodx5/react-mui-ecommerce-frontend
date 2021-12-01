import React, { useState } from "react";
import {
  Paper,
  MenuItem,
  Menu,
  MenuList,
  ListItemText,
  ListItemIcon,
  Divider,
  ListSubheader,
} from "@mui/material";

import Check from "@mui/icons-material/Check";
import { Box } from "@mui/system";

//defining the types
interface shown {
  isShown: boolean;
}

let SideMenuItems = [
  {
    icon: "Supermarket",
    text: "Electronics",
    sub_items: [
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Computers",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Computers",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Computers",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Computers",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Computers",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    icon: "",
    text: "Health & Beauty",
    sub_items: [
      {
        text: "soap",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "sanitizer",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    icon: "",
    text: "Home & Office",
    sub_items: [
      {
        text: "Mobile",
        sub_items: [
          {
            title: "smartphone",
            link: "/",
          },
          {
            title: "featurephone",
            link: "/",
          },
          {
            title: "googlephone",
            link: "/",
          },
        ],
      },
      {
        text: "Computers",
        sub_items: [
          {
            title: "laptop",
            link: "/",
          },
          {
            title: "desktop",
            link: "/",
          },
          {
            title: "tablet",
            link: "/",
          },
        ],
      },
    ],
  },
];

export default function SideMenu() {
  const [isShown, setIsShown] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <Paper
      elevation={4}
      sx={{
        height: "100%",
        width: "auto",
        display: "inline-block",
        position: "absolute",
        zIndex: "99",
      }}
    >
      <Box sx={{ display: "flex", height: "100%" }}>
        <MenuList dense sx={{ minWidth: "250px", height: "100%" }}>
          {SideMenuItems.map((SideMenuItem, index) => {
            return (
              <MenuItem
                disableGutters
                key={index}
                onMouseLeave={() => {
                  setIsShown(false);
                  setSelectedItem(SideMenuItem.text);
                }}
                onMouseEnter={() => {
                  setIsShown(true);
                  setSelectedItem(SideMenuItem.text);
                }}
              >
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary={SideMenuItem.text} />
              </MenuItem>
            );
          })}
        </MenuList>
        <Divider orientation="vertical" flexItem />
        {isShown && (
          <Box
            sx={{
              padding: "0 10px 0 10px",
              display: "flex",
              flexWrap: "wrap",
              minWidth: "100px",
            }}
            onMouseLeave={() => {
              setIsShown(false);
            }}
            onMouseEnter={() => {
              setIsShown(true);
            }}
          >
            {SideMenuItems.map((SideMenuItem, index) => {
              return (
                <React.Fragment key={index}>
                  {selectedItem === SideMenuItem.text && (
                    <React.Fragment>
                      {SideMenuItem.sub_items.map((sub_item, index) => {
                        return (
                          <MenuList
                            dense
                            sx={{
                              margin: "4px",
                            }}
                            key={index}
                          >
                            <ListSubheader>{sub_item.text}</ListSubheader>
                            {sub_item.sub_items.map((sub_item, index) => {
                              return (
                                <MenuItem key={index}>
                                  <ListItemText primary={sub_item.title} />
                                </MenuItem>
                              );
                            })}
                          </MenuList>
                        );
                      })}
                    </React.Fragment>
                  )}
                </React.Fragment>
              );
            })}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
