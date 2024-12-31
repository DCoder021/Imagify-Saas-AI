import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const GenerateBtn = () => {

const {user, setShowLogin} = useContext(AppContext)
const navigate = useNavigate()

const onClickHandler = ()=>{
    if(user){
      navigate('/result')
    }else{
      setShowLogin(true)
    }
}

  return (
    <motion.div
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 1}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>See the magic, Try now</h1>

        <button className='inline-flex gap-2 px-12 py-3 text-white bg-black w-auto
        m-auto items-center rounded-full hover:scale-105 transition-all duration-300 cursor-pointer'
        onClick={onClickHandler}
        >Generate Images <img className='h-6' src={assets.star_group} alt="" />
        </button>   
    </motion.div>
  )
}

export default GenerateBtn

