import airbnbLogo  from "/assets/airbnb_logo.png"

export default function NavBar(){
    return (
        <nav >
        <img className = "nav--logo" src={airbnbLogo}/>
        </nav>
    )
}