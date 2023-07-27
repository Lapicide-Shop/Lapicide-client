import { useState } from "react"

function Homepage(){

    const [text, setText] = useState('LAPICIDE');
    const [fontSize, setFontSize] = useState(32);
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
        <section>
            <div className="inputText" suppressContentEditableWarning={true} contentEditable="true"  onChange={handleChangeText} style={inputStyle}>
                {text}
            </div>

            <div className="input-font">
                <div className="input-fontSize">
                    <p className="mr-">Size</p>
                    <input type="range" min="8" max="72" step="0.1" onChange={handleChangeFontSize}  value={fontSize}/>
                </div>
                <div className="input-spacingLetter">
                    <p>Spacing</p>
                    <input type="range" min="1" max="12" step="0.1" onChange={handleChangeLetterSpacing}  value={letterSpacing} />
                </div>

            </div>
        </section>
    )
}
export default Homepage