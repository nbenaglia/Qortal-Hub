import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AppsNavBarLeft,
  AppsNavBarParent,
  AppsNavBarRight,
} from "./Apps-styles";
import NavBack from "../../assets/svgs/NavBack.svg";
import NavAdd from "../../assets/svgs/NavAdd.svg";
import NavMoreMenu from "../../assets/svgs/NavMoreMenu.svg";
import {
  ButtonBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tab,
  Tabs,
} from "@mui/material";
import {
  executeEvent,
  subscribeToEvent,
  unsubscribeFromEvent,
} from "../../utils/events";
import TabComponent from "./TabComponent";
import PushPinIcon from "@mui/icons-material/PushPin";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  navigationControllerAtom,
  settingsLocalLastUpdatedAtom,
  sortablePinnedAppsAtom,
} from "../../atoms/global";
import { AppsDevModeTabComponent } from "./AppsDevModeTabComponent";



export const AppsDevModeNavBar = () => {
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [navigationController, setNavigationController] =  useRecoilState(navigationControllerAtom)

  const [isNewTabWindow, setIsNewTabWindow] = useState(false);
  const tabsRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    // Scroll to the last tab whenever the tabs array changes (e.g., when a new tab is added)
    if (tabsRef.current) {
      const tabElements = tabsRef.current.querySelectorAll(".MuiTab-root");
      if (tabElements.length > 0) {
        const lastTab = tabElements[tabElements.length - 1];
        lastTab.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    }
  }, [tabs.length]); // Dependency on the number of tabs


  const isDisableBackButton = useMemo(()=> {
    if(selectedTab && navigationController[selectedTab?.tabId]?.hasBack) return false
    if(selectedTab && !navigationController[selectedTab?.tabId]?.hasBack) return true
    return false
  }, [navigationController, selectedTab])




  const setTabsToNav = (e) => {
    const { tabs, selectedTab, isNewTabWindow } = e.detail?.data;

    setTabs([...tabs]);
    setSelectedTab(!selectedTab ? null : { ...selectedTab });
    setIsNewTabWindow(isNewTabWindow);
  };

  useEffect(() => {
    subscribeToEvent("appsDevModeSetTabsToNav", setTabsToNav);

    return () => {
      unsubscribeFromEvent("appsDevModeSetTabsToNav", setTabsToNav);
    };
  }, []);

 

 
  return (
    <AppsNavBarParent
      sx={{
        position: "relative",
        flexDirection: "column",
        width: "60px",
        height: "unset",
        maxHeight: "70vh",
        borderRadius: "0px 30px 30px 0px",
        padding: "10px",
      }}
    >
      <AppsNavBarLeft
        sx={{
          flexDirection: "column",
        }}
      >
        <ButtonBase
          onClick={() => {
            executeEvent("devModeNavigateBack", selectedTab?.tabId);
          }}
          disabled={isDisableBackButton}
          sx={{
            opacity: !isDisableBackButton ? 1 : 0.1,
            cursor: !isDisableBackButton ? 'pointer': 'default'
          }}
        >
          <img src={NavBack} />
        </ButtonBase>
        <Tabs
          orientation="vertical"
          ref={tabsRef}
          aria-label="basic tabs example"
          variant="scrollable" // Make tabs scrollable
          scrollButtons={true}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "white",
            },
            maxHeight: `320px`, // Ensure the tabs container fits within the available space
            overflow: "hidden", // Prevents overflow on small screens
          }}
        >
          {tabs?.map((tab) => (
            <Tab
              key={tab.tabId}
              label={
                <AppsDevModeTabComponent
                  isSelected={
                    tab?.tabId === selectedTab?.tabId && !isNewTabWindow
                  }
                  app={tab}
                />
              } // Pass custom component
              sx={{
                "&.Mui-selected": {
                  color: "white",
                },
                padding: "0px",
                margin: "0px",
                minWidth: "0px",
                width: "50px",
              }}
            />
          ))}
        </Tabs>
      </AppsNavBarLeft>
      {selectedTab && (
        <AppsNavBarRight
        sx={{
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <ButtonBase
          onClick={() => {
            setSelectedTab(null);
            executeEvent("devModeNewTabWindow", {});
          }}
        >
          <img
            style={{
              height: "40px",
              width: "40px",
            }}
            src={NavAdd}
          />
        </ButtonBase>
        <ButtonBase
          onClick={(e) => {
            if (!selectedTab) return;
            handleClick(e);
          }}
        >
          <img
            style={{
              height: "34px",
              width: "34px",
            }}
            src={NavMoreMenu}
          />
        </ButtonBase>
      </AppsNavBarRight>
      )}
      
      <Menu
        id="navbar-more-mobile"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "var(--bg-primary)",
              color: "#fff",
              width: "148px",
              borderRadius: "5px",
            },
          },
        }}
        sx={{
          marginTop: "10px",
        }}
      >

        <MenuItem
          onClick={() => {
            executeEvent("refreshApp", {
              tabId: selectedTab?.tabId,
            });
            handleClose();
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: "24px !important",
              marginRight: "5px",
            }}
          >
            <RefreshIcon
              height={20}
              sx={{
                color: "rgba(250, 250, 250, 0.5)",
              }}
            />
          </ListItemIcon>
          <ListItemText
            sx={{
              "& .MuiTypography-root": {
                fontSize: "12px",
                fontWeight: 600,
                color: "rgba(250, 250, 250, 0.5)",
              },
            }}
            primary="Refresh"
          />
        </MenuItem>
      </Menu>
    </AppsNavBarParent>
  );
};