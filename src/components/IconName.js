
import profile from "../images/profile.jpg"

export default function IconName() {
    return (
        <div className="hero-title">
            <ul>
                <li>
                    <img src={profile}/>
                </li>
                <li>
                    <h1>Amy Rice</h1>
                </li>
            </ul>
        </div>
    );
}