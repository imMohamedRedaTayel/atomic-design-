import Image from 'next/image'
import React from 'react'

const UserImg = ({inTable,img}) => {
  return (
    <Image style={{borderRadius:"50%"}} src={`${img ? img :'/images/user/1.png' }`} alt="user" width={!inTable ?40 : 35} height={!inTable ?40 : 35}/>
  )
}

export default UserImg