"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/firebase.init";
import {
  setCurrentUser,
  setLoading,
  signOutUser,
} from "@/Redux/Features/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const logOutHandler = () => {
    dispatch(signOutUser());
  };

  useEffect(() => {
    // dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser,'this is currentUser over here in useAuth')
      const serializableUserInfo={
        accessToken:currentUser.accessToken,
        displayName:currentUser.displayName,
        email:currentUser.email,
        photoURL:currentUser.photoURL
      }
      // dispatch(setCurrentUser(currentUser));
      dispatch(setCurrentUser(serializableUserInfo));
      dispatch(setLoading(false))
    });

    // cleanup function
    return () => unsubscribe();
  }, [dispatch]);
  const userInfo = {
    name: user?.displayName,
    email: user?.email,
    photoUrl: user?.photoURL,
  };

  console.log(userInfo,'from use auth')
  return { userInfo, loading, logOutHandler };
};
