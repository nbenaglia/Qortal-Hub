import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import { Home, Groups, Message, ShowChart } from "@mui/icons-material";
import Box from "@mui/material/Box";
import BottomLogo from "../../assets/svgs/BottomLogo5.svg";
import { CustomSvg } from "../../common/CustomSvg";
import { WalletIcon } from "../../assets/Icons/WalletIcon";
import { HubsIcon } from "../../assets/Icons/HubsIcon";
import { TradingIcon } from "../../assets/Icons/TradingIcon";
import { MessagingIcon } from "../../assets/Icons/MessagingIcon";

const IconWrapper = ({ children, label, color }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        flexDirection: "column",
      }}
    >
      {children}
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "12px",
          fontWeight: 500,
          color: color,
          wordBreak: 'normal'
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export const MobileFooter = ({
  selectedGroup,
  groupSection,
  isUnread,
  goToAnnouncements,
  isUnreadChat,
  goToChat,
  goToThreads,
  setOpenManageMembers,
  groupChatHasUnread,
  groupsAnnHasUnread,
  directChatHasUnread,
  chatMode,
  openDrawerGroups,
  goToHome,
  setIsOpenDrawerProfile,
  mobileViewMode,
  setMobileViewMode,
  setMobileViewModeKeepOpen,
  hasUnreadGroups,
  hasUnreadDirects
}) => {
  const [value, setValue] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        backgroundColor: "var(--bg-primary)",
        display: "flex",
        alignItems: "center",
        height: "67px", // Footer height
        zIndex: 1,
        borderTopRightRadius: "25px",
        borderTopLeftRadius: "25px",
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{ backgroundColor: "transparent", flexGrow: 1 }}
      >
        <BottomNavigationAction
          onClick={() => {
            // setMobileViewMode('wallet')
            setIsOpenDrawerProfile(true);
          }}
          icon={
            <IconWrapper color="rgba(250, 250, 250, 0.5)" label="Wallet">
              <WalletIcon color="rgba(250, 250, 250, 0.5)" />
            </IconWrapper>
          }
          sx={{ color: value === 0 ? "white" : "gray", padding: "0px 10px" }}
        />
        <BottomNavigationAction
          onClick={() => {
            setMobileViewMode("groups");
          }}
          icon={
            <IconWrapper color="rgba(250, 250, 250, 0.5)" label="Hubs">
              <HubsIcon color={hasUnreadGroups ? "var(--unread)" : "rgba(250, 250, 250, 0.5)"} />
            </IconWrapper>
          }
          sx={{
            color: value === 0 ? "white" : "gray",
            paddingLeft: "10px",
            paddingRight: "42px",
          }}
        />
      </BottomNavigation>

      {/* Floating Center Button */}
      <Box
        sx={{
          position: "absolute",
          bottom: "34px", // Adjusted to float properly based on footer height
          left: "50%",
          transform: "translateX(-50%)", // Center horizontally
          width: "59px",
          height: "59px",
          backgroundColor: "var(--bg-primary)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for the floating effect
          zIndex: 3,
        }}
      >
        <Box
          sx={{
            width: "49px", // Slightly smaller inner circle
            height: "49px",
            backgroundColor: "var(--bg-primary)",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Custom Center Icon */}
          <img src={BottomLogo} alt="center-icon"  />
        </Box>
      </Box>

      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
        sx={{ backgroundColor: "transparent", flexGrow: 1 }}
      >
        <BottomNavigationAction
          onClick={() => {
            setMobileViewModeKeepOpen("messaging");
          }}
          icon={
            <IconWrapper label="Messaging" color="rgba(250, 250, 250, 0.5)">
              <MessagingIcon color={hasUnreadDirects ? "var(--unread)" :"rgba(250, 250, 250, 0.5)"} />
            </IconWrapper>
          }
          sx={{
            color: value === 2 ? "white" : "gray",
            paddingLeft: "55px",
            paddingRight: "10px",
          }}
        />
        <BottomNavigationAction
          onClick={() => {
            chrome.tabs.create({ url: "https://www.qort.trade"});
          }}
          icon={
            <IconWrapper label="Trading" color="rgba(250, 250, 250, 0.5)">
              <TradingIcon color="rgba(250, 250, 250, 0.5)" />
            </IconWrapper>
          }
          sx={{ color: value === 3 ? "white" : "gray", padding: "0px 10px" }}
        />
      </BottomNavigation>
    </Box>
  );
};