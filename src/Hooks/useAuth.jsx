'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "@/firebase/firebase.init";
import { setCurrentUser, setLoading } from "@/Redux/Features/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(setLoading(true));

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      dispatch(setCurrentUser(currentUser));
    });

    // ✅ cleanup function
    return () => unsubscribe();
  }, [dispatch]);

  return { user, loading };
};
