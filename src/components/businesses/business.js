export default function Business({ setCurrentBusiness, ...businessDetails  }) {

    const { businessName } = businessDetails;
    const { id } = businessDetails;
    return (
        <>
            <div onClick={() => {setCurrentBusiness({businessID: id, name: businessName})}} className="business">
                <h1>{businessName}</h1>
            </div>
        </>
    )
}