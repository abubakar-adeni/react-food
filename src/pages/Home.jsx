import "../styles/Home.css";
import "animate.css";
import Navbar from "../components/navbar";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/footer";
import PopularMenu from "../components/Popular-menu";
import { Link } from "react-router-dom";
import foodList from "../menu.json";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollProgress />  
      <div className="right-layer animate__animated animate__fadeIn"></div>

      <div className="container mt-4" style={{ height: "100vh" }}>
        <div className="row flex-column-reverse gap-5 flex-lg-row py-5">
          <div className="col-8 col-lg-4 align-self-center animate__animated animate__fadeInLeft">
            <h1
              className="text-center text-lg-start fw-bolder fs-1 mb-4"
              style={{ color: "#2e266f" }}
            >
              Discover Recipe & Delicious Food
            </h1>
            <form action="#" method="post">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Restaurant, Food"
              />
            </form>
          </div>
          <div className="col text-center text-lg-end animate__animated animate__fadeInRight">
            <img
              src="./img/Rectangle-313.png"
              alt="food"
              style={{ width: "55%" }}
            />
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          Popular For You!
        </p>
      </div>

      <div className="container">
        <div className="row flex-column-reverse gap-5 flex-lg-row py-5">
          <div className="col text-center text-lg-start animate__animated animate__fadeInLeft">
            <img src="./img/Group-1.png" alt="food" style={{ width: "80%" }} />
          </div>
          <div className="col-8 col-lg-4 d-flex flex-column d-lg-block justify-content-center align-self-center animate__animated animate__fadeInRight">
            <h2
              className="text-center text-lg-start fs-1"
              style={{ color: "#3f3a3a" }}
            >
              Roti Bakar Asgar (Garut)
            </h2>
            <hr className="w-25 opacity-100" />
            <p
              style={{ color: "#3f3a3a" }}
              className="text-center text-lg-start"
            >
              Roti Bakar Asgar ! Rasakan kelezatan roti bakar kami yang gurih dan renyah,
               dengan berbagai pilihan topping yang menggoda selera!
            </p>
            <a
              href="./details/Roti-Bakar-Asgar"
              className="btn message btn-lg"
              style={{ backgroundColor: "#efc81a", color: "#fff" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div
        className="container d-flex align-items-center my-5 animate__animated animate__flipInX"
        style={{ height: "80px" }}
      >
        <div
          className="vr"
          style={{ width: "15px", backgroundColor: "#efc81a", opacity: "100%" }}
        ></div>
        <p className="m-0 ms-3 fs-1 fw-semibold" style={{ color: "#3f3a3a" }}>
          New Recipe
        </p>
        <div className="left-layer"></div>
      </div>

      <div className="container">
        <div className="row flex-column-reverse gap-5 flex-lg-row py-5">
          <div className="col text-center text-lg-start animate__animated animate__fadeInLeft">
            <img
              src="./img/burgerking.png"
              alt="food"
              style={{ width: "80%" }}
            />
          </div>
          <div className="col-8 col-lg-4 d-flex flex-column d-lg-block justify-content-center align-self-center animate__animated animate__fadeInRight">
            <h2
              className="text-center text-lg-start fs-1"
              style={{ color: "#3f3a3a" }}
            >
              Burger King (United State)
            </h2>
            <hr className="w-25 opacity-100" />
            <p
              style={{ color: "#3f3a3a" }}
              className="text-center text-lg-start"
            >
              Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a
              hurry? That's right!
            </p>
            <a
              href="./details/Burger-King"
              className="btn message btn-lg"
              style={{ backgroundColor: "#efc81a", color: "#fff" }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

       <section id="popular-recipe">
        <div className="container">
          <h2 className="mb-5 subtitle">Popular Recipe</h2>

          <div className="row">
            {foodList.menu.map((item) => (
              <PopularMenu title={item?.title} image={item?.image} />
            ))}
          </div>
        </div>
      </section>
            <Footer />
    </div>
  );
}

export default App;
