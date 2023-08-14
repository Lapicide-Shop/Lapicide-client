import { Link } from "react-router-dom"
import info from '../assets/info.png'
import { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import Carrousel from "../composents/Carrousel"
import axios from "axios"

const stripePromise = loadStripe(process.env.YOUR_STRIPE_PUBLIC_KEY)

function Shop(){
    const API_URL = process.env.REACT_APP_SERVER_URL

    const downloadDocument = () => {
        const url = process.env.PUBLIC_URL + `/font/Lapicide_TRIAL.otf`; // Remplacez par le nom de votre document avec l'extension appropriée
    
        const link = document.createElement('a');
        link.href = url;
        link.download = "Lapicide_TRIAL.otf";
        link.click();
    };


    const [email, setEmail] = useState('');
    const [selectLicense, setSelectLicense] = useState('Web');
    const [selectType, setSelectType] = useState("S")


    const handleSelectLicense = (type) => {
        setSelectLicense(type);
    };

    const handleTypeChange = (type) => {
        setSelectType(type);
    };


        const price = [
            {licence:"Print", type:"Freelance", price:"BUY FOR 75€", id:"price_1NdFFZEudbBbgrFHFIaBR6UN"},
            {licence:"Print", type: "S", price:"BUY FOR 90€", id: "price_1NdFHKEudbBbgrFHthrawpKL"},
            {licence:"Print", type: "M", price:"BUY FOR 170€", id:"price_1NdFHzEudbBbgrFHvmphRtaw"},
            {licence:"Print", type: "L", price:"BUY FOR 225€", id:"price_1NdFIREudbBbgrFHhBdC4l46"},
            {licence:"Print", type : "XL", price: "CONTACT ME!", id:"CONTACTME"},
            {licence:"Print", type: "XXXL", price:"BUY FOR 0€", id:"price_1Nf45GEudbBbgrFH37lFtNtv"},

            {licence:"Web", type: "Freelance", price:"BUY FOR 90€", id: "price_1NeyYyEudbBbgrFHVljRMSxp"},
            {licence:"Web", type: "S", price:"BUY FOR 120€", id:"price_1NeyYGEudbBbgrFHYiDYa6yV"},
            {licence:"Web", type: "M", price:"BUY FOR 190€", id:"price_1NeyXOEudbBbgrFHYS6FObuu"},
            {licence:"Web", type: "L", price:"BUY FOR 250€", id:"price_1NeyWgEudbBbgrFHYgJ4s66L"},
            {licence:"Web", type: "XL", price: "CONTACT ME!", id:"CONTACTME"},
            {licence:"Web", type: "XXXL", price:"BUY FOR 0€", id:"price_1Nf45GEudbBbgrFH37lFtNtv"},

            {licence:"Branding", type: "Freelance", price:"BUY FOR 130€", id:"price_1NdFMdEudbBbgrFHNupiNdhO"},
            {licence:"Branding", type: "S", price:"BUY FOR 260€", id:"price_1NdFNCEudbBbgrFHEJPu5gAP"},
            {licence:"Branding", type: "M", price:"BUY FOR 780€", id:"price_1NdFQzEudbBbgrFH8HyY2qOF"},
            {licence:"Branding", type: "L", price:"BUY FOR 1430€", id:"price_1NdFTpEudbBbgrFHGmULRTav"},
            {licence:"Branding", type: "XL", price: "CONTACT ME!", id:"CONTACTME"},
            {licence:"Branding", type: "XXXL", price:"BUY FOR 0€", id:"price_1Nf45GEudbBbgrFH37lFtNtv"},

        ]

        
        const result = price.filter((price) => price.licence === selectLicense && price.type === selectType);





   const handlePayment = async (priceId) => {
        if(priceId === "CONTACTME"){
            window.location.href = "mailto:contact@emilievizcano.com"
        } else {
        try {
            const response = await axios.post(`${API_URL}/create-checkout-session`, {
              priceId: priceId,
             
            });
      
            const session = response.data;
    
            const stripe = await stripePromise;
            const result = await stripe.redirectToCheckout({
              sessionId: session.id,
            });
            if (result.error) {
                console.error(result.error.message);
              }
            } catch (error) {
              console.error('Erreur lors de la requête vers le serveur :', error);
            }
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
                <div className={`radio-option ${selectType === "XXXL" && "selected"}`} onClick={() => handleTypeChange('XXXL')}>
                    Test de Zinzinerie
                </div>

            </div>

            <input required className="email-input" placeholder="Email where will be send the font..." autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>

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