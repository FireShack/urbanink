import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db, googleAuth } from "../firebase/firebase-config";
import { fetchUserData } from "../helpers/fetchUserData";
import { fetchUserOrderId } from "../helpers/fetchUserOrderId";
import { types } from "../types/types";
import { AddMsg, removeMsg } from "./ui";

export const startLogin = () => {
  return (dispatch) => {
    signInWithPopup(auth, googleAuth)
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user;
        console.log(user);
        dispatch(loginUser(user.uid, user.displayName, user.photoURL));
        dispatch(removeMsg());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const loginMailPassword = (mail, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, mail, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        dispatch(loginUser(user.uid, user.displayName, user.photoURL));
        dispatch(removeMsg());
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          dispatch(AddMsg("Wrong Password"));
        }
        if (error.code === "auth/user-not-found") {
          dispatch(AddMsg("You're not registered"));
        }
      });
  };
};

export const startRegister = (mail, name, password) => {
  return (dispatch) => {
    createUserWithEmailAndPassword(auth, mail, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, { displayName: name });
        const user = userCredential.user;
        dispatch(loginUser(user.uid, user.displayName, user.photoURL));
        dispatch(saveUserData(user.uid));
        dispatch(removeMsg());
        console.log(userCredential);
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          dispatch(AddMsg("The email is already in use"));
        }
      });
  };
};

export const startLogOut = () => {
  return (dispatch, getState) => {
    const state = getState().auth;
    signOut(auth)
      .then(() => {
        dispatch(logoutUser());
        console.log("Logged out user", state);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const startLoadUserData = (uid) => {
  return async (dispatch) => {
    const orderAuth = await fetchUserData(uid);
    dispatch(loadUserData(orderAuth));
  };
};
export const startLoadUserOrderId = (uid) => {
  return async (dispatch) => {
    const orderAuthId = await fetchUserOrderId(uid);
    dispatch(loadUserOrderId(orderAuthId));
  };
};

export const saveUserData = (uid) => {
  return async () => {
    const docUsersAmount = await addDoc(
      collection(db, `users/all_users/user`),
      {
        user: uid,
      }
    );
    console.log(docUsersAmount.id);
  };
};

export const loadUserData = (orderAuth) => ({
  type: types.loadUserData,
  payload: orderAuth,
});
export const loadUserOrderId = (orderAuthId) => ({
  type: types.loadUserOrderId,
  payload: orderAuthId,
});

export const registerNewUser = (uid, name) => ({
  type: types.register,
  payload: { uid, name },
});

export const loginUser = (uid, name, photo) => ({
  type: types.login,
  payload: { uid, name, photo },
});

export const logoutUser = () => ({
  type: types.logout,
});
