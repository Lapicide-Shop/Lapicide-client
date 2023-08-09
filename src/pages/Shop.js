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



    
    const result = "";
    const [selectType, setSelectType] = useState('Web');
    const [selectLicense, setSelectLicense] = useState("S")

    const handleTypeChange = (type) => {
        setSelectType(type);
    };

    const handleSelectLicense = (type) => {
        setSelectLicense(type);
    };

    const getPrice = () => {

        const price = {
            Print:{licence:"Print", type:"Freelance", price:"BUY FOR 75€", id:"price_1LYAipEudbBbgrFH6B8HfKgl"},
            Print:{licence:"Print", type: "S", price:"BUY FOR 90€", id: "price_1LYAqUEudbBbgrFHIZUmwcOH"},
            Print:{licence:"Print", type: "M", price:"BUY FOR 170€", id:"price_1LYArNEudbBbgrFHb114ipYS"},
            Print:{licence:"Print", type: "L", price:"BUY FOR 225€", id:"price_1LYArpEudbBbgrFH9WaASNC7"},
            Print:{licence:"Print", type : "XL", price: "CONTACT ME!"},

            Web:{licence:"Web", type: "Freelance", price:"BUY FOR 90€", id: "price_1LYAubEudbBbgrFHBqcHzPXk"},
            Web:{licence:"Web", type: "S", price:"BUY FOR 120€", id:"price_1LYAveEudbBbgrFHoSPt7Pyc"},
            Web:{licence:"Web", type: "M", price:"BUY FOR 190€", id:"price_1LYAy7EudbBbgrFH4Qefvzig"},
            Web:{licence:"Web", type: "L", price:"BUY FOR 250€", id:"price_1LYAyfEudbBbgrFHcOR0aqqJ"},
            Web:{licence:"Web", type: "XL", price: "CONTACT ME!"},

            Branding:{licence:"Branding", type: "Freelance", price:"BUY FOR 130€", id:"price_1LYAzdEudbBbgrFHj8mHrSZG"},
            Branding:{licence:"Branding", type: "S", price:"BUY FOR 260€", id:"price_1LYB0bEudbBbgrFHYaayikoH"},
            Branding:{licence:"Branding", type: "M", price:"BUY FOR 780€", id:"price_1LYB1NEudbBbgrFHl7uIcFq0"},
            Branding:{licence:"Branding", type: "L", price:"BUY FOR 1430€", id:"price_1LYB1tEudbBbgrFHiPcxaii8"},
            Branding:{licence:"Branding", type: "XL", price: "CONTACT ME!"}
        }
        console.log([selectType][selectLicense]);
        return price[selectType][selectLicense]
}

   {/* const handlePayment = async (priceId) => {
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
            console.clg('faux');
        }
    };*/}







    return(
    
    <div className="add-carrousel">
        <Carrousel />
        <div className="shop">
        
            <h1 className="shop-title">BUY THE FONT</h1>

            <div className="link-div">
                <div className="link-info">
                    <div  className={`radio-option ${selectType === "Print" && "selected"}`} onClick={() => handleTypeChange('Print')}>
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
                    <div className={`radio-option ${selectType === "Web" && "selected"}`} onClick={() => handleTypeChange('Web')}>
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
                    <div className={`radio-option ${selectType === "Branding" && "selected"}`} onClick={() => handleTypeChange('Branding')}>
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
                <div className={`radio-option ${selectLicense === "Freelance" && "selected"}`} onClick={() => handleSelectLicense('Freelance')}>
                    Independant & Freelance
                </div>
                <div className={`radio-option ${selectLicense === "S" && "selected"}`} onClick={() => handleSelectLicense('S')}>
                    S license (1-5 employees)
                </div>
                <div className={`radio-option ${selectLicense === "M" && "selected"}`} onClick={() => handleSelectLicense('M')}>
                    M license (6-9 employees)
                </div>
                <div className={`radio-option ${selectLicense === "L" && "selected"}`} onClick={() => handleSelectLicense('L')}>
                    L license (10-20 employees)
                </div>
                <div className={`radio-option ${selectLicense === "XL" && "selected"}`} onClick={() => handleSelectLicense('XL')}>
                    XL license ({">"} 20 employees)
                </div>
            </div>

            <input className="email-input" placeholder="Email where will be send the font..." autoComplete="email"></input>

            <div className="btn-shop">
                <Link>
                    <button className="btn-buy" >{getPrice()}</button>
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