import React from "react";
import { Link } from "react-router-dom";
import "./ListingsList.css";

export default function ListingsMake() {
    const makes = [
        {
            "name": "Acura"
        },
        {
            "name": "Aston Martin"
        },
        {
            "name": "Audi"
        },
        {
            "name": "Bentley"
        },
        {
            "name": "BMW"
        },
        {
            "name": "Buick"
        },
        {
            "name": "Cadillac"
        },
        {
            "name": "Chevrolet"
        },
        {
            "name": "Daewoo"
        },
        {
            "name": "Ducati"
        },
        {
            "name": "Eagle"
        },
        {
            "name": "Ferrari"
        },
        {
            "name": "Ford"
        },
        {
            "name": "Geo"
        },
        {
            "name": "GMC"
        },
        {
            "name": "Harley Davidson"
        },
        {
            "name": "Honda"
        },
        {
            "name": "Hyundai"
        },
        {
            "name": "Infiniti"
        },
        {
            "name": "Isuzu"
        },
        {
            "name": "Jaguar"
        },
        {
            "name": "Jeep"
        },
        {
            "name": "Kia"
        },
        {
            "name": "Lamborghini"
        },
        {
            "name": "Land Rover"
        },
        {
            "name": "Lexus"
        },
        {
            "name": "Lincoln"
        },
        {
            "name": "Maserati"
        },
        {
            "name": "Mazda"
        },
        {
            "name": "Mercedes-Benz"
        },
        {
            "name": "Mercury"
        },
        {
            "name": "MINI"
        },
        {
            "name": "Mitsubishi"
        },
        {
            "name": "Nissan"
        },
        {
            "name": "Oldsmobile"
        },
        {
            "name": "Plymouth"
        },
        {
            "name": "Pontiac"
        },
        {
            "name": "Porsche"
        },
        {
            "name": "Rolls-Royce"
        },
        {
            "name": "Saab"
        },
        {
            "name": "Saturn"
        },
        {
            "name": "Scion"
        },
        {
            "name": "Subaru"
        },
        {
            "name": "Suzuki"
        },
        {
            "name": "Tesla"
        },
        {
            "name": "Toyota"
        },
        {
            "name": "Volkswagen"
        },
        {
            "name": "Volvo"
        }
    ]

    return (
        <>
            <h1 className="listings-list-title">Listings By Make</h1>
            <div className="listings-list-wrapper">
            <ul className="listings-list">
                {makes.map((make, index) => {
                    return(
                        <li key={index} className="listings-list-item">
                            <Link className="listings-list-item-link">{make.name}</Link>
                        </li>
                    )
                })}
            </ul>
            </div>
        </>
    )
}