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
    async function addReward(reward, onCompletion) {
        setLoading(true);

        console.log(reward);
        var message;
        try {
            const businessRewardRef = doc(db, "business", reward.businessID);
            await updateDoc(businessRewardRef, {
                [`rewards.${reward.rewardCode}`]: {
                    purchased: 0,
                    redeemed: 0
                }
            });
          // note there will be an error if the reward code is empty.
            await setDoc(doc(db, "rewards", reward.rewardCode), reward);
            message = "Successfully added the reward";
        } catch (error) {
            console.log("Error: " + error);
            message = error;
            setLoading(false);
        } finally {
            console.log("done adding the reward");
            setLoading(false);
            onCompletion(message);
        }
    }

    return { addReward, isAdding }

  }
  export async function deleteReward(reward, onCompletion) {

        var message;
        try {
          // note there will be an error if the reward code is empty.
            await deleteDoc(doc(db, "rewards", reward.rewardCode), reward)
            message = "Successfully deleted the reward";
        } catch (error) {
            console.log("Error: " + error);
            message = error;
        } finally {
            console.log("done deleting the reward");
            onCompletion(message);
        }
  }

  export function useEditReward() {
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
    async function editReward(reward, onCompletion) {
        setLoading(true);

        console.log(reward);
        var message;
        try {
    
            await updateDoc(doc(db, "rewards", reward.rewardCode), reward);
            message = "Successfully edited the reward";
        } catch (error) {
            console.log("Error: " + error);
            
            message = error;
            setLoading(false);
        } finally {
            onCompletion(message);
            setLoading(false);
        }
    }

    return { editReward, isAdding }

  }
  export function useRewards(businessid, updateFlag) {
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
            console.log(collectionSnap.docs);
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
    }, [userLoading, businessid, updateFlag]);

  
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