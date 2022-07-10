import { useState, useRef } from "react";
import '../css/entities/publication/comments.css'
import "../css/entities/publication/SingleProduct.css"
import CommentList from "../components/entities/publication/SinglePage/CommentList";

export default function SingleProduct() {

  const InitialValues = {

    _id: "1",
    title: "Se perdio Roco",
    photos: [
      { img: "http://flogfotos.miarroba.st/5/0/6/5779506/822.jpg" },
      { img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Bianca_8_Meses.jpg" },
      { img: "https://sumedico.blob.core.windows.net/images/2020/08/19/perrosboxerblanco.jpg" },
      { img: "http://perros.mascotahogar.com/Imagenes/boxer-blanco.jpg" }
    ],
    ubication: "Yerba Buena, Tucumán",
    description:
      "Perdido desde dia sabado 17 de Junio cerca del Solar del Cerro. Lleva puesto su cadena como se ve en las fotos. Reacciona al llamado de Roco. Es muy cariñoso",
    category: "No Encontrado", /* condition */
  }

  const [publication, setPublication] = useState(InitialValues);

  /* const getPublication = useContext(AuthContext) */

  const { title, photos, ubication, description, category } = publication;

  const [currentImg, setCurrentImg] = useState(photos[0].img);

  /* const [currentImg, setCurrentImg] = useState('photos[0].img'); */

  const myRef = useRef();


  return (
    <>
      <div className="app">

        <div className="details">
          <div className="big-img">
            <img src={currentImg} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{title}</h2>
              <p>{ubication}</p>
              <span>{category}</span>
            </div>

            <p>{description}</p>

            <div className="thumb d-flex justify-content-center" ref={myRef}>
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
        <CommentList currentUserId="10" /> {/* Paso el id para que solo los usuarios que esten conectados puedan dejar un comentario. El id provendria desde el backend desde .windows o API req . En este caso paso el currentUserId estadico para ser comparado con el userId del comentario*/}
      </div>
    </>
  )
}
