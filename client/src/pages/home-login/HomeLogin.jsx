import "./homelogin.css"
import Cards from "../../components/Cards/Cards";
import Navbar from "../../components/NavbarLogin/NavbarLogin";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
export default function HomeLogin() {
  return (
    <>
      <Navbar/>
      <Carousel/>
      <div>
        <br/>
        <br/>
        <Cards/>
        <br/>
      </div>
      <Footer/>
    </>
  );
}