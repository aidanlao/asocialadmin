import { useEffect, useState } from "react";
import { useAuth } from "./auth";
import {
    arrayRemove,
    arrayUnion,
    collection,
    deleteDoc,
    doc,
    getDocs,
    orderBy,
    query,
    setDoc,
    getDoc,
    updateDoc,
    where,
  } from "firebase/firestore";
  import { auth, db } from "../lib/firebase";

export function useAdmins() {
    const [isLoading, setLoading] = useState(false);
    const [admins, setAdmins] = useState();
    const { user, isLoading: userLoading, error } = useAuth();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const ref =  collection(db, "admin");
            const collectionSnap = await getDocs(ref);
            // collectionSnap.forEach((doc) => {
            //     console.log(`${doc.data().rewardCode}`);
           
            //   });
            console.log(collectionSnap.docs);
            setAdmins(collectionSnap.docs);
            setLoading(false);
        }
        if (!userLoading) {
          if (user) {
             fetchData();
          }
          else {
            
              console.log("You are not logged in");
              setLoading(false);} // Not signed in
        }
    }, [userLoading]);

  
    return { admins, isLoading };
  }

export async function editUser(id, approved, onCompletion) {

    var message;
    try {

        await updateDoc(doc(db, "admin", id), {
            approved: approved,
        });
        message = "Successfully edited admin approval";
    } catch (error) {
        console.log("Error: " + error);
        
        message = error;
    } finally {
        onCompletion(message);
    }
}