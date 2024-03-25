export default function Business({ selected, setCurrentBusiness, ...businessDetails  }) {

    const { businessName } = businessDetails;
    const { id } = businessDetails;
    
    return (
        <>
            <div className={"business " + `${selected}`} onClick={() => {setCurrentBusiness({businessID: id, name: businessName})}}>
                <h1>{businessName}</h1>
            </div>
        </>
    )
}