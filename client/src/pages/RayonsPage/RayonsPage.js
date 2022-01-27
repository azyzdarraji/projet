import "./RayonsPage.css"
import pt from "../../assets/petit dej.jpg"
import pate from "../../assets/pate.jpg"
import pn from "../../assets/produit de netyoage.jpg"
import el from "../../assets/el.jpg"
import {Link} from 'react-router-dom'


function RayonsPage ()
{
    return (
      <div className="container"> 
       <Link to='/user/rayons/petitdej'>
        <form>
        <div className="card">
          <h3 className="title"> Petit Dejeuner</h3>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
          <div className="circle">
              <img src ={pt} alt="petitdej"  />
          </div>
        </div>
        </form>
        </Link> 

        <Link to='/user/rayons/pate'>

        <form>
        <div className="card">
          <h3 className="title">Pâtes</h3>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
          <div className="circle">
            <img src ={pate} alt="pate" />
          </div>
        </div>
        </form>
        </Link>
        

        <Link to="/user/rayons/produitnettoyage">
        <form>
        <div className="card">
          <h3 className="title">Produits de nettoyage </h3>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
          <div className="circle">
            <img src={pn} alt="produit de netoyage"  />
          </div>
        </div>
        </form>
        </Link>

        <Link to="/user/rayons/electromenager">
        <form>
        <div className="card">
          <h3 className="title"> Électroménager</h3>
          <div className="bar">
            <div className="emptybar" />
            <div className="filledbar" />
          </div>
          <div className="circle">
          <img src={el} alt="electromenager" />
          </div>
        </div>
        </form>
        </Link>
      </div>
    )
}
export default RayonsPage