import profile from "./assets/profile.jpg"

export default function HeroCard() {
    return (
        <div className="herocard">         
            <img src={profile} alt="Profile picture" className="herocard--picture" />
            <h2 className="herocard--name">Marcin K</h2>
            <h2 className="herocard--position">Fullstack Developer</h2>
        </div>
    )
}