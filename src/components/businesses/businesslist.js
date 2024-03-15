import { useState } from "react";
import { useRewards } from "../../hooks/rewards"
import { useBusiness } from "../../hooks/rewards";
import { useEffect } from "react";
import Business from "./business";
export default function BusinessList({ setCurrentBusiness }) {
    const { businesses, businessesLoading: isLoading} = useBusiness();
    let listItems;
    if (!isLoading) {
        listItems =  businesses?.map((business)=>{
            const data = business.data();
            return (
                <Business id={business.id} key={business.id} setCurrentBusiness={setCurrentBusiness} {...data}></Business>
          );})
    }
    
    if (isLoading) {
        return (<p>Loading...</p>)
    } else {
        return (<div className="businessList">{listItems}</div>)
    }

}