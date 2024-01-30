import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "./Accordion.css";

export const Accordion = ({ item, keepOpen }) => {
    const [accordionItems, setAccordionItems] = useState([]);

    useEffect(() => {
        if (item) {
            setAccordionItems([
                ...item.map(b => ({
                    ...b,
                    toggled: false
                }))
            ])
        }
    }, [item]);

    function handleClick(clicked) {
        setAccordionItems([
            ...accordionItems.map(((b) => {
                let toggled = b.toggled

                if (clicked.id === b.id) {
                toggled = !b.toggled
                } else if (!keepOpen) {
                toggled = false
                }

                return {
                    ...b,
                    toggled
                }
            }))
        ])
    }

    return(
        <>
            <ul className="accordion-dropdown-list">
            {accordionItems?.map((a) => {
              return(
                <li className="accordion-dropdown-list-item" key={a.id}>
                  <button className="accordion-dropdown" onClick={() => handleClick(a)}>
                    <h5 className="accordion-dropdown-subtitle">{a.question}</h5>
                    <FontAwesomeIcon className="accordion-dropdown-icon" icon={!a.toggled ? faAngleDown : faAngleUp} />
                  </button>
                  {a.toggled ? <div className="accordion-answer-wrapper">
                    <p className="accordion-answer-text">{a.answer}</p>
                  </div> : <div className="accordion-answer-wrapper hidden"></div>}
                </li>
              )
            })}
            </ul>
        </>
    )
}