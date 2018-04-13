// global
import React from 'react';
import { Link } from 'react-router-dom';
// css
import './index.css';

const PageEdit = ({ fullData }) => (
    <form className="editForm">
        <span className="itemName">name: </span>
        <br />
        <input type="text" value={fullData.name} />
        <br />
        <span className="itemName">birth_year: </span>
        <br />
        <input type="text" value={fullData.birth_year} />
        <br />
        <span className="itemName">eye_color: </span>
        <br />
        <input type="text" value={fullData.eye_color} />
        <br />
        <span className="itemName">gender: </span>
        <br />
        <input type="text" value={fullData.gender} />
        <br />
        <span className="itemName">hair_color: </span>
        <br />
        <input type="text" value={fullData.hair_color} />
        <br />
        <span className="itemName">height: </span>
        <br />
        <input type="text" value={fullData.height} />
        <br />
        <span className="itemName">mass: </span>
        <br />
        <input type="text" value={fullData.mass} />
        <br />
        <span className="itemName">skin_color: </span>
        <br />
        <input type="text" value={fullData.skin_color} />
        <br />
        <input className="submit" type="submit" value="SAVE" />
        <br />
        <Link className="link" to="/people">
            back to peopleList
        </Link>
        <br />
    </form>
);

export default PageEdit;
