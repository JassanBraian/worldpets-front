import { useState, useRef, useContext, useEffect } from "react";
import '../css/entities/publication/comments.css'
import "../css/entities/publication/SingleProduct.css"
import CommentList from "../components/entities/publication/SinglePage/CommentList";
import PublicationContext from "../context/publication/PublicationContext";
import { getDownloadURL, ref } from '@firebase/storage';
import {storage} from '../firebase/FireBaseConfig'


export default function SinglePublication() {

  const { publication, getPublication } = useContext(PublicationContext);
  const [image, setImage] = useState([])

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

/*   const [currentImg, setCurrentImg] = useState({}); */
  const myRef = useRef();

  const storageRef = ref(storage, '/userProfilePic');

  const getImage = async (bannerImage) => {
    const url = await storageRef.child(bannerImage).getDownloadURL();
    return url
  }

  useEffect(() => {
    getPublication("62c5e6abb4ef5f01a437d2b0");
  }, []);

  useEffect(() => {
    setPubliData(publication);
  }, [publication]);

  const imageRef = ref(storage, `id1/822.jpg`);
  console.log(imageRef)

  useEffect(() => {
    getDownloadURL(imageRef)
      .then((url) => {
        setImage([url])
      })
  }, [])



  return (
    <>
      <div className="app">

        <div className="details">
          <div className="big-img">
            <img src={image} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{title}</h2>
              <p>{ubication}</p>
              <span>{category}</span>
            </div>

            <p>{description}</p>

            <div className="thumb" ref={myRef}>
            <img src={image} alt="" />
{/*               {photos.map((item, index) => (
                <img
                  key={index}
                  src={getImage(item.bannerImage)}
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
