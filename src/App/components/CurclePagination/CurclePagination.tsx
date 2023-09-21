import React, { useLayoutEffect, useEffect, useRef } from 'react';

import gsap from 'gsap';
import './curclePagination.scss';
import { useSlider } from 'hooks/useSlider';
import { intervalType } from 'src/config/types';

import CurcleButton from '../CurcleButton';
import { findIndex } from 'lodash';

type curclePaginationProps = {
  onClick: (id: number) => React.MouseEventHandler;
  points: intervalType[];
};

const CurclePagination: React.FC<curclePaginationProps> = ({ onClick, points }) => {
  const { selected, intervalsList } = useSlider();
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
    if (prevSelectedRef.current === selected) return;
    const indexPrev = intervalsList.findIndex((el) => el.id === prevSelectedRef.current);
    const arr = [...Array(numberPoints)].map((_, i) => intervalsList[(indexPrev + i) % numberPoints].id);
    const angle =
      arr.indexOf(selected) > numberPoints / 2
        ? (360 / numberPoints) * ((numberPoints - arr.indexOf(selected)) % numberPoints)
        : -(360 / numberPoints) * arr.indexOf(selected);

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
