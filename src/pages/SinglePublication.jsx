import { useState, useRef, useContext, useEffect } from "react";
import '../css/entities/publication/comments.css'
import "../css/entities/publication/SingleProduct.css"
import CommentList from "../components/entities/publication/SinglePage/CommentList";
import PublicationContext from "../context/publication/PublicationContext";
import { getDownloadURL, ref, listAll } from '@firebase/storage';
import {storage} from '../firebase/FireBaseConfig'
import Spinner from "../components/common/spinner/Spinner";
import FavoriteContext from "../context/favorites/FavoriteContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons'



export default function SinglePublication(props) {

  const { publication, getPublication } = useContext(PublicationContext);
  const [images3, setImages3] = useState([])
  const [loading, setLoading] = useState(false);

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
  const [currentImg, setCurrentImg] = useState(images3[0]);
  const {addToFavorites, removeFromFavorites, isFavorite} = useContext(FavoriteContext);

  const myRef = useRef();

  //---------------------------Favourites

  const onToggleFavorite = ()=>{
    if(isFavorite(1234, props.postId)){
      removeFromFavorites(1234, props.postId)//traer el user id del usuario logueado del userContext
    } else{
      addToFavorites(1234, props.postId)//traer el user id del usuario logueado del userContext
    }
  };

  //--------------------------------------------------

  //---------------------------Single Publication Photos

  const getImages = async (publicationId) => {
    try {
      setLoading(true)
      const imagesRef = ref(storage, `id1`); // En 'id1' iria publicationId
     const response = await listAll(imagesRef)
     const res = []
         for(let item of response.items){
           const url = await getDownloadURL(item);
/*            console.log(url); */
           res.push(url)
         }
         setImages3(res)
         setCurrentImg(res[0])
         setLoading(false)
    } catch (error) {
      console.log(error)
    }
  };
    useEffect(()=>{
      getImages()
    },[])
//-----------------------------------------------------------
  
useEffect(() => {
    getPublication("62c5e6abb4ef5f01a437d2b0"); //Id tiene que ser dinamico
  }, []);

  useEffect(() => {
    setPubliData(publication);
  }, [publication]);

  if(loading){
    return <Spinner />
  }


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
               {images3.map((item, index) => (
              <img
                src={item} 
                alt="" 
                key={index}
                onClick={() => setCurrentImg(item)}
                />
                ))}
            </div>
            <div className="d-flex justify-content-center fav-single-pub">
              {!isFavorite(1234, props.postId) ? 
              <button className="favouriteButton fav-single-pub-btn" onClick={onToggleFavorite}>
              <FontAwesomeIcon icon={faStar} />
                  Marcar como favorito
              </button>
              : <button className="submit-button" onClick={onToggleFavorite}>
              <FontAwesomeIcon icon={faTrashCan} />
                  Eliminar de mis favoritos
              </button>}
            </div>
          </div>
        </div>
      </div>
      <div>
        <CommentList /> {/* Paso el id para que solo los usuarios que esten conectados puedan dejar un comentario. El id provendria desde el backend desde .windows o API req . En este caso paso el currentUserId estadico para ser comparado con el userId del comentario*/}
      </div>
    </>
  )
}
