import { Link } from "react-router-dom";

function ApartmentCard({
  id,
  picture_url,
  name,
  host_name,
  price,
  description,
}) {
  return (
    <div className="card">
      <img src={picture_url} alt="" />
      <div className="details">
        <h3>{name}</h3>
        <p>{price}</p>
        <p>Hosted by: {host_name}</p>
        <Link to={`/details/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
}

export default ApartmentCard;
