import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  const handlePayment = () => {
    // Get existing bookings
    const existing = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add new booking
    const newBooking = {
      place: data.place,
      packageName: data.package.name,
      price: data.package.price
    };

    existing.push(newBooking);

    // Save back to localStorage
    localStorage.setItem("bookings", JSON.stringify(existing));

    alert("Payment Successful ✅");
    navigate("/bookings");
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-3">Payment</h3>

        {data ? (
          <>
            <p><strong>Destination:</strong> {data.place}</p>
            <p><strong>Package:</strong> {data.package.name}</p>
            <h4 className="text-success mb-3">
              Amount: {data.package.price}
            </h4>

            <button
              className="btn btn-success w-100"
              onClick={handlePayment}
            >
              Pay Now
            </button>
          </>
        ) : (
          <>
            <p className="text-danger">No package selected</p>
            <button
              className="btn btn-primary w-100"
              onClick={() => navigate("/destinations")}
            >
              Go to Destinations
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Payment;