import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReservationsPage() {
  const [reservations, setReservations] = useState([]);
  const [editMode, setEditMode] = useState(null); // Controla el modo de edición
  const [updatedReservation, setUpdatedReservation] = useState({}); // Controla los datos actualizados

  useEffect(() => {
    // Cargar reservaciones del usuario desde el backend
    const fetchReservations = async () => {
      try {
        const response = await axios.get('/api/reservations'); // Asegúrate de ajustar esta ruta según tu backend
        setReservations(response.data);
      } catch (error) {
        console.error("Error cargando las reservaciones:", error);
      }
    };
    fetchReservations();
  }, []);

  // Función para habilitar el modo de edición
  const enableEditMode = (reservation) => {
    setEditMode(reservation.id);
    setUpdatedReservation({ ...reservation }); // Copia los datos de la reservación actual para edición
  };

  // Función para manejar cambios en los campos de edición
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedReservation({ ...updatedReservation, [name]: value });
  };

  // Función para guardar los cambios de la reservación
  const saveChanges = async (reservationId) => {
    try {
      await axios.put(`/api/reservations/${reservationId}`, updatedReservation); // Asegúrate de ajustar la ruta
      const updatedReservations = reservations.map((reservation) =>
        reservation.id === reservationId ? { ...updatedReservation, id: reservationId } : reservation
      );
      setReservations(updatedReservations);
      setEditMode(null); // Salir del modo de edición
    } catch (error) {
      console.error("Error al guardar la reservación:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Mis Reservaciones</h2>
      {reservations.length > 0 ? (
        reservations.map((reservation) => (
          <div key={reservation.id} className="card mb-3">
            <div className="card-body">
              {editMode === reservation.id ? (
                <>
                  <div className="mb-2">
                    <label>Fecha:</label>
                    <input
                      type="date"
                      name="date"
                      value={updatedReservation.date}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <div className="mb-2">
                    <label>Hora:</label>
                    <input
                      type="time"
                      name="time"
                      value={updatedReservation.time}
                      onChange={handleInputChange}
                      className="form-control"
                    />
                  </div>
                  <button className="btn btn-success me-2" onClick={() => saveChanges(reservation.id)}>
                    Guardar
                  </button>
                  <button className="btn btn-secondary" onClick={() => setEditMode(null)}>
                    Cancelar
                  </button>
                </>
              ) : (
                <>
                  <p><strong>Fecha:</strong> {reservation.date}</p>
                  <p><strong>Hora:</strong> {reservation.time}</p>
                  <button className="btn btn-primary" onClick={() => enableEditMode(reservation)}>
                    Editar
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