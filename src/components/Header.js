import { onAuthStateChanged } from 'firebase/auth';
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adduser, removeuser } from '../utils/UserSlice';
import { auth } from '../utils/Firebase';
import { signOut } from "firebase/auth";
import { toggleGptSearchView } from '../utils/GptSlice';
import { SupportedLanguages } from '../utils/Constants';
import { changeLanguage } from '../utils/ConfigSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  
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

const handleGptSearchClick = () =>{
   dispatch(toggleGptSearchView());
}

const handleLanguage = (e) =>{
  dispatch(changeLanguage(e.target.value));
}

  return (
    <div className='w-full px-7 py-2 flex justify-normal'>
      <img  className='w-44'
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
           alt="logo"
       />     
       { user && (
        <div className='w-full flex justify-end'>
          {showGptSearch && (<select className='m-4 p-2 bg-slate-600 text-white cursor-pointer' onChange={handleLanguage}>
            {SupportedLanguages.map(lang => <option 
            key={lang.indentifier} value={lang.indentifier}>{lang.name}
            </option>)}
          </select>)}  
          <button className="mx-5 my-4 p-2 bg-red-600 text-white rounded-xl"
             onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "Search"}</button>
          <button className="mx-7 my-4 p-2 bg-red-600 text-white rounded-xl"
               onClick={handleSignOut}
             >Sign out</button>
             </div>
            )}
             </div>
  )}

export default Header;