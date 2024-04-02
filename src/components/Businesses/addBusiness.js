export default function AddBusiness() {

    const [inputs, setInputs] = useState({});

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({ values, [name]: value }));
        
    }
    function onCompletion(message) {
        console.log("complete " + message);
        var p = document.createElement("p");
        p.className = "dissapear";
        document.getElementById("message")?.remove();
        p.id = "message";
        p.innerHTML = message;
        document.getElementById("addRewardForm").appendChild(p);
        triggerUpdate({});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        let formObject = Object.fromEntries(data.entries());
        // change this to add business
        addReward({ ...formObject}, onCompletion);
    }
    return (
<>
        <div className="businessForm">
            <h1>Add a business</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Business Name</label>
                    <input 
                    type="text"
                    name="businessName"
                    value={inputs.businessName} 
                    onChange={handleChange} />
                </div>

            </form>
        </div>
</>
    );
}