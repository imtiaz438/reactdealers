import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { useAnimate, useInView } from "framer-motion";
import "./PageLoading.css";

export default function PageLoading() {
    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);

    useEffect(() => {
        if (isInView) {
            animate(scope.current, { opacity: [0.5, 1] }, { duration: 1, repeat: Infinity }, { ease: "EaseInOut" })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView])
    
    return(
        <>
            <div className="page-loading-wrapper">
                <div className="page-loading-icon-wrapper">
                    <FontAwesomeIcon ref={scope} className="page-loading-icon" icon={faClock} />
                </div>
            </div>
        </>
    )
}