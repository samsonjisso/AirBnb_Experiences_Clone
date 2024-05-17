import phoneIcon from "/assets/phone_icon.png"
import emailIcon from "/assets/email_icon.png"

export default function Contact(/*props*/ {img, name, phone, email}) {
    return (
        <div className="contact--card">
            <img className="contact--card-photo" src={img}/>
            <h3>{name}</h3>
            <div className="contact--phone">
                <img src={phoneIcon}/>
                <p>{phone}</p>
            </div>
            <div className="contact--email">
                <img src={emailIcon}/>
                <p>{email}</p>
            </div>
        </div>
    )
}