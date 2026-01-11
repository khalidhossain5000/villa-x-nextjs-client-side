import { auth } from "@/firebase/firebase.init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createUserWithEmailAndPassword } from "firebase/auth";
const initialState = {
  loading: false,
  error: null,
  user: null,
};
//create user thunk
export const createUser = createAsyncThunk(
  "authSlice/createUser",
  async ({ email, password }) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
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
