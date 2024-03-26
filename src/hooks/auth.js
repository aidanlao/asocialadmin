import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
  import { auth, db } from "../lib/firebase";
  import { useEffect, useState } from "react";
  import { LOGIN, PROTECTED } from "../lib/routes";
  import { useNavigate } from "react-router-dom";
  import { setDoc, doc, getDoc } from "firebase/firestore";

  export function useAuth() {
    const [authUser, authLoading, error] = useAuthState(auth);
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        setLoading(true);
        const ref = doc(db, "admin", authUser.uid);
        const docSnap = await getDoc(ref);
        setUser(docSnap.data());
        setLoading(false);
      }
  
      if (!authLoading) {
        if (authUser) {
            fetchData();
        }
        else {
            console.log("You are not logged in");
            setLoading(false);} // Not signed in
      }
    }, [authLoading]);
  
    return { user, isLoading, error };
  }
  
  export function useLogin() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    async function login({ email, password, redirectTo = PROTECTED }) {
      setLoading(true);
  
      try {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("sign in success");
        navigate(redirectTo);
        
      } catch (error) {
        console.log("errorr: " + error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  
    return { login, isLoading };
  }
  
  export function useRegister() {
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    async function register({
      username,
      email,
      password,
      redirectTo = PROTECTED,
    }) {
      setLoading(true);
  
      const usernameExists = false;
    // TODO: Make it so that everyone can access the list of usernames but not everything else (firebase rule)
      if (usernameExists) {
        console.log("username already exists");
        setLoading(false);
      } else {
        try {
          console.log(auth);
          const res = await createUserWithEmailAndPassword(auth, email, password);
          console.log(res);
          await setDoc(doc(db, "admin", res.user.uid), {
            id: res.user.uid,
            approved: false,
            email: email,
            username: username,
            date: Date.now(),
          });
  
  
          navigate(redirectTo);
        } catch (error) {
            console.log("error: " + error);
        } finally {
          setLoading(false);
        }
      }
    }
  
    return { register, isLoading };
  }
  
  export function useLogout() {
    const [signOut, isLoading, error] = useSignOut(auth);
    const navigate = useNavigate();
  
    async function logout() {
      if (await signOut()) {
        console.log("Successfully signed out.");
        navigate(LOGIN);
      } // else: show error [signOut() returns false if failed]
    }
  
    return { logout, isLoading };
  }