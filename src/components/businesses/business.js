export default function Business({ setCurrentBusiness, id, ...businessDetails  }) {

    const { businessName } = businessDetails;
    return (
        <>
            <div onClick={() => {setCurrentBusiness(id)}} className="business">
                <h1>{businessName}</h1>
            </div>
        </>
    )
}