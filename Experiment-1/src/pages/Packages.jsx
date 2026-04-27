import { useParams, useNavigate } from "react-router-dom";

function Packages() {
  const { place } = useParams();
  const navigate = useNavigate();

  const packagesData = {
    paris: [
      { name: "Paris Basic", price: "₹50,000" },
      { name: "Paris Premium", price: "₹90,000" }
    ],
    maldives: [
      { name: "Maldives Beach Stay", price: "₹70,000" },
      { name: "Maldives Luxury", price: "₹1,20,000" }
    ],
    goa: [
      { name: "Goa Budget", price: "₹20,000" },
      { name: "Goa Deluxe", price: "₹40,000" }
    ]
  };

  const selectedPackages = packagesData[place] || [];

  return (
    <div>
      <h3 className="mb-4 text-capitalize">{place} Packages</h3>

      <div className="row">
        {selectedPackages.map((pkg, index) => (
          <div className="col-md-4" key={index}>
            <div className="card p-3 shadow mb-3">
              <h5>{pkg.name}</h5>
              <p>{pkg.price}</p>

              <button
                className="btn btn-primary w-100"
                onClick={() =>
                  navigate("/payment", {
                    state: { package: pkg, place: place }
                  })
                }
              >
                Book Package
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;