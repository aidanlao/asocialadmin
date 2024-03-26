import User from "./user";
import { useAdmins } from "../../hooks/users";
import { useEffect, useState } from "react";

export default function AdminManager() {
    
    const { admins, isLoading } = useAdmins();

    let listItems;
    
    if (!isLoading) {
        listItems =  admins?.map((admin)=>{
            const data = admin.data();
            
            return (
                <User key={data.id}{...data}></User>
          );})
    }

    return (
        <>
            <div className="userList">{listItems}</div>
        
        </>
    )
}