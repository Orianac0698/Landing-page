import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	
    return (
        <div className="container-fluid mx-auto my-auto" style={{ backgroundColor: "black", minHeight: "100vh", padding: "20px" }}>
            <div className="my-4">
                <Navbar />
            </div>

            <div className="my-4">
                <Jumbotron />
            </div>

			<div className="my-4">
				<Card />
            </div>
          
			<div className="my-4">
				<Footer />
            </div>
          
                
        </div>
    );
};

export default Home;
