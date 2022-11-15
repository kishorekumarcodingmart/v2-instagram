import React from "react";
import Index from "./Routes/Index";
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { addDetails } from './Features/profileDetails'
import { addUserDetails } from './Features/postStories'
import * as postStories from "./Utils/PostStories";

function App() {
  const dispatch = useDispatch()

  dispatch(addDetails({
    userName: "mrkishorekumar",
    name: "M R Kishore Kumar",
    profilePhoto: "https://instagram-clone-mrkishorekumar.netlify.app/img.png",
    userCaptions : "Just because you're awake doesn't mean you should stop dreaming."
  }))

  dispatch(addUserDetails({
    userPost : [...postStories.userPost],
    userStories : [...postStories.userStories],
    userTaggedPost : [...postStories.userTaggedPost],
    userSaved : [...postStories.userSaved],
    feedPost : [...postStories.feedPost],
    feedStories : [...postStories.feedStories]
  }))

  const theme = useSelector((state)=>state.theme.data.dark)
  


  return (
    <div className={theme?"drak-body":""}>
      <Index />
    </div>
  );
}

export default App;
