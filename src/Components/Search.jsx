import { useState } from 'react';
import './Search.css';
import { useGlobalContext } from '../Context';

const Search = () => {
    const [text, setText] = useState('');
    const { setSearchterm, randomMeal } = useGlobalContext();

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            setSearchterm(text);
        }
    }

    const handleSurpriseClick = () => {
        randomMeal();
        setSearchterm('')
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type favourite meal" className="form-input" onChange={handleChange}></input>
                <button type="submit" className="btn">search</button>
                <button type="button" className="btn btn-hipster" onClick={handleSurpriseClick}>surprise me!</button>
            </form>
        </header>
    );
}

export default Search;
