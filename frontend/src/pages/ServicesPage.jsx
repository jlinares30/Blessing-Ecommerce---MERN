import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CardService } from "../components/CardService";
import { mockServices } from '../mockData';
import { servicesRequest } from '../api/auth';

function ServicesPage() {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const data = await servicesRequest();
        setServices(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
    // useEffect(() => {
    //   setServices(mockServices);
    // }, []);
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
