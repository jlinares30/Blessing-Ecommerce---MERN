import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardService } from "../components/CardService";
import { mockServices } from '../mockData';

function ServicesPage() {

  const [services, setServices] = useState([]);
  
  // useEffect(() => {
  //   axios.get('http://localhost:3000/services')
  //     .then(response => {
  //       setServices(response.data);
  //     })
  //     .catch(error => {
  //         console.error("Error fetching services:", error);
  //       });
  //   }, []);
    useEffect(() => {
      setServices(mockServices);
    }, []);
    return (
      <> 
        <Header />
        <section id="services" className="bg-primary text-white py-5">
          <div className="container">
            <h2 className="text-center mb-4">Services</h2>
            <div className="row">
              {services.map(service => (
                <CardService key={service._id} service={service} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </>
  
  );
}

export default ServicesPage;
