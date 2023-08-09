import { Link } from "react-router-dom"
import info from '../assets/info.png'
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"
import Carrousel from "../composents/Carrousel"
import font from "../font/Lapicide_TRIAL.otf"

const stripePromise = loadStripe(process.env.YOUR_STRIPE_PUBLIC_KEY)

function Shop(){

    
    const downloadDocument = () => {
        const url = process.env.PUBLIC_URL + `/font/Lapicide_TRIAL.otf`; // Remplacez par le nom de votre document avec l'extension appropriée
    
        const link = document.createElement('a');
        link.href = url;
        link.download = "Lapicide_TRIAL.otf";
        link.click();
    };




    const [selectLicense, setSelectLicense] = useState('Web');
    const [selectType, setSelectType] = useState("S")

    const handleSelectLicense = (type) => {
        setSelectLicense(type);
    };

    const handleTypeChange = (type) => {
        setSelectType(type);
    };


        const price = [
            {licence:"Print", type:"Freelance", price:"BUY FOR 75€", id:"price_1LYAipEudbBbgrFH6B8HfKgl"},
            {licence:"Print", type: "S", price:"BUY FOR 90€", id: "price_1LYAqUEudbBbgrFHIZUmwcOH"},
            {licence:"Print", type: "M", price:"BUY FOR 170€", id:"price_1LYArNEudbBbgrFHb114ipYS"},
            {licence:"Print", type: "L", price:"BUY FOR 225€", id:"price_1LYArpEudbBbgrFH9WaASNC7"},
            {licence:"Print", type : "XL", price: "CONTACT ME!", id:"CONTACTME"},

            {licence:"Web", type: "Freelance", price:"BUY FOR 90€", id: "price_1LYAubEudbBbgrFHBqcHzPXk"},
            {licence:"Web", type: "S", price:"BUY FOR 120€", id:"price_1LYAveEudbBbgrFHoSPt7Pyc"},
            {licence:"Web", type: "M", price:"BUY FOR 190€", id:"price_1LYAy7EudbBbgrFH4Qefvzig"},
            {licence:"Web", type: "L", price:"BUY FOR 250€", id:"price_1LYAyfEudbBbgrFHcOR0aqqJ"},
            {licence:"Web", type: "XL", price: "CONTACT ME!", id:"CONTACTME"},

            {licence:"Branding", type: "Freelance", price:"BUY FOR 130€", id:"price_1LYAzdEudbBbgrFHj8mHrSZG"},
            {licence:"Branding", type: "S", price:"BUY FOR 260€", id:"price_1LYB0bEudbBbgrFHYaayikoH"},
            {licence:"Branding", type: "M", price:"BUY FOR 780€", id:"price_1LYB1NEudbBbgrFHl7uIcFq0"},
            {licence:"Branding", type: "L", price:"BUY FOR 1430€", id:"price_1LYB1tEudbBbgrFHiPcxaii8"},
            {licence:"Branding", type: "XL", price: "CONTACT ME!", id:"CONTACTME"}
        ]

        
        const result = price.filter((price) => price.licence === selectLicense && price.type === selectType);





   const handlePayment = async (priceId) => {

        const stripe = await stripePromise;

        const response = await fetch('/create-checkout-session',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({priceId}),
        });
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            console.error(result.error.message);
        }
    };







    return(
    
    <div className="add-carrousel">
        <Carrousel />
        <div className="shop">
        
            <h1 className="shop-title">BUY THE FONT</h1>

            <div className="link-div">
                <div className="link-info">
                    <div  className={`radio-option ${selectLicense === "Print" && "selected"}`} onClick={() => handleSelectLicense('Print')}>
                        Desktop & Print   
                    </div>
                    <img className="info-btn" src={info} alt="info-popUp"/>
                    <div className="popUp-info">
                        <p>You can use it for print.
                    WARNING: You CAN’T post on social media 
                    (IG, TW, FB etc. with this licence).</p>
                    </div>
                </div>
                <div  className="link-info">
                    <div className={`radio-option ${selectLicense === "Web" && "selected"}`} onClick={() => handleSelectLicense('Web')}>
                        Web (socials + apps)
                    </div>
                    <img className="info-btn" src={info} alt="info-popUp"/>
                    <div className="popUp-info">
                        <p>You can use it like Websites uses,
                         socials medias like Instagram, Snapchat, Facebook and Youtube.
                        </p>
                    </div>
                </div>
                <div  className="link-info">
                    <div className={`radio-option ${selectLicense === "Branding" && "selected"}`} onClick={() => handleSelectLicense('Branding')}>
                        Branding (desktop + web + apps)
                    </div>            
                    <img className="info-btn" src={info} alt="info-popUp"/>
                    <div className="popUp-info">
                        <p>You can use it for visual identities 
                        (Logos, Branding, Monograms and/or any distinctive sign), 
                        but also on social media and websites uses, at the exception of TV, Plateform and Cinema.</p>
                    </div>
                </div>
            </div>

            <div className="link-license">
                <div className={`radio-option ${selectType === "Freelance" && "selected"}`} onClick={() => handleTypeChange('Freelance')}>
                    Independant & Freelance
                </div>
                <div className={`radio-option ${selectType === "S" && "selected"}`} onClick={() => handleTypeChange('S')}>
                    S license (1-5 employees)
                </div>
                <div className={`radio-option ${selectType === "M" && "selected"}`} onClick={() => handleTypeChange('M')}>
                    M license (6-9 employees)
                </div>
                <div className={`radio-option ${selectType === "L" && "selected"}`} onClick={() => handleTypeChange('L')}>
                    L license (10-20 employees)
                </div>
                <div className={`radio-option ${selectType === "XL" && "selected"}`} onClick={() => handleTypeChange('XL')}>
                    XL license ({">"} 20 employees)
                </div>
            </div>

            <input className="email-input" placeholder="Email where will be send the font..." autoComplete="email"></input>

            <div className="btn-shop">
                <Link>
                {result.map((e) => {
                    return(
                    <button className="btn-buy" onClick={() => handlePayment(e.id)} key={e.id}>{e.price}</button>
                    )
                })}
                </Link>
                <Link>
                    <button onClick={downloadDocument} className="btn-trial"  >TRIAL VERSION</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

export default Shop