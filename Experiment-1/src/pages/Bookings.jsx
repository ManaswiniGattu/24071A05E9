import { useEffect, useState } from "react";

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  return (
    <div>
      <h3 className="mb-4">Your Bookings</h3>

      {bookings.length === 0 ? (
        <p className="text-muted">No bookings yet</p>
      ) : (
        <div className="row">
          {bookings.map((b, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-3 shadow mb-3">
                <h5 className="text-capitalize">{b.place}</h5>
                <p><strong>Package:</strong> {b.packageName}</p>
                <p className="text-success"><strong>{b.price}</strong></p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;