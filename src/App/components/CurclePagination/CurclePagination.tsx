import React, { useLayoutEffect, useEffect, useRef } from 'react';

import gsap from 'gsap';
import './curclePagination.scss';
import { useSlider } from 'hooks/useSlider';
import { intervalType } from 'src/config/types';

import CurcleButton from '../CurcleButton';

type curclePaginationProps = {
  onClick: (id: number) => React.MouseEventHandler;
  points: intervalType[];
};

const CurclePagination: React.FC<curclePaginationProps> = ({ onClick, points }) => {
  const { selected } = useSlider();
  const prevSelectedRef = React.useRef(selected);
  const numberPoints = points.length;

  const appRef = useRef(null);
  const ctx = useRef();

  useLayoutEffect(() => {
    if (!prevSelectedRef.current) return;
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const ctx = gsap.context(() => {}, appRef);

    return () => ctx.current.revert();
  }, [ctx]);

  useEffect(() => {
    const angle = (360 / numberPoints) * ((numberPoints - (selected - prevSelectedRef.current)) % numberPoints);
    gsap.to('.pagination', { rotation: `+=${angle}` });
    gsap.to('.curcleButton__content', { rotation: `-=${angle}` });
    prevSelectedRef.current = selected;
  }, [selected]);

  return (
    <div ref={appRef} className="pagination">
      {points.map(({ id, pointName }) => (
        <CurcleButton
          key={id}
          onClick={onClick(id)}
          active={id === selected}
          pointName={pointName}
          className={'pagination__bullete'}
        />
      ))}
    </div>
  );
};

export default CurclePagination;
