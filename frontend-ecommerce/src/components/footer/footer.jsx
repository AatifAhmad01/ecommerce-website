import React from "react";
import './footer.css'

export default function Footer()
{
    return (
        <footer className="footer-container">
            {/* <p className="footer-details">&copy; Seen Beauty</p> */}

            <div className="f-inner-container">
                <div className="f-logo-container">
                    <img src="images/Seen_Beauty.png" alt="" className="f-logo-img"/>
                    <ul className="f-logo-list">
                        <li><a href="https://wa.me/+923401249000" target="_blank"><img src="images/WhatsappIcon.png" alt="Whatsapp" className="f-icon"/></a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=61558708552554&mibextid=LQQJ4d" target="_blank"><img src="images/FacebookIcon.png" alt="Facebbok" className="f-icon"/></a></li>
                        <li><a href="https://www.instagram.com/seenbeauty.pk/" target="_blank"><img src="images/InstaIcon.png" alt="Instagram" className="f-icon"/></a></li>
                        <li><a href="https://www.tiktok.com/@seenbeauty.pk" target="_blank"><img src="images/TiktokIcon.png" alt="Tiktok" className="f-icon"/></a></li>
                    </ul>
                </div>

                <ul className="f-list">
                    <li><h5 className="f-text">Contact Us</h5></li>
                    <li><a href="tel:+923401249000" className="f-text">03401249000</a></li>
                    <li><a href="mailto:seenbeautypk@gmail.com" className="f-text">seenbeautypk@gmail.com</a></li>
                </ul>

                <div className="f-about-container">
                    <ul className="f-list">
                        <li><h5 className="f-text">About Seenbeauty</h5></li>
                        <p className="f-text">Seenbeauty is the e-commerce company which provides the beauty of all makeup in Pakistan. #WeCareUrBeauty</p>
                    </ul>
                </div>
            </div>
        </footer>
    )
}