import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import {AppBar,Toolbar,Box} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function Navbar({ searchData }) {
  return (
    <AppBar position="static" style={{backgroundColor:"#1a1a1a",padding:"8px 16px"}}>
      <Toolbar style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    {/* <nav className={styles.navbar}>  */}
      <Link to="/" style={{textDecoration:"none"}}>
        <img
           src={require("../../assets/group1.png")}
           alt="QTify Logo"
           className={styles.logo}
           />
      </Link>
      <Box 
       style={{
        width: "568px",
        height: "48px",
        top: "13px",
        left: "436px",
        gap: "0px",
        bordeRadius: "0px 8px 8px 0px",
        border: "1px 0px 0px 0px",
        opacity: "0px",

       }}
       >
        <SearchIcon style= {{color:"#121212",width: "20px",height: "20px",top: "27px", left: "961px", gap: "0px", opacity: "0px",}}/>
      <Search
        placeholder="Search a song of your choice"
        onChange={(event)=>searchData&&searchData(event.target.value)}
        searchData={searchData}
        style={{
            marginLeft:"8px",
            flex:1,
            backgroundColor:"transparent",
            border:"none",
            color:"#fff",
        }}
      />
      </Box>
      <Button 
      style={{
        width: "Hug (170px)px",
        height: "Hug (47px)px",
        top: "13px",
        left: "1238px",
        padding: "10px 16px 10px 16px",
        gap: "10px",
        borderRadius: "12px 0px 0px 0px",
        border: "1px 0px 0px 0px",
        opacity: "0px",
      }}
      >
            Give Feedback
      </Button>
      {/* </nav>  */}
      </Toolbar>
    </AppBar> 
  );
}

export default Navbar;
