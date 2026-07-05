import React from "react";
import Sideber from "../components/Sideber";
import Grid from "@mui/material/Grid";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import SearchBar from "../components/SearchBar";
import TitleList from "../components/TitleList";
import Image from "../components/Image";
import Profile2 from "../assets/profile2.jpg";
import MakeProfile from "../components/MakeProfile";
import GroupList from "../layouts/GroupList";
import FriendList from "../layouts/FriendList";
import UserList from "../layouts/UserList";
import FriendRequestList from "../layouts/FriendRequestList";
import MyGroupList from "../layouts/MyGroupList";
import BlockList from "../layouts/BlockList";

const Home = () => {
  return (
    <div className="py-4 px-4 w-full h-screen flex flex-col gap-4 justify-between ">
      <div className="flex-1">
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid size={4}>
            <GroupList />
          </Grid>
          <Grid size={4}>
            <FriendList />
          </Grid>
          <Grid size={4}>
            <UserList />
          </Grid>
        </Grid>
      </div>

      <div className="flex-1">
        <Grid container spacing={2} sx={{height: '100%'}}>
          <Grid size={4}>
            <FriendRequestList />
          </Grid>
          <Grid size={4}>
            <MyGroupList />
          </Grid>
          <Grid size={4}>
            <BlockList />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
