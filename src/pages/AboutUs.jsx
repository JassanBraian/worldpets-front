// import BraianPic from '../assets/img/members/BraianJassan.png'
// import JonathanPic from '../assets/img/members/JonathanArriazu.png'
// import LucianoPic from '../assets/img/members/LucianoColin.jpg'
// import ElisaPic from '../assets/img/members/ElisaSocolsky.jpeg'
import { useEffect } from 'react';
import { useState } from 'react';
import MemberCard from '../components/entities/members/MemberCard';
import '../css/entities/members/memberCard.css'

const membersList = [
    {
        name: 'Braian Jassán',
        picture: '../assets/img/members/BraianJassan.png',
        id:1

        
    },
    {
        name: 'Luciano Colin',
        // picture: {LucianoPic},
        id:2
    },
    {
        name: 'Jonathan Arriazu',
        // picture: {JonathanPic},
        id:3
    },
    {
        name: 'Elisa Socolsky',
        // picture:{ ElisaPic},
        id:4
    },
    {
        name: 'Emanuel Rojas',
        id:5
    },
    {
        name: 'Alexis Vale',
        id:6
    }
];


const AboutUs = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
      setMembers(membersList)
    }, [])
    
    console.log(members)
    return (
        <>
            <div className='page-title'>Nosotros</div>
            {members.map((member) => {
                return(
                    <div className="container container-fluid">
                    <MemberCard key={member.id} name={member.name} picture={member.picture}/>
                    </div>
                )
            })}
        </>
    );
};

export default AboutUs;