import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const PageEdit = ({ fullData }) => (
    <form className="editForm">
        <span className="itemName">name: </span>
        <br />
        <input type="text" value={fullData.name} />
        <br />
        <span className="itemName">climate: </span>
        <br />
        <input type="text" value={fullData.climate} />
        <br />
        <span className="itemName">diameter: </span>
        <br />
        <input type="text" value={fullData.diameter} />
        <br />
        <span className="itemName">gravity: </span>
        <br />
        <input type="text" value={fullData.gravity} />
        <br />
        <span className="itemName">orbital_period: </span>
        <br />
        <input type="text" value={fullData.orbital_period} />
        <br />
        <span className="itemName">population: </span>
        <br />
        <input type="text" value={fullData.population} />
        <br />
        <span className="itemName">rotation_period: </span>
        <br />
        <input type="text" value={fullData.rotation_period} />
        <br />
        <span className="itemName">surface_water: </span>
        <br />
        <input type="text" value={fullData.surface_water} />
        <br />
        <input className="submit" type="submit" value="SAVE" />
        <br />
        <Link className="link" to="/planets">
            back to planetList
        </Link>
        <br />
    </form>
);

export default PageEdit;
