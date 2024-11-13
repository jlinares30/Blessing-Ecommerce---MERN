import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { mockServices } from "../mockData";
import CommentBox from "../components/CommentBox";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { serviceRequest, categoriesRequest, salonsRequest } from "../api/auth";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState({ detail_service: "", price_service: 0 });
  const [categories, setCategories] = useState([]);
  const [salons, setSalons] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSalon, setSelectedSalon] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const imageUrl =  `../public/images/${id}.jpg`;;
  
  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const data = await serviceRequest(id);
        console.log(data);
        setService(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchServiceDetails();
  }, [id]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const data = await categoriesRequest();
  //       setCategories(data.filter((category) => category.service_id === id));
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchCategories();
  // }, [id]);

  useEffect(() => {
    const fetchSalons = async () => {
      try {
        const data = await salonsRequest();
        setSalons(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSalons();

  }, [id]);
  // useEffect(() => {
  //   setService(mockServices);
  // }, []);

  const handleReservation = (e) => {
    e.preventDefault();
    


    
    console.log("Reservando para:", selectedDate);
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Header />
    <div className="container bg-white p-4 mt-4 rounded">
      <div className="row">
        <div className="col-md-6">
          {/* <img
            src="https://i.scdn.co/image/ab67616100005174274df4dfcb960867eccedfb5"
            // src={`/imagenes/${serviceId}-1.jpg`}
            alt={service.detail_service}
            className="img-fluid rounded mb-3"
          /> */}
          <img
            // src="https://i.scdn.co/image/ab67616100005174274df4dfcb960867eccedfb5"
            src = {imageUrl}
            // src={`/imagenes/${serviceId}-1.jpg`}
            alt={service.detail_service || "Service"}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
        <h1 className="display-4">
            {service.detail_service ? service.detail_service : "Servicio no disponible"}
          </h1>
          <p className="h3 text-success mb-3">
            {service.price_service ? `$${service.price_service}` : ""}
          </p>

          {/* {categories.length > 0 ? (
            categories.map((category) => (
              <p key={category.id}>
                <strong>Categoría: </strong>
                <span className="badge bg-primary">{category.name_category}</span>
              </p>
            ))
          ) : (
            <p>No se encontraron categorías para este servicio.</p>
          )} */}

          <form onSubmit={handleReservation} className="mt-4">
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                Seleccionar día y hora
              </label>
              <input
                type="datetime-local"
                id="date"
                name="selected_date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="salon" className="form-label">
                Seleccionar Salon
              </label>
              <select 
                id="salon"
                name="selected_salon"
                value={selectedSalon}
                onChange={(e) => setSelectedSalon(e.target.value)}
                className="form-control"
                required>
                  {
                    salons.map((salon) => (
                      <option value={salon._id}>{salon.name_salon}</option>
                    ))
                  }
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Reservar ahora
            </button>
          </form>
        </div>
      </div>

      <div className="mt-5">
        <h3>Descripción</h3>
        {/* {categories.length > 0 ? (
          categories.map((category) => (
            <p key={category._id} className="text-muted">
              {category.description_category}
            </p>
          ))
        ) : (
          <p>No hay descripciones para esta categoría.</p>
        )} */}
      </div>
    </div>
    <CommentBox/>
    <Footer />
    </>
  );
};

export default ServiceDetail;
