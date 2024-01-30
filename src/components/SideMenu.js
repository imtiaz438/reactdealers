import React, { useState } from "react";
//import lodash from "lodash";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faX } from "@fortawesome/free-solid-svg-icons";
import "./SideMenu.css";

//const defaultSearchParams = {
//  make: new Set(),
//  internetPrice: [],
//}

//const stringKeys = new Set(["make"]);
//const numberKeys = new Set(["internetPrice"]);

export default function SideMenu(props) {
//    const [searchParams, setSearchParams] = useState({
//      ...defaultSearchParams,
//    })
    const [dropdown, setDropdown] = useState({
      make: false,
      model: false,
      color: false,
      price: false,
      mileage: false,
      body: false,
      engine: false,
      transmission: false,
      train: false,
    })
    const [makeArray, setMakeArray] = useState([]);
    const [modelArray, setModelArray] = useState([]);
    const [priceArray, setPriceArray] = useState([]);
    const [mileageArray, setMileageArray] = useState([]);
    const [bodyArray, setBodyArray] = useState([]);
    const [engineArray, setEngineArray] = useState([]);
    const [transmissionArray, setTransmissionArray] = useState([]);
    const [trainArray, setTrainArray] = useState([]);
    const {data: cars } = useSelector(state => state.cars);
//    const carsHistory = React.useRef(cars);
    const makeOptions = [];
    const modelOptions = [];
    const priceOptions = [{
      label: "$0 - $5,000",
      value: [0, 5000]
    },
    {
      label: "$5,001 - $10,000",
      value: [5001, 10000]
    },
    {
      label: "$10,001 - $15,000",
      value: [10001, 15000]
    },
    {
      label: "$15,001 - $20,000",
      value: [15001, 20000]
    },
    {
      label: "$20,001 - $30,000",
      value: [20001, 30000]
    },
    {
      label: "$30,001 - $40,000",
      value: [30001, 40000]
    },
    {
      label: "$40,001 - $50,000",
      value: [40001, 50000]
    },
    {
      label: "$50,001 - $75,000",
      value: [50001, 75000]
    },
    {
      label: "$75001 - $100,000",
      value: [75001, 100000]
    },
    {
      label: "$100,000+",
      value: [100000, Infinity]
    }];
    const mileageOptions = ["0 - 10,000", "10,001 - 20,000", "20,001 - 30,000", "30,001 - 40,000", "40,001 - 50,000", "50,001 - 60,000", "60,001 - 70,000", "70,001 - 80,000", "80,001 - 90,000", "90,001 - 100,000", "100,001+"];
    const bodyOptions = ["Convertible", "Coupe", "Hatchback", "Minivan", "Pickup", "Sedan", "SUV/Crossover", "Van", "Wagon", "Other/Unknown"];
    const engineOptions = ["3 Cylinder", "4 Cylinder", "5 Cylinder", "6 Cylinder", "8 Cylinder", "10 Cylinder", "12 Cylinder", "Rotary", "Electric"]
    const transmissionOptions = ["Automatic", "CVT", "Manual", "Semi-Automatic"];
    const trainOptions = ["2WD", "4WD", "AWD", "FWD", "RWD"];

    cars.map(vehicle => !makeOptions.includes(vehicle.make) ? makeOptions.push(vehicle.make) : makeOptions);
    cars.map(vehicle => makeArray.includes(vehicle.make) && !modelOptions.includes(vehicle.model) ? modelOptions.push(vehicle.model) : modelOptions);
    cars.map(vehicle => !makeArray.includes(vehicle.make) && modelArray.includes(vehicle.model) ? modelArray.splice(vehicle.model, 1) : modelArray)

    console.log(priceOptions.map((item) => {
      return item
    }))

    const removeMake = (index) => {
      const temp = [...makeArray]
      temp.splice(index, 1)
      setMakeArray(temp)
    }

    const removeModel = (index) => {
      const temp = [...modelArray]
      temp.splice(index, 1)
      setModelArray(temp)
    }

    const removePrice = (index) => {
      const temp = [...priceArray]
      temp.splice(index, 1)
      setPriceArray(temp)
    }

    const removeMileage = (index) => {
      const temp = [...mileageArray]
      temp.splice(index, 1)
      setMileageArray(temp)
    }

    const removeBody = (index) => {
      const temp = [...bodyArray]
      temp.splice(index, 1)
      setBodyArray(temp)
    }

    const removeEngine = (index) => {
      const temp = [...engineArray]
      temp.splice(index, 1)
      setEngineArray(temp)
    }

    const removeTransmission = (index) => {
      const temp = [...transmissionArray]
      temp.splice(index, 1)
      setTransmissionArray(temp)
    }

    const removeTrain = (index) => {
      const temp = [...trainArray]
      temp.splice(index, 1)
      setTrainArray(temp)
    }

    return (
      <>
        <div className="results-side-menu desktop">
            <h3 className="results-side-menu-title">Search</h3>
            <form className="results-side-menu-form">
              <div className="results-side-menu-form-row">
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Within</label>
                  <select className="results-side-menu-select">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>25</option>
                    <option>50</option>
                    <option>75</option>
                    <option>100</option>
                    <option>250</option>
                  </select>
                </div>
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Miles of</label>
                  <input
                    className="results-side-menu-input"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div className="results-side-menu-form-row">
                <select className="results-side-menu-select">
                  <option>2014</option>
                </select>
                <span>to</span>
                <select className="results-side-menu-select">
                  <option>2024</option>
                </select>
              </div>
              <div className="results-side-menu-form-row">
                <div>
                  <input
                    className="results-side-menu-certified-checkbox"
                    type="checkbox"
                  />
                  <label className="results-side-menu-certified-text">
                    Certified
                  </label>
                </div>
              </div>
              <div className="results-side-menu-form-row">
                <button className="results-side-menu-button">Search</button>
              </div>
            </form>
            <div className="results-section">
              <button onClick={!dropdown.make ? () => setDropdown({...dropdown, make: true}) : () => setDropdown({...dropdown, make: false})} className="results-side-menu-dropdown">
                <h5 className="results-side-menu-subtitle">Make</h5>
                <FontAwesomeIcon icon={dropdown.make ? faAngleUp : faAngleDown} />
              </button>
                {makeArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {makeArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeMake}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.make && (
                <ul className="results-dropdown-list">
                  {makeOptions.map((vehicle, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!makeArray.includes(vehicle) ? () => setMakeArray([...makeArray, vehicle]) : () => setMakeArray([...makeArray])}>{vehicle}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.model ? () => setDropdown({...dropdown, model: true}) : () => setDropdown({...dropdown, model: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Model</h5>
                <FontAwesomeIcon icon={dropdown.model ? faAngleUp : faAngleDown} />
              </button>
              {modelArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {modelArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeModel}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.model && (<ul className="results-dropdown-list">
                  {modelOptions.map((vehicle, i) => { 
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!modelArray.includes(vehicle) ? () => setModelArray([...modelArray, vehicle]) : () => setModelArray([...modelArray])}>{vehicle}</button>
                      </li>
                    )
                  })}
                </ul>
                )}
            </div>
            <div className="results-section">
              <button onClick={!dropdown.color ? () => setDropdown({...dropdown, color: true}) : () => setDropdown({...dropdown, color: false})} className="results-side-menu-dropdown">
                <h5 className="results-side-menu-subtitle">Color</h5>
                <FontAwesomeIcon icon={dropdown.color ? faAngleUp : faAngleDown} />
              </button>
              {dropdown.color && <div></div>}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.price ? () => setDropdown({...dropdown, price: true}) : () => setDropdown({...dropdown, price: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Price</h5>
                <FontAwesomeIcon icon={dropdown.price ? faAngleUp : faAngleDown} />
              </button>
              {priceArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {priceArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removePrice}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.price && (
                <ul className="results-dropdown-list">
                  {priceOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!priceArray.includes(item.label) ? () => setPriceArray([...priceArray, item.label]) : () => setPriceArray([...priceArray])}>{item.label}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.mileage ? () => setDropdown({...dropdown, mileage: true}) : () => setDropdown({...dropdown, mileage: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Mileage</h5>
                <FontAwesomeIcon icon={dropdown.mileage ? faAngleUp : faAngleDown} />
              </button>
              {mileageArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {mileageArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeMileage}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.mileage && (
                <ul className="results-dropdown-list">
                  {mileageOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!mileageArray.includes(item) ? () => setMileageArray([...mileageArray, item]) : () => setMileageArray([...mileageArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button onClick={!dropdown.body ? () => setDropdown({...dropdown, body: true}) : () => setDropdown({...dropdown, body: false})} className="results-side-menu-dropdown">
                <h5 className="results-side-menu-subtitle">Body Type</h5>
                <FontAwesomeIcon icon={dropdown.body ? faAngleUp : faAngleDown} />
              </button>
              {bodyArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {bodyArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeBody}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.body && (
                <ul className="results-dropdown-list">
                  {bodyOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!bodyArray.includes(item) ? () => setBodyArray([...bodyArray, item]) : () => setBodyArray([...bodyArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.engine ? () => setDropdown({...dropdown, engine: true}) : () => setDropdown({...dropdown, engine: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Engine</h5>
                <FontAwesomeIcon icon={dropdown.engine ? faAngleUp : faAngleDown} />
              </button>
              {engineArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {engineArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeEngine}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.engine && (
                <ul className="results-dropdown-list">
                  {engineOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!engineArray.includes(item) ? () => setEngineArray([...engineArray, item]) : () => setEngineArray([...engineArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.transmission ? () => setDropdown({...dropdown, transmission: true}) : () => setDropdown({...dropdown, transmission: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Transmission</h5>
                <FontAwesomeIcon
                  icon={dropdown.transmission ? faAngleUp : faAngleDown}
                />
              </button>
              {transmissionArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {transmissionArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeTransmission}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.transmission && (
                <ul className="results-dropdown-list">
                  {transmissionOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!transmissionArray.includes(item) ? () => setTransmissionArray([...transmissionArray, item]) : () => setTransmissionArray([...transmissionArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="results-section">
              <button
                onClick={!dropdown.train ? () => setDropdown({...dropdown, train: true}) : () => setDropdown({...dropdown, train: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Drive Train</h5>
                <FontAwesomeIcon
                  icon={dropdown.train ? faAngleUp : faAngleDown}
                />
              </button>
              {trainArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {trainArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeTrain}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.train && (
                <ul className="results-dropdown-list">
                  {trainOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!trainArray.includes(item) ? () => setTrainArray([...trainArray, item]) : () => setTrainArray([...trainArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
        </div>
        {
          <div className="side-menu-overlay">
            <div className="mobile-side-menu">
                <div className="title-section">
                  <h3 className="mobile-side-menu-title">Search</h3>
                  <button className="mobile-side-menu-close" onClick={props.mobileMenu}>
                    <FontAwesomeIcon icon={faX} />
                  </button>
                </div>
                <div>
                <div className="results-side-menu-form-row mobile">
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Within</label>
                  <select className="results-side-menu-select">
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>25</option>
                    <option>50</option>
                    <option>75</option>
                    <option>100</option>
                    <option>250</option>
                  </select>
                </div>
                <div className="results-side-menu-wrapper">
                  <label className="results-side-menu-label">Miles of</label>
                  <input
                    className="results-side-menu-input"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div className="results-side-menu-form-row mobile">
                <select className="results-side-menu-select">
                  <option>2014</option>
                </select>
                <span>to</span>
                <select className="results-side-menu-select">
                  <option>2024</option>
                </select>
              </div>
              <div className="results-side-menu-form-row mobile">
                <div>
                  <input
                    className="results-side-menu-certified-checkbox"
                    type="checkbox"
                  />
                  <label className="results-side-menu-certified-text">
                    Certified
                  </label>
                </div>
              </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.make ? () => setDropdown({...dropdown, make: true}) : () => setDropdown({...dropdown, make: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Make</h5>
                    <FontAwesomeIcon icon={dropdown.make ? faAngleUp : faAngleDown} />
                  </button>
                  {makeArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {makeArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeMake}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.make && (
                    <ul className="results-dropdown-list">
                      {makeOptions.map((vehicle, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={!makeArray.includes(vehicle) ? () => setMakeArray([...makeArray, vehicle]) : () => setMakeArray([...makeArray])}>{vehicle}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.model ? () => setDropdown({...dropdown, model: true}) : () => setDropdown({...dropdown, model: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Model</h5>
                    <FontAwesomeIcon icon={dropdown.model ? faAngleUp : faAngleDown} />
                  </button>
                  {modelArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {modelArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeModel}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.model && (<ul className="results-dropdown-list">
                  {modelOptions.map((vehicle, i) => { 
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!modelArray.includes(vehicle) ? () => setModelArray([...modelArray, vehicle]) : () => setModelArray([...modelArray])}>{vehicle}</button>
                      </li>
                    )
                  })}
                </ul>
                )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.color ? () => setDropdown({...dropdown, color: true}) : () => setDropdown({...dropdown, color: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Color</h5>
                    <FontAwesomeIcon icon={dropdown.color ? faAngleUp : faAngleDown} />
                  </button>
                  {dropdown.color && <div></div>}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.price ? () => setDropdown({...dropdown, price: true}) : () => setDropdown({...dropdown, price: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Price</h5>
                    <FontAwesomeIcon icon={dropdown.price ? faAngleUp : faAngleDown} />
                  </button>
                  {priceArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {priceArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removePrice}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.price && (
                    <ul className="results-dropdown-list">
                      {priceOptions.map((item, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={!priceArray.includes(item.label) ? () => setPriceArray([...priceArray, item.label]) : () => setPriceArray([...priceArray])}>{item.label}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.mileage ? () => setDropdown({...dropdown, mileage: true}) : () => setDropdown({...dropdown, mileage: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Mileage</h5>
                    <FontAwesomeIcon icon={dropdown.mileage ? faAngleUp : faAngleDown} />
                  </button>
                  {mileageArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {mileageArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeMileage}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.mileage && (
                    <ul className="results-dropdown-list">
                      {mileageOptions.map((item, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={!mileageArray.includes(item) ? () => setMileageArray([...mileageArray, item]) : () => setMileageArray([...mileageArray])}>{item}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.body ? () => setDropdown({...dropdown, body: true}) : () => setDropdown({...dropdown, body: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Body</h5>
                    <FontAwesomeIcon icon={dropdown.body ? faAngleUp : faAngleDown} />
                  </button>
                  {bodyArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {bodyArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeBody}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
                  {dropdown.body && (
                    <ul className="results-dropdown-list">
                      {bodyOptions.map((item, i) => {
                        return(
                          <li className="results-dropdown-list-item" key={i}>
                            <button className="results-dropdown-list-button" onClick={!bodyArray.includes(item) ? () => setBodyArray([...bodyArray, item]) : () => setBodyArray([...bodyArray])}>{item}</button>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.engine ? () => setDropdown({...dropdown, engine: true}) : () => setDropdown({...dropdown, engine: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Engine</h5>
                    <FontAwesomeIcon icon={dropdown.engine ? faAngleUp : faAngleDown} />
                  </button>
                  {engineArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {engineArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeEngine}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.engine && (
                <ul className="results-dropdown-list">
                  {engineOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!engineArray.includes(item) ? () => setEngineArray([...engineArray, item]) : () => setEngineArray([...engineArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
                </div>
                <div className="results-section">
                  <button
                    onClick={!dropdown.transmission ? () => setDropdown({...dropdown, transmission: true}) : () => setDropdown({...dropdown, transmission: false})}
                    className="results-side-menu-dropdown"
                  >
                    <h5 className="results-side-menu-subtitle">Transmission</h5>
                    <FontAwesomeIcon
                      icon={dropdown.transmission ? faAngleUp : faAngleDown}
                    />
                  </button>
                  {transmissionArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {transmissionArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeTransmission}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.transmission && (
                <ul className="results-dropdown-list">
                  {transmissionOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!transmissionArray.includes(item) ? () => setTransmissionArray([...transmissionArray, item]) : () => setTransmissionArray([...transmissionArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
                </div>
                <div className="results-section">
              <button
                onClick={!dropdown.train ? () => setDropdown({...dropdown, train: true}) : () => setDropdown({...dropdown, train: false})}
                className="results-side-menu-dropdown"
              >
                <h5 className="results-side-menu-subtitle">Drive Train</h5>
                <FontAwesomeIcon
                  icon={dropdown.train ? faAngleUp : faAngleDown}
                />
              </button>
              {trainArray.length > 0 ? <div>
                  <ul className="results-dropdown-selected-list">
                  {trainArray.map((item, i) => {
                    return (
                      <li key={i} className="results-dropdown-selected-list-item">
                        {item}
                        <div>
                          <button className="results-dropdown-selected-close-button" onClick={removeTrain}><FontAwesomeIcon icon={faX} className="results-dropdown-selected-close-button-icon" /></button>
                        </div>
                        </li>
                    )
                  })}
                  </ul>
                </div> : <div></div>}
              {dropdown.train && (
                <ul className="results-dropdown-list">
                  {trainOptions.map((item, i) => {
                    return(
                      <li className="results-dropdown-list-item" key={i}>
                        <button className="results-dropdown-list-button" onClick={!trainArray.includes(item) ? () => setTrainArray([...trainArray, item]) : () => setTrainArray([...trainArray])}>{item}</button>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
            <div className="mobile-side-menu-button-wrapper">
            <button className="results-side-menu-button">Search</button>
            </div>
            </div>
            </div>
          </div>
        }
      </>
    );
};