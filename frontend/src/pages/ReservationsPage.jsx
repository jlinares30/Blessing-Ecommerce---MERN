import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { reservationsRequestByUser } from '../api/auth';
import { useAuth } from '../context/AuthContext';
import { salonsRequest } from '../api/auth';
function ReservationsPage() {
  const {user} = useAuth();
  const [reservations, setReservations] = useState([]);
  const [salons, setSalons] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editReservationId, setEditReservationId] = useState(null); 
  const [updatedReservation, setUpdatedReservation] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await reservationsRequestByUser();
        console.log(response);
        setReservations(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    console.log(user);
    if (user) {
      fetchReservations();
    }
  }, [user]);

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

  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const enableEditMode = (reservation) => {
    setEditReservationId(reservation._id);
    setUpdatedReservation(reservation);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdatedReservation((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    



    console.log("Actualizando reservación:", updatedReservation);
    setEditReservationId(null); 
  };


  return (
    <div className="container mt-4">
      <h2>Mis Reservaciones</h2>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation._id} className="card mb-3">
            <div className="card-body">
            {editReservationId === reservation._id ? (
                <>
                  <form onSubmit={handleUpdateSubmit}>
                    
                    <div className="mb-3">
                    
                      <label htmlFor="date_reservation" className="form-label">Fecha y Hora</label>
                      <input
                        type="datetime-local"
                        id="date_reservation"
                        name="date_reservation"
                        className="form-control"
                        value={updatedReservation.date_reservation}
                        onChange={handleUpdateChange}
                      />
                    </div>
                    <div className="mb-2">
                    <label>Salon:</label>
                    <select
                      type="text"
                      id='salon'
                      name="salon"
                      value={updatedReservation.salon_id}
                      onChange={handleUpdateChange}
                      className="form-control">
                      {salons.map((salon) => (
                        <option key={salon._id} value={salon._id}>
                          {salon.name_salon}
                        </option>
                      ))}
                    </select>
                  </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                    <button className="btn btn-secondary ms-3" onClick={() => setEditReservationId(null)}>Cancelar</button>
                  </form>
                </>
              ) : (
                <>
                  
                  <p><strong>Fecha y Hora:</strong> {reservation.date_reservation}</p>
                  <p><strong>Service:</strong> {reservation.service_id.detail_service}</p>
                  <p><strong>Salon:</strong> {reservation.salon_id.name_salon}</p>
                  <p><strong>Salon Address:</strong> {reservation.salon_id.address_salon}</p>
                  <p><strong>Costo:</strong> {reservation.service_id.price_service}</p>
                  <button className="btn btn-primary " onClick={() => enableEditMode(reservation)}>
                    Editar
                  </button>
                  <button className="btn btn-danger ms-3" onClick={() => enableEditMode(reservation)}>
                    Eliminar
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No tienes reservaciones.</p>
      )}
    </div>
  );
}

export default ReservationsPage;