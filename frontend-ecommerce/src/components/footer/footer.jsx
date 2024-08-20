import React, { useState } from "react";
import './footer.css'
import PopupWindow from '../popupWindow/popupWindow.jsx'

export default function Footer()
{
    const policies = [
        {
            title: "Shipping Policy",
            content: "Seenbeauty.pk take the best possible measures in packaging but since some of the makeup items are very delicate so in case if something is damaged by shipping company during the transit, you need to contact us as soon as possible after receiving those items, and we will find the solution about claim products and we will give you back the same items within 5 to 7 working days."
        },
        {
            title: "Privacy Policy",
            content: "How do we use your information? \n We may use the information we collect from you when you register, make a purchase, We use this information to improve our website in order to better serve you."
        },
        {
            title: "Terms and condisions",
            content: "Online Orders: All orders placed are considered as confirm orders, we can make any changes after the order has been processed or dispatched."
        },
        {
            title: "Delivery Terms",
            content: "The seenbeauty.pk deliver the product with 3 to 5 business working days."
        }
    ]

    const [openPolicyPage, setOpenPolicyPage] = useState(false)
    const [selectedPolicyId, setSelectedPolicyId] = useState(0)

    const openPolicyHandler = (policyId) => 
    {
        setSelectedPolicyId(policyId);
        setOpenPolicyPage(true);
    }

    const closePolicyHanlder = () => {
        setOpenPolicyPage(false);
    }


    return (
        <>
            <footer className="footer-container">

                <div className="f-inner-container">
                    <div className="f-logo-container">
                        <img src="images/Seen_Beauty.png" alt="" className="f-logo-img"/>
                        <ul className="f-logo-list">
                            <li><a href="https://wa.me/+923401249000" target="_blank"><img src="images/WhatsappIcon.png" alt="Whatsapp" className="f-icon" loading="lazy"/></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=61558708552554&mibextid=LQQJ4d" target="_blank"><img src="images/FacebookIcon.png" alt="Facebbok" className="f-icon" loading="lazy"/></a></li>
                            <li><a href="https://www.instagram.com/seenbeauty.pk/" target="_blank"><img src="images/InstaIcon.png" alt="Instagram" className="f-icon" loading="lazy"/></a></li>
                            <li><a href="https://www.tiktok.com/@seenbeauty.pk" target="_blank"><img src="images/TiktokIcon.png" alt="Tiktok" className="f-icon" loading="lazy"/></a></li>
                        </ul>
                    </div>

                    <ul className="f-list">
                        <li><h5 className="f-heading">Contact Us</h5></li>
                        <li><a href="tel:+923401249000" className="f-text">03401249000</a></li>
                        <li><a href="mailto:seenbeautypk@gmail.com" className="f-text">seenbeautypk@gmail.com</a></li>
                        <br />
                    </ul>

                    <ul className="f-list">
                        <li><h5 className="f-heading">Policies</h5></li>
                        <li>
                            <span className="f-text cursor " onClick={() => openPolicyHandler(0)}>Shipping Policy</span><br />
                            <span className="f-text cursor " onClick={() => openPolicyHandler(1)}>Privacy Policy  </span> <br />
                            <span className="f-text cursor " onClick={() => openPolicyHandler(2)}>Terms and condisions</span> <br />
                            <span className="f-text cursor " onClick={() => openPolicyHandler(3)}>Delivery Terms</span> <br />
                        </li>
                        <br />

                    </ul>

                    <div className="f-about-container">
                        <ul className="f-list">
                            <li><h5 className="f-heading">About Seenbeauty</h5></li>
                            <p className="f-text">Seenbeauty is the e-commerce company which provides the beauty of all makeup in Pakistan. #WeCareUrBeauty</p>
                        </ul>
                    </div>
                </div>

                {openPolicyPage && <PopupWindow 
                    heading={policies[selectedPolicyId].title} 
                    text={policies[selectedPolicyId].content}
                    onClose={closePolicyHanlder}
                    />}

            </footer>
            <div className="f-developer-text">
                <p className="f-developer-text f-text">All rights reserved SeenBeauty 2024 &#169;</p>
            </div>

            <div className="f-developer-text">
                <p className="f-developer-text f-text">Powered By <a href="http://www.linkedin.com/in/atifahmad01" target="_blank" className="f-text">techWiz</a></p>
            </div>
        </>
    )
}