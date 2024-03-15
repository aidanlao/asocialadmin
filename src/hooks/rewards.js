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

  export function useRewards(businessid) {
    console.log('useRewards, ' + businessid);
    const [isLoading, setLoading] = useState(false);
    const [rewards, setRewards] = useState();
    const { user, isLoading: userLoading, error } = useAuth();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const ref =  collection(db, "rewards");
            const q = query(ref, where("businessID", "==", businessid));
            const collectionSnap = await getDocs(q);
            // collectionSnap.forEach((doc) => {
            //     console.log(`${doc.data().rewardCode}`);
           
            //   });
            setRewards(collectionSnap.docs);
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
    }, [userLoading, businessid]);

  
    return { rewards, isLoading };
  }


  
  export function useBusiness() {

    const [isLoading, setLoading] = useState(false);
    const [businesses, setBusinesses] = useState();
    const { user, isLoading: userLoading, error } = useAuth();
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const ref =  collection(db, "business");
            const collectionSnap = await getDocs(ref);
            // collectionSnap.forEach((doc) => {
            //     console.log(`${doc.data().rewardCode}`);
           
            //   });
            setBusinesses(collectionSnap.docs);
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

  
    return { businesses, isLoading };
  }