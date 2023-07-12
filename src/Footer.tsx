import facebook from "./assets/fb.svg"
import github from "./assets/gh.svg"
import instagram from "./assets/ig.png"
import twitter from "./assets/twitter.svg"

export default function Footer() {
    return (
        <div className="footer">         
            <a href="https://www.twitter.com/"><img src={twitter}/></a>
            <a href="https://www.github.com/"><img src={github}/></a>
            <a href="https://www.instagram.com/"><img src={instagram}/></a>
            <a href="https://www.facebook.com/"><img src={facebook}/></a>
        </div>
    )
}