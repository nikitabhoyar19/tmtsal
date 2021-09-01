import React, {useState, useEffect} from "react";
import './ClientCard.css';
import Slider from "react-slick";
import {db} from '../../firebase';

function ClientCard() {
    const[Clients, setClients] = useState(null);

    useEffect(() => {
      db.collection("Clients")
      .get()
      .then((docs) => {
        const Clients= [];
        docs.forEach((doc) => {
          Clients.push(doc.data());

        });
        setClients(Clients);
      })
    }, []);
    
  // for sliding
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
                // autoplay
                autoplay: true,
                autoplaySpeed: 3000,
                cssEase: "linear",
        
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };

      return (
      <>
      <div className="Pro_Section">
      <Slider {...settings}>
        {Clients ? Clients.map((client) => (
                  <div>
                  <div className="Client_card">
                          <p>{client.description}
                            <br />
                            <p style={{marginBottom: "0px", color: "#FFE661"}}> -{client.client_name}</p>
                          <small>
                          <i class='bx bxs-star'></i>
                          <i class='bx bxs-star'></i>
                          <i class='bx bxs-star'></i>
                          <i class='bx bxs-star'></i>
                          <i class='bx bxs-star'></i>
                          </small>
                          </p>
                      </div>
                  </div>
        )): null}

        </Slider>
        </div>
      </>
 );
}

export default ClientCard;
