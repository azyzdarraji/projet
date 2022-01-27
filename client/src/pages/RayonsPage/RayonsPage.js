import "./RayonsPage.css"
import pt from "../../images/petit dej.jpg"
import pate from "../../images/pate.jpg"
import pn from "../../images/produit de netyoage.jpg"
import el from "../../images/el.jpg"
import {useNavigate} from "react-router-dom"


function RayonsPage ()
{ 
  const navigate=useNavigate()
    return (
      
      <div className="containerRayonsPage"> 
       
        <form onClick={()=>navigate(`/user/rayons/productlist/${1}`)}>
        <div className="cardRayonsPage">
          <h3 className="titleRayonsPage"> Petit Dejeuner</h3>
          <div className="barRayonsPage">
            <div className="emptybarRayonsPage" />
            <div className="filledbarRayonsPage" />
          </div>
          <div className="circleRayonsPage">
              <img src ={pt} alt="petitdej"  />
          </div>
        </div>
        </form>
      

         {/* to={`/user/rayons/productlist/${2}`} */}

         <form onClick={()=>navigate(`/user/rayons/productlist/${2}`)}>

        <div className="cardRayonsPage">
          <h3 className="titleRayonsPage">Pâtes</h3>
          <div className="barRayonsPage">
            <div className="emptybarRayonsPage" />
            <div className="filledbarRayonsPage" />
          </div>
          <div className="circleRayonsPage">
            <img src ={pate} alt="pate" />
          </div>
        </div>
        </form>
        

       <form onClick={()=>navigate(`/user/rayons/productlist/${3}`)}>
        <div className="cardRayonsPage">
          <h3 className="titleRayonsPage">Produits de nettoyage </h3>
          <div className="barRayonsPage">
            <div className="emptybarRayonsPage" />
            <div className="filledbarRayonsPage" />
          </div>
          <div className="circleRayonsPage">
            <img src={pn} alt="produit de netoyage"  />
          </div>
        </div>
        </form>

      <form onClick={()=>navigate(`/user/rayons/productlist/${4}`)}>
        <div className="cardRayonsPage">
          <h3 className="titleRayonsPage"> Électroménager</h3>
          <div className="barRayonsPage">
            <div className="emptybarRayonsPage" />
            <div className="filledbarRayonsPage" />
          </div>
          <div className="circleRayonsPage">
          <img src={el} alt="electromenagerrayons" />
          </div>
        </div>
        </form>
      </div>
    )
}
export default RayonsPage