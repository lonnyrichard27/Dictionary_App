import { TextField, createTheme, ThemeProvider, MenuItem } from '@material-ui/core';
import React from 'react'
import "./Header.css";
import categories from '../../data/category'

const Header = ({ category, setCategory, word, LightMode, setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? "#000" : "#fff"
            },
          type: LightMode ? "light" : 'dark',
        },
      });

      const handleChange = (language) => {
        setCategory(language)
        setWord("")
      }

    return (
        <div className="header">
            {/* if theres anything in word render it else render "word hunt" */}
            <span className="title">{word ? word: "The Haydens Dictionary"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                     className="search" 
                        id="standard-basic" 
                        label={category}
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                    />
                    <TextField
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        select
                        label="Language"
                        className="select"
                    >
                        {
                            categories.map((option) => {
                                return <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            })
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
