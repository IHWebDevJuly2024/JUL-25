import apartmentsArray from "../dataset/listings.json";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

function DetailsPage() {
  const { apartment_id } = useParams();
  console.log(apartment_id);

  const apartment = apartmentsArray.results.find((eachApartment) => {
    return eachApartment.id == apartment_id;
  });

  console.log(apartment);

  return (
    <div className="details-container">
      <h3>{apartment.name}</h3>
      <p>{apartment.description}</p>
      <img src={apartment.picture_url} alt="apartment picture" />
      <h4>Amenities: </h4>
      <ul>
        {apartment.amenities.map((eachAmenity) => {
          return <li>{eachAmenity}</li>;
        })}
      </ul>
    </div>
  );
}

export default DetailsPage;
