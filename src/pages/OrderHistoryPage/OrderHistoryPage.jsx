import checkToken from "../../utilities/user-service"

export default function OrderHistoryPage() {
    
    async function handleCheckToken() {
        const expDate = await checkToken();
    }
    
    return (
        <>
        <h1>OrderHistoryPage</h1>
        <button onClick={ handleCheckToken } >Check When My Login Expires</button>
        </>
    );
};