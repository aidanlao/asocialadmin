import { useState } from "react";
import BusinessList from "../businesses/businesslist";

export default function BusinessManager() {
    const [currentBusiness, setCurrentBusiness] = useState({});
    return (
        <>
            <BusinessList currentBusiness={currentBusiness} setCurrentBusiness={setCurrentBusiness} />
        </>
    )
}