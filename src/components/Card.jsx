import starIcon from "/assets/star_icon.png";

export default function Card(props) {
  let badgeText 
  if (props.open_spot === 0){
    badgeText = "SOLD OUT"
  }else if(props.open_spot === "online") {
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
    {badgeText && <div className="card--bage"> 
      {badgeText}
      </div>}
      <img className="card--image" src={props.img} />
      <div className="card--stats">
        <img className="card--star" src={starIcon} />
        <span className="">{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • &nbsp;</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
