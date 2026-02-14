import { auth } from "@/firebase/firebase.init";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
const initialState = {
  loading: true,
  error: null,
  user: null,
};
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

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

    // user info save to db end here

    // return res.user;
        return getSafeUser(res.user);
  }
);





//login user thunk will be added here
export const loginUser=createAsyncThunk(
    'authSlice/loginUser',
    async({email,password})=>{
        const res=await signInWithEmailAndPassword(auth,email,password)

        return res.user
    }
)

//social login start

//GOOGLE LOGIN STARTS HERE
export const googleSignIn=createAsyncThunk(
  'authSlice/googleSignIn',
  async()=>{
    const res= await signInWithPopup(auth,googleProvider)
    // console.log(res,'this is from gogle lign')
    //user info save to db start here

    const result =await axios.post("http://localhost:5000/api/auth/register", {
      fullName: res.user.displayName,
      email: res.user.email,
      userRole: "guest",
    });
    // console.log(result, "this is response from backend after registering user");

    // user info save to db end here

    // return res.user;
        return getSafeUser(res.user);
  }
  
)
//GITHUB   LOGIN STARTS HERE
export const githubSignIn=createAsyncThunk(
  'authSlice/githubSignIn',
  async()=>{
    return await signInWithPopup(auth,githubProvider)
  }
)

//signout user
export const signOutUser=createAsyncThunk(
  'authSlice/signOut',
  async()=>{
    return signOut(auth)
  }
)


const getSafeUser = (user) => {
  if (!user) return null;
  // console.log(user,'this is user inside get safe user')
  return {
    accessToken: user.accessToken,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
  };
};



const authSlice = createSlice({
  name: "AuthSlice",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      // console.log(action, "this is action.payload in setCurrentUser",action.payload,state);
      // state.user = action.payload;
      state.user = getSafeUser(action.payload);
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
        // console.log(
        //   action,
        //   "this is action in createUser fullfilled ",
        //   action.payload
        // );
        state.loading = false;
        // state.user = action.payload;
        state.user = getSafeUser(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.error = action?.error?.message;
      })
      //login user
      .addCase(loginUser.pending,(state)=>{
        state.loading=true;
      })
      .addCase(loginUser.fulfilled,(state,action)=>{
        state.loading=false;
        // state.user=action.payload.user;
        state.user=getSafeUser(action.payload);
      })
      .addCase(loginUser.rejected,(state,action)=>{
        state.error=action?.error?.message;
      })

      //google login
      .addCase(googleSignIn.pending,(state)=>{
        state.loading=true
      })
       .addCase(googleSignIn.fulfilled,(state,action)=>{
        state.loading=false;
        // console.log(action,'this is inside google sign in fullfilled inside authslice',action.payload)
        // state.user=action.payload.user;
        state.user=getSafeUser(action.payload);
      })
      .addCase(googleSignIn.rejected,(state,action)=>{
        state.error=action?.error?.message;
      }) 
      //github login
      .addCase(githubSignIn.pending,(state)=>{
        state.loading=true
      })
       .addCase(githubSignIn.fulfilled,(state,action)=>{
        state.loading=false;
        // console.log(action,'this is inside github sign in fullfilled inside authslice')
        // state.user=action.payload.user;
        state.user=getSafeUser(action.payload);
      })
      .addCase(githubSignIn.rejected,(state,action)=>{
        state.error=action?.error?.message;
      })

      //signout user
      .addCase(signOutUser.pending,(state)=>{
        state.loading=true
      })
      .addCase(signOutUser.fulfilled,(state)=>{
        state.loading=false;
        state.user=null;
      })
      .addCase(signOutUser.rejected,(state,action)=>{
        state.error=action?.error?.message;
      })
  },
});

export const { setCurrentUser, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
