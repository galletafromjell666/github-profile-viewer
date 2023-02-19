import React from "react";

import ProfileCard from "../components/ProfileCard";
import SearchBar from "../components/SearchBar";
import Spinner from "../components/Spinner";
import useFetchGitAPI from "../hooks/useFetchGitAPI";
import Notification from '../components/Notification'
const ProfileViewer = () => {
  const { data, isLoading, error, fetchData } = useFetchGitAPI();
  let messageComponent;
  function handleChildSubmit(endpoint) {
    fetchData(endpoint);
  }

  if (!isLoading && !error && !data) {
    messageComponent = (
      <Notification
        mainText={"No data yet"}
        subText={
          "Once you perform a search, the associated GitHub profile will appear right here"
        }
        imgSrc={"./sad_computer.png"}
      />
    );
  }

  if (isLoading) {
    messageComponent = <Spinner />;
  }
  if (error) {
    messageComponent = <Notification
    mainText={"Oops! Something went wrong"}
    subText={
      "Please try again later or with a different username."
    }
    imgSrc={"./sad_file.png"}
  />;
  }

  if (data && !isLoading && !error) {
    messageComponent = <ProfileCard {...data} />;
  }
  return (
    <>
      <SearchBar onChildSubmit={handleChildSubmit} />
      {messageComponent}
    </>
  );
};

export default ProfileViewer;
