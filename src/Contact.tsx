import email from "./assets/mail.svg"
import linkedin from "./assets/linkedin.svg"


export default function Contact() {
    return (
        <div className="contact">         
            <button className="email-button">
                <img src={email} className="icon" alt="Email Icon" />
                <span className="label">Email</span>
            </button> 
           <button className="linkedin-button">
                <img src={linkedin} className="icon" alt="Linkedin Icon" />
                <span className="label">LinkedIn</span>
            </button> 
        </div>
    )
}