import apartmentsArray from "../dataset/listings.json";
import ApartmentCard from "../components/ApartmentCard";

import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import "./ApartmentsPage.css";

function ApartmentsPage() {
  const [apartmentsPlans, setApartmentsPlans] = useState(
    apartmentsArray.results
  );
  const [searchParams, setSearchParams] = useSearchParams();

  function searchApartment() {
    console.log(searchParams.get("amenity"));
    const filteredApartments = apartmentsArray.results.filter(
      (eachApartment) => {
        return eachApartment.amenities.includes(searchParams.get("amenity"));
      }
    );

    setApartmentsPlans(filteredApartments);
  }

  return (
    <>
      <h2>Apartments page</h2>
      <input
        onChange={(event) => setSearchParams({ amenity: event.target.value })}
        type="text"
      />
      <button onClick={searchApartment}>Search</button>
      <ul className="apartments-container">
        {apartmentsPlans.map(
          ({ id, picture_url, name, host_name, price, description }) => {
            return (
              <ApartmentCard
                description={description}
                host_name={host_name}
                id={id}
                key={id}
                name={name}
                picture_url={picture_url}
                price={price}
              />
            );
          }
        )}
      </ul>
    </>
  );
}

export default ApartmentsPage;
