import { auth } from "@/firebase/firebase.init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
const initialState = {
  loading: false,
  error: null,
  user: null,
};
//create user thunk
export const createUser = createAsyncThunk(
  "authSlice/createUser",
  async ({ email, password, name }) => {
  
    const defaultPhoto = "https://i.ibb.co.com/JFdJJ5F6/ndefault.jpg";
    const res = await createUserWithEmailAndPassword(auth, email, password);
    // update user profile in firebase
    await updateProfile(res.user, {
      displayName: name,
      photoURL: defaultPhoto,
    });

    //user info save to db start here

    const result =await axios.post("http://localhost:5000/api/auth/register", {
      fullName: name,
      email,
      userRole: "guest",
    });
    console.log(result, "this is response from backend after registering user");

    // user info save to db end here

    return res.user;
  }
);
const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        console.log(
          action,
          "this is action in createUser fullfilled ",
          action.payload.user
        );
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action?.error?.message;
      });
  },
});

export const { setCurrentUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
