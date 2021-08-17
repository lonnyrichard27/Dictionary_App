import React from 'react'
import './Definitions.css'

const Definitions = ({word, meanings, category, LightMode}) => {
    return (
        <div className="meanings">
            {/* if theres nothing in the word  */}
            {
                meanings[0] && word && category === 'en' && (
                    <audio src={meanings[0].phonetics[0].audio} style={{ backgroundColor: '#fff', borderRadius: 10}} controls>
                        Your Browser doesnt support audio element
                    </audio>
                )
            }

            {
                word === "" ? (<span className="subtitle">Start by typing a word to search</span>) : (
                    meanings.map((mean) =>
                        mean.meanings.map((item) => 
                            item.definitions.map((def) => (
                                <div 
                                    className="singleMean"
                                    style={{ backgroundColor: LightMode ? "#3b5360" : 'white', color: LightMode ? "white" : "Black" }}
                                >
                                   <b>{def.definition}</b>
                                   <hr style={{}}></hr>
                                   { 
                                        def.example && (
                                            <span>
                                                <b>Example: </b>
                                                {def.example}
                                            </span>
                                        )
                                   }
                                   {def.synonyms && (
                                        <span>
                                            <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                                        </span>
                                    )}
                                </div>
                            ))
                        )
                    )
                )
            }
        </div>
    )
}

export default Definitions;