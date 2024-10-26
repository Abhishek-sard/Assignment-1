
import { useEffect, useState } from "react";
import UserData from './components/UserData' 
const API = "https://fakestoreapi.com/products/category/jewelery";

const App = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchUsers = async (url) => {
            try {
                const res = await fetch(url);
                if (!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                
                setUsers(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false); 
            }
        };
        fetchUsers(API);
    }, []);

    if (loading) return <p>Loading...</p>; 
    if (error) return <p>Error: {error}</p>; 

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                <UserData users={users} />
            </tbody>
        </table>
    );
};

export default App;
