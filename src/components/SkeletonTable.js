import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.css";

export default function SkeletonTable({ cards }) {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
            <div className="skeleton-table" key={i}>
                <div className="skeleton-table-left-wrapper">
                <div className="skeleton-table-image">
                    <Skeleton height={87} width={130} />
                </div>
                <div className="skeleton-table-middle-wrapper">
                    <Skeleton count={3} style={{margin: "4px 0"}} />
                </div>
                </div>
                <div className="skeleton-table-right-wrapper">
                    <Skeleton count={1} />
                </div>
            </div>
    ))
}