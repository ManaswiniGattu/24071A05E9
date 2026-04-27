import { useNavigate } from "react-router-dom";

function Destinations() {
  const navigate = useNavigate();

  const places = [
    {
      name: "Paris",
      img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
    },
    {
      name: "Maldives",
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
    },
    {
      name: "Goa",
      img: "https://images.unsplash.com/photo-1587922546307-776227941871"
    }
  ];

  return (
    <div>
      <h3 className="mb-4">Destinations</h3>

      <div className="row">
        {places.map((place, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow h-100">
              <img
                src={place.img}
                className="card-img-top"
                alt={place.name}
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body text-center">
                <h5>{place.name}</h5>

                <button
                  className="btn btn-success w-100 mt-2"
                  onClick={() =>
                    navigate(`/packages/${place.name.toLowerCase()}`)
                  }
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destinations;