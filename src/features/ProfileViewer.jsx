import React, { useState } from "react";
import NoData from "../components/NoData";
import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import useFetchGitAPI from "../hooks/useFetchGitAPI";
const ProfileViewer = () => {
  const { data, loading, error, fetchData } = useFetchGitAPI();

  function handleChildSubmit(endpoint) {
    fetchData(endpoint);
  }

  if(loading){
    return <h1>Loading...</h1>
  }
  if(error){
    return <h1>Error :c</h1>
  }

  return (
    <>
      <SearchBar onChildSubmit={handleChildSubmit} />
      {data ? <ProfileCard {...data} />: <NoData/>}
      
    </>
  );
};

export default ProfileViewer;
