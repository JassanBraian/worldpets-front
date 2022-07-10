import { useState, useRef, useContext, useEffect } from "react";
import '../css/entities/publication/comments.css'
import "../css/entities/publication/SingleProduct.css"
import CommentList from "../components/entities/publication/SinglePage/CommentList";
import PublicationContext from "../context/publication/PublicationContext";

export default function SinglePublication() {

  const { publication, getPublication } = useContext(PublicationContext);

  const initialValues = {
    _id: 0,
    title: "",
    photos: [{ url: "", position: 0 }],
    ubication: "",
    description: "",
    category: "", /* condition */
  }
  const [publiData, setPubliData] = useState(initialValues);
  const { title, photos, ubication, description, category } = publiData;

  const [currentImg, setCurrentImg] = useState("http://flogfotos.miarroba.st/5/0/6/5779506/822.jpg");
  const myRef = useRef();

  useEffect(() => {
    getPublication("62c5e6abb4ef5f01a437d2b0");
  }, []);

  useEffect(() => {
    setPubliData(publication);
  }, [publication]);

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

            <div className="thumb" ref={myRef}>
              {/* {photos.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  alt=""
                  onClick={() => setCurrentImg(item.img)}
                />
              ))} */}
            </div>
            <button className="cart ">
              Seguir publicacion
            </button>
          </div>
        </div>
      </div>
      <div>
        <CommentList /> {/* Paso el id para que solo los usuarios que esten conectados puedan dejar un comentario. El id provendria desde el backend desde .windows o API req . En este caso paso el currentUserId estadico para ser comparado con el userId del comentario*/}
      </div>
    </>
  )
}
