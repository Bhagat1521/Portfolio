import { Fragment } from "react";
import { marqueeItems } from "../data/site";

export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <div className="mq" aria-hidden="true">
      <div>
        {loop.map((item, index) => (
          <Fragment key={`${item}-${index}`}>
            <span>{item}</span>
            <em>/</em>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
