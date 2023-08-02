import { useState } from "react"
import Carrousel from "../composents/Carrousel"
function Homepage(){

    const [text, setText] = useState('LAPICIDE');
    const [fontSize, setFontSize] = useState(72);
    const [letterSpacing, setLetterSpacing] = useState(1);

    const handleChangeText = (e) => {
        setText(e.target.value);
    };

    const handleChangeFontSize = (e) => {
        setFontSize(parseInt(e.target.value, 10));
    };

    const handleChangeLetterSpacing = (e) => {
        setLetterSpacing(parseInt(e.target.value, 10));
    };

    const inputStyle = {
        fontSize: `${fontSize}px`,
        letterSpacing: `${letterSpacing}px`,
    };

    return(
        <section className="add-carrousel">
            <div>
                <Carrousel />
            </div>
            <div>
                    <div className="inputText" suppressContentEditableWarning={true} contentEditable="true"  onChange={handleChangeText} style={inputStyle}>
                        {text}
                    </div>

                    <div className="input-font">
                    <div className="input-fontSize">
                        <p className="mr-">SIZE</p>
                        <input type="range" min="36" max="156" step="0.1" onChange={handleChangeFontSize}  value={fontSize}/>
                    </div>
                    <div className="input-spacingLetter">
                        <p>SPACING</p>
                        <input type="range" min="1" max="12" step="0.1" onChange={handleChangeLetterSpacing}  value={letterSpacing} />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Homepage