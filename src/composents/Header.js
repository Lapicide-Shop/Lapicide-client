import { Link } from "react-router-dom"
import "./Header.css"
function Header(){
    return(
        <>
        <div className="header">
            <div>
                <h2 className="author-name">EMILIE VIZCANO</h2>
            </div>
            <div>
                <h1 className="lapicide">LAPICIDE</h1>
            </div>
            <div >
                <Link to="/shop">
                    <button className="btn-header">BUY THE FONT</button>
                </Link>
            </div>
            
        </div>
        <hr className="hr-header"/>
        </>
    )
}

export default Header