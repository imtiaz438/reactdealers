import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Skeleton.css";

export default function SkeletonGrid({ cards }) {
    return Array(cards)
      .fill(0)
      .map((item, i) => (
        <div className="skeleton-card" key={i}>
          <div className="skeleton-card-image">
            <Skeleton
              height={164}
              width={245}
              style={{ marginBottom: "6px" }}
            />
          </div>
          <div className="skeleton-card-text-wrapper">
            <Skeleton count={4} width={245} style={{ margin: "4px 0" }} />
          </div>
        </div>
      ));
}