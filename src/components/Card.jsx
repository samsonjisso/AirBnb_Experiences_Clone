import starIcon from "../assets/star_icon.png";

export default function Card(props) {
  return (
    <div className="card">
      <img className="card--image" src={props.img} />
      <div className="card--stats">
        <img className="card--star" src={starIcon} />
        <span className="">{props.statRating}</span>
        <span className="gray">({props.statValue}) • &nbsp;</span>
        <span className="gray">{props.statCountry}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
