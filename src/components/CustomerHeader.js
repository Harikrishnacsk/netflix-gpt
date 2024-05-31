import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const CustomerHeader = () =>{
    const navigate = useNavigate();

    

    return (
        <div className="w-screen flex justify-between ">
         <img className="w-44"
         src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="logo"
       />
       <div>
        
       </div>
        </div>
    )
}

export default CustomerHeader;