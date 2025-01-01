import { useParams } from "react-router-dom"

const User = () => {
    const { userID } = useParams();
    
    
    
    const users = [
        { id: 1, name: "Lucky" },
        { id: 2, name: "Nikhil" },
        { id: 3, name: "Nikhilkumar" }
    ];

    

    
    const user = users.find(user => user.id === parseInt(userID));

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                {user ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">User: {user.name}</h2>
                    </div>
                ) : (
                    <div className="text-2xl font-semibold">
                        <div>User not found</div>
                        <div>Enter only <span className="text-red-500 border-b-4 border-green-500 ">User ID</span></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default User;
