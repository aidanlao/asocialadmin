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
  import { useAuth } from "./auth";
  import { db } from "../lib/firebase";
  import { useEffect, useState } from "react";
  export function useAddReward() {
    const [isAdding, setLoading] = useState(false);
    
    /**
     * { 
        businessDescription, 
        businesID, 
        rewardAddress, 
        rewardCategory, 
        rewardCode, 
        rewardCompany, 
        rewardCost, 
        rewardDescription, 
        rewardExpiryDuration, 
        rewardImage, 
        rewardLat, 
        rewardLon
    }
     */
    async function addReward(reward) {
        setLoading(true);

        console.log(reward);
        try {
            await setDoc(doc(db, "rewards", reward.rewardCode), reward)
        } catch (error) {
            console.log("Error: " + error);
            setLoading(false);
        } finally {
            console.log("done adding the reward");
            setLoading(false);
        }
    }

    return { addReward, isAdding }

  }

  export function useRewards(id) {

    const [isLoading, setLoading] = useState(false);
    const [rewards, setRewards] = useState();
    const { user, isLoading: userLoading, error } = useAuth();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const ref =  collection(db, "rewards");
            
            const collectionSnap = await getDoc(ref);
            setRewards(collectionSnap.data());
            setLoading(false);
        }
        if (!userLoading) {
          if (user) {
            
        console.log(userLoading);
              console.log("got the user now, it's " + user.username);
              fetchData();
          }
          else {
            
        console.log(userLoading);
              console.log("You are not logged in");
              setLoading(false);} // Not signed in
        }
    }, [userLoading]);

  
    return { rewards, isLoading };
  }