import React from "react";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import ListItem from "../components/ListItem";
import "./Account.css"

export default function SavedCars() {
    const savedCars = useSelector(state => state?.savedCar);
    const vehicles = useSelector(state => state?.cars?.data);
    const savedCarList = React.useMemo(() => {
        const savedCarIds = new Set(Object.values(savedCars)?.map(car => car?.key))
        return vehicles?.filter(car => savedCarIds.has(car.vin)) 
    }, [savedCars, vehicles])

    return(
        <>
            <h1 className="account-title">Saved Cars</h1>
            <div className="account-page">
                <Navigation />
                <div className="account-content">
                {savedCarList?.map((car, index) => {
                    return <ListItem key={index} item={car} />
                })}
                </div>
            </div>
        </>
    )
}