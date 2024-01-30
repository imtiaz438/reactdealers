import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.css";

export default function SkeletonList({ cards }) {
    return Array(cards)
    .fill(0)
    .map((item, i) => (
            <div className="skeleton-list" key={i}>
                <div className="skeleton-table-left-wrapper">
                <div className="skeleton-table-image">
                    <Skeleton height={107} width={160} />
                </div>
                <div className="skeleton-table-middle-wrapper">
                    <Skeleton count={4} height={10} style={{margin: "0"}} />
                </div>
                </div>
                <div className="skeleton-table-right-wrapper">
                    <Skeleton height={10} count={2} style={{margin: "12px 0"}} />
                </div>
            </div>
    ))
}