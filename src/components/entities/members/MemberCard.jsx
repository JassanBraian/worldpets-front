// import '../../../css/entities/members/memberCard.css'
// import BraianPic from '../assets/img/members/BraianJassan.png'
// import JonathanPic from '../assets/img/members/JonathanArriazu.png'
// import LucianoPic from '../assets/img/members/LucianoColin.jpg'
// import ElisaPic from '../assets/img/members/ElisaSocolsky.jpeg'

const MemberCard = ({name, picture}) => {
  return (
   
    <div className="member-card" > 
    <div className="img-container">
        <img src={picture} alt ='member-pic'></img>
        </div>
        <div>
            <div className='name'>{name}</div>
            <p>Descripcion</p>
        </div>
    </div>
    
   
   
  )
}

export default MemberCard