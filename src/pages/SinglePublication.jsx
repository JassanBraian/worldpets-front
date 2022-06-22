import { useState, useRef } from "react";
import '../css/entities/publication/comments.css'
import "../css/entities/publication/SingleProduct.css"
import Comments from '../components/entities/publication/SinglePage/comments/Comments'

export default function SingleProduct() {

const InitialValues = {
  
    _id: "1",
    title: "Se perdio Roco",
    photos: [
        {img: "http://flogfotos.miarroba.st/5/0/6/5779506/822.jpg"},
        {img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Bianca_8_Meses.jpg"},
        {img: "https://sumedico.blob.core.windows.net/images/2020/08/19/perrosboxerblanco.jpg"},
        {img: "http://perros.mascotahogar.com/Imagenes/boxer-blanco.jpg"}
      ],
    ubication: "Yerba Buena, Tucumán",
    description:
        "Perdido desde dia sabado 17 de Junio cerca del Solar del Cerro. Lleva puesto su cadena como se ve en las fotos. Reacciona al llamado de Roco. Es muy cariñoso",
    category: "No Encontrado", /* condition */
  }

const [publication, setPublication] = useState(InitialValues);

/* const [index, setIndex] = useState(0); */

const {title, photos, ubication, description, category} = publication;

const [currentImg, setCurrentImg] = useState('http://flogfotos.miarroba.st/5/0/6/5779506/822.jpg');

const myRef = useRef();

/* useEffect(() => {
    myRef.current.children[index].className = "active";
}, []); */

/* const handleTab = (index) => {
    setIndex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
        images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
}; */

return (
<>
  <div className="app">
      
          <div className="details">
              <div className="big-img">
                <img src={currentImg} alt=""/>
              </div>

              <div className="box">
                  <div className="row">
                      <h2>{title}</h2>
                      <p>{ubication}</p>
                      <span>{category}</span>
                  </div>

                  <p>{description}</p>

                  <div className="thumb" ref={myRef}>
                      {photos.map((item, index) => (
                          <img
                              src={item.img}
                              alt=""
                              key={photos.index}
                              onClick={() => setCurrentImg(item.img)}
                             /*  onClick={() => handleTab(index)} */
                          />
                      ))}
                  </div>
                  <button className="cart ">
                      Seguir publicacion
                  </button>
              </div>
          </div>
  </div>
  <div>
    <Comments currentUserId="10"/> {/* Paso el id para que solo los usuarios que esten conectados puedan dejar un comentario. El id provendria desde el backend desde .windows o API req . En este caso paso el currentUserId estadico para ser comparado con el userId del comentario*/}
  </div>
</>
)
}
