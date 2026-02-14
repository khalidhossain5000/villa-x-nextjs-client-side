"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";

import { auth } from "@/firebase/firebase.init";
import {
  setCurrentUser,
  setLoading,
  signOutUser,
} from "@/Redux/Features/authSlice";
import axios from "axios";
import useAxiosSecure from "./useAxiosSecure";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);
  const logOutHandler = () => {
    dispatch(signOutUser());
  };
  const userAuththis = getAuth();
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    // dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log(currentUser,'this is currentUser over here in useAuth')
      if (currentUser) {
        const serializableUserInfo = {
          accessToken: currentUser.accessToken,
          displayName: currentUser.displayName,
          email: currentUser.email,
          photoURL: currentUser.photoURL,
        };
        dispatch(setCurrentUser(serializableUserInfo));
      } else {
        dispatch(setCurrentUser(null));
      }

      dispatch(setLoading(false));
    });

    // cleanup function
    return () => unsubscribe();
  }, [dispatch]);
  const userInfo = {
    name: user?.displayName || null,
    email: user?.email || null,
    photoUrl: user?.photoURL || null,
  };
  //upate profile
  const updateFirebaseUserProfile = async (name, photoUrl) => {
    try {
      await updateProfile(userAuththis.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });

      const res = await axiosSecure.patch("/api/auth/update-name", { name });

      console.log(res, "this is profile udpated data");
    } catch (error) {
      console.log(error);
    }
  };
  console.log(userInfo,'from use auth',loading)
  return { userInfo, loading, logOutHandler, updateFirebaseUserProfile };
};
