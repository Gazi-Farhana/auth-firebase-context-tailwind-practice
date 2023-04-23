import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const Home = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className='text-red-400'>
            <h2>This is home {user && <span>{user.displayName}</span>}</h2>
        </div>
    );
};

export default Home;