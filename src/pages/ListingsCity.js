import React from "react";
import { Link } from "react-router-dom";
import "./ListingsList.css";

export default function ListingsCity() {
    const cities = [
        {
            "name": "Algonquin",
        },
        {
            "name": "Antioch",
        },
        {
            "name": "Arlington Heights",
        },
        {
            "name": "Aurora",
        },
        {
            "name": "Barrington",
        },
        {
            "name": "Bartlett",
        },
        {
            "name": "Bensenville",
        },
        {
            "name": "Berwyn",
        },
        {
            "name": "Blue Island",
        },
        {
            "name": "Bolingbrook",
        },
        {
            "name": "Bourbonnais",
        },
        {
            "name": "Bradley",
        },
        {
            "name": "Bridgeview",
        },
        {
            "name": "Burns Harbor",
        },
        {
            "name": "Calumet City",
        },
        {
            "name": "Carol Stream",
        },
        {
            "name": "Chesterton",
        },
        {
            "name": "Chicago",
        },
        {
            "name": "Clarendon Hills",
        },
        {
            "name": "Countryside",
        },
        {
            "name": "Crystal Lake",
        },
        {
            "name": "Dekalb",
        },
        {
            "name": "Des Plaines",
        },
        {
            "name": "Downers Grove",
        },
        {
            "name": "East Dundee",
        },
        {
            "name": "Elburn",
        },
        {
            "name": "Elgin",
        },
        {
            "name": "Elk Grove Village",
        },
        {
            "name": "Elmhurst",
        },
        {
            "name": "Evanston",
        },
        {
            "name": "Forest Park",
        },
        {
            "name": "Fox Lake",
        },
        {
            "name": "Frankfort",
        },
        {
            "name": "Genoa",
        },
        {
            "name": "Glen Ellyn",
        },
        {
            "name": "Glendale Heights",
        },
        {
            "name": "Glenview",
        },
        {
            "name": "Grayslake",
        },
        {
            "name": "Gurnee",
        },
        {
            "name": "Hammond",
        },
        {
            "name": "Hampshire",
        },
        {
            "name": "Highland",
        },
        {
            "name": "Highland Park",
        },
        {
            "name": "Hinsdale",
        },
        {
            "name": "Hodgkins",
        },
        {
            "name": "Hoffman Estates",
        },
        {
            "name": "Homewood",
        },
        {
            "name": "Huntley",
        },
        {
            "name": "Joliet",
        },
        {
            "name": "Lake Bluff",
        },
        {
            "name": "Lake Villa",
        },
        {
            "name": "Lansing",
        },
        {
            "name": "La Porte",
        },
        {
            "name": "Libertyville",
        },
        {
            "name": "Lincolnwood",
        },
        {
            "name": "Lindenhurst",
        },
        {
            "name": "Lisle",
        },
        {
            "name": "Lombard",
        },
        {
            "name": "Loves Park",
        },
        {
            "name": "Lowell",
        },
        {
            "name": "Lyons",
        },
        {
            "name": "Manteno",
        },
        {
            "name": "Matteson",
        },
        {
            "name": "McHenry",
        },
        {
            "name": "Melrose Park",
        },
        {
            "name": "Mendota",
        },
        {
            "name": "Merrillville",
        },
        {
            "name": "Michigan City",
        },
        {
            "name": "Midlothian",
        },
        {
            "name": "Morris",
        },
        {
            "name": "Morton",
        },
        {
            "name": "Morton Grove",
        },
        {
            "name": "Naperville",
        },
        {
            "name": "Niles",
        },
        {
            "name": "Normal",
        },
        {
            "name": "North Aurora",
        },
        {
            "name": "Northbrook",
        },
        {
            "name": "Northfield",
        },
        {
            "name": "Oak Lawn",
        },
        {
            "name": "Oak Park",
        },
        {
            "name": "Orland Park",
        },
        {
            "name": "Oswego",
        },
        {
            "name": "Ottawa",
        },
        {
            "name": "Palatine",
        },
        {
            "name": "Park Ridge",
        },
        {
            "name": "Peotone",
        },
        {
            "name": "Peru",
        },
        {
            "name": "Plainfield",
        },
        {
            "name": "Plano",
        },
        {
            "name": "Pontiac",
        },
        {
            "name": "Princeton",
        },
        {
            "name": "Romeoville",
        },
        {
            "name": "Roselle",
        },
        {
            "name": "Sandwich",
        },
        {
            "name": "Schaumburg",
        },
        {
            "name": "Schererville",
        },
        {
            "name": "Shorewood",
        },
        {
            "name": "Skokie",
        },
        {
            "name": "South Holland",
        },
        {
            "name": "St. Charles",
        },
        {
            "name": "Streamwood",
        },
        {
            "name": "Sycamore",
        },
        {
            "name": "Tinley Park",
        },
        {
            "name": "Valparaiso",
        },
        {
            "name": "Villa Park",
        },
        {
            "name": "Watseka",
        },
        {
            "name": "Wauconda",
        },
        {
            "name": "Waukegan",
        },
        {
            "name": "West Chicago",
        },
        {
            "name": "Westmont",
        },
        {
            "name": "Wheeling",
        },
        {
            "name": "Willowbrook",
        },
        {
            "name": "Wilmington",
        },
        {
            "name": "Woodstock",
        }
    ]

    return(
        <>
            <h1 className="listings-list-title">Listings By City</h1>
            <div className="listings-list-wrapper">
                <ul className="listings-list">
                    {cities.map((city, index) => {
                        return(
                            <li key={index} className="listings-list-item">
                                <Link className="listings-list-item-link">{city.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}