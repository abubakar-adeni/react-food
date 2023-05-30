import React from "react";
import "../styles/AddRecipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AddRecipe() {
  return (
    <div>
      <Navbar />
      <div className="container py-5 mb-5 animate__animated animate__slideInRight">
        <form action="" method="post">
          <div className="row py-3 justify-content-md-center">
            <div className="col-md-7 d-grid">
              <input className="form-control mb-3" type="file" id="formFile" />
              <input
                type="text"
                className="form-control mb-3"
                name="title"
                id="title"
                placeholder="Title"
              />
              <textarea
                className="form-control mb-3"
                name="ingredients"
                id="ingredients"
                cols="35"
                rows="5"
              >
                Ingredients :
              </textarea>
              <input
                type="text"
                className="form-control mb-3"
                name="video"
                id="video"
                placeholder="Video"
              />
              <div className="d-grid">
                <button
                  href="#"
                  type="submit"
                  className="btn message"
                  style={{ backgroundColor: "#efc81a", color: "#fff" }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddRecipe;
