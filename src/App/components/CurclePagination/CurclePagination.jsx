import React, { useLayoutEffect, useEffect, useRef } from "react";
import gsap from 'gsap';
import './curclePagination.scss';
import CurcleButton from "../CurcleButton";
import { useSlider } from "src/hooks/useSlider";

const CurclePagination = ({ onClick,  points }) => {
  const {selected} = useSlider();
  const prevSelectedRef = React.useRef(selected);
  const appRef = useRef(null);
  const ctx = useRef();
  const numberPoints = points.length;

  useLayoutEffect(() => {
    if (!prevSelectedRef.current) return;
    let ctx = gsap.context(() => {
    }, appRef);

    return () => ctx.current.revert();
  }, [ctx]);

  useEffect(() => {
    const angle = 360 / numberPoints * (((numberPoints - (selected - prevSelectedRef.current)) % numberPoints));
    gsap.to(".pagination", { rotation: `+=${angle}` });
    gsap.to(".curcleButton__content", { rotation: `-=${angle}` });
    prevSelectedRef.current = selected;
  }, [selected])

  return (
    <div ref={appRef} className="pagination">
      {points.map(({ id, pointName, type}) => (
        <CurcleButton key={id} onClick={onClick(id)} active={id === selected} type={type || ''} pointName={pointName} className={"pagination__bullete"} />
      ))}
    </div>
  )
}

export default CurclePagination;