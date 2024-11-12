import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { mockServices } from "../mockData";
import CommentBox from "../components/CommentBox";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  const [categories, setCategories] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  
  // useEffect(() => {
  //   // Fetch service data
  //   axios.get(`/api/service/${serviceId}`).then((response) => {
  //     setService(response.data);
  //   });

  //   Fetch categories data
  //   axios.get(`/api/service/${serviceId}/categories`).then((response) => {
  //     setCategories(response.data);
  //   });
  // }, [serviceId]);

  useEffect(() => {
    setService(mockServices);
  }, []);

  const handleReservation = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar la reserva con `selectedDate`
    console.log("Reservando para:", selectedDate);
  };

  return (
    <>
    <Header />
    <div className="container bg-white p-4 mt-4 rounded">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://i.scdn.co/image/ab67616100005174274df4dfcb960867eccedfb5"
            // src={`/imagenes/${serviceId}-1.jpg`}
            alt={service.detail_service}
            className="img-fluid rounded mb-3"
          />
          <img
            src="https://i.scdn.co/image/ab67616100005174274df4dfcb960867eccedfb5"
            // src={`/imagenes/${serviceId}-1.jpg`}
            alt={service.detail_service}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-4">{service.detail_service}</h1>
          <p className="h3 text-success mb-3">${service.price_service}</p>
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
                value={"salon"}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="form-control"
                required>
                <option value="salon1">Salon 1</option>
                <option value="salon2">Salon 2</option>
                <option value="salon3">Salon 3</option>
                <option value="salon4">Salon 4</option>
                <option value="salon5">Salon 5</option>
                
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
            <p key={category.id} className="text-muted">
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
