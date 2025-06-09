import React, { useContext, useEffect, useState } from 'react'
import TeamMember from './TeamMember'
import { ShopContext } from '../context/ShopContext'


const TeamMemberCards = () => {

  const {teamMembers} = useContext(ShopContext);
  const  [teamMembersList, setTeamMembersList] = useState([]);


  useEffect(()=>{
    setTeamMembersList(teamMembers.slice(0,3))
  },[]);



  return (
    <div className="container mx-auto px-4 py-8 ">
      <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembersList.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  )
}

export default TeamMemberCards