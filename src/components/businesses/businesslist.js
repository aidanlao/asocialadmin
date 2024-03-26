import { useState } from "react";
import { useRewards } from "../../hooks/rewards"
import { useBusiness } from "../../hooks/rewards";
import { useEffect } from "react";
import Business from "./business";
export default function BusinessList({ currentBusiness, setCurrentBusiness }) {
    const { businesses, businessesLoading: isLoading} = useBusiness();
    let listItems;
    
    if (!isLoading) {
        listItems =  businesses?.map((business)=>{
            const data = business.data();
            var selected = "";
            business.id == currentBusiness?.businessID ? selected = "selected" : selected = "";
            return (
                <Business selected={selected} id={business.id} key={business.id} setCurrentBusiness={setCurrentBusiness} {...data}></Business>
          );})
    }
    
    if (isLoading) {
        return (<p>Loading...</p>)
    } else {
        return (<div className="businessList">{listItems}</div>)
    }

}