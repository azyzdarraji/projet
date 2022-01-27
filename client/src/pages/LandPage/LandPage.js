import './LandPage.css'
import Footer from '../../components/Footer/Footer'
import LoginRegistre from '../../components/LoginRegistre/LoginRegistre'

function LandPage(){
return (
    <div className="landpage">
       <div className="content">
       <iframe width="560" height="315"
        src="https://www.youtube.com/embed/qWqV9Og-3L0"
        title="YouTube video player"
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>

       </iframe>
    <LoginRegistre />
       </div>
    <footer><Footer/></footer>

  </div>
)
}
export default LandPage


{/* <div className="cover">
      <h1>Discover what's out there.</h1>
      <h1>Make your Landpage Attractive</h1>
      <form className="flex-form">
        <label htmlFor="from">
          <i className="ion-location" />
        </label>
        <input type="search" placeholder="Where do you want to go?" />
        <input type="submit" defaultValue="Search" />
      </form>
    </div> */}