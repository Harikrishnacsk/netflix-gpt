import React from 'react';
import lang from '../utils/Language';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.lang)
  return (
    <div className='flex justify-center pt-16'>
        <form className='p-4 bg-black w-1/2 grid grid-cols-12 rounded-xl'>
            <input  className='col-span-9 p-2' placeholder={lang[langKey].placeHolder}/>
            <button className='col-span-3 p-2 mx-2 bg-orange-700 rounded-xl'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar