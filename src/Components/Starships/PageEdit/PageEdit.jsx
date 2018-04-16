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
        <span className="itemName">MGLT: </span>
        <br />
        <input type="text" value={fullData.MGLT} />
        <br />
        <span className="itemName">cargo_capacity: </span>
        <br />
        <input type="text" value={fullData.cargo_capacity} />
        <br />
        <span className="itemName">consumables: </span>
        <br />
        <input type="text" value={fullData.consumables} />
        <br />
        <span className="itemName">cost_in_credits: </span>
        <br />
        <input type="text" value={fullData.cost_in_credits} />
        <br />
        <span className="itemName">crew: </span>
        <br />
        <input type="text" value={fullData.crew} />
        <br />
        <span className="itemName">hyperdrive_rating: </span>
        <br />
        <input type="text" value={fullData.hyperdrive_rating} />
        <br />
        <span className="itemName">manufacturer: </span>
        <br />
        <input type="text" value={fullData.manufacturer} />
        <br />
        <input className="submit" type="submit" value="SAVE" />
        <br />
        <Link className="link" to="/starships">
            back to starshipsList
        </Link>
        <br />
    </form>
);

export default PageEdit;
