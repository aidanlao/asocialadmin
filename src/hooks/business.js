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
export function useAddBusiness() {
    const [isAdding, setLoading] = useState(false);

    async function addBusiness(business, onCompletion) {
        setLoading(true);

        var message;
        try {
          // note there will be an error if the reward code is empty.
            await setDoc(doc(db, "business", business.businessID), business);
            message = "Successfully added the business";
        } catch (error) {
            console.log("Error: " + error);
            message = error;
            setLoading(false);
        } finally {
            console.log("done adding the business");
            setLoading(false);
            onCompletion(message);
        }
    }

    return { addBusiness, isAdding }

  }