import { onAuthStateChanged } from 'firebase/auth';
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser, removeuser } from '../utils/UserSlice';
import { auth } from '../utils/Firebase';
import { signOut } from "firebase/auth";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user)
  
  const unsubscribe = useEffect(() =>{ 
    onAuthStateChanged(auth, (user) => {
     if (user) {
    const {uid, email, displayName} = user;
    dispatch(adduser({uid : uid, email: email, displayName : displayName}))
    navigate("/browse");
  } else {
  dispatch(removeuser())
  navigate("/")
  }
});
  return () => unsubscribe
 }, [])

 const handleSignOut = () =>{
  signOut(auth).then(() => { })
               .catch((error) => {
              navigate("/error");
    });
}

  return (
    <div className='w-full px-7 py-2 bg-black flex justify-between '>
      <img  className='w-44'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="logo"
       />
       { user && <button className="mx-7 my-4 p-2 bg-red-600 text-white rounded-xl"
                onClick={handleSignOut}
             >Sign out</button>}
    </div>
  )
}

export default Header;