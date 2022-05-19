import React from 'react';
// 
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

interface Props {
  correct: number;
  incorrect: number;
}

const ScoreCard = ({
  correct,
  incorrect
} : Props) => {
  return (
    <section className=''>
      <h3 className='text-center'>Checkout your score !!!</h3>
      <div className='d-flex justify-content-center center align-items-center mb-3'>
        <div className='' style={{ width: '160px' }}>
          {correct !== 0 ? (
            <CircularProgressbarWithChildren value={Math.round((correct / (correct + incorrect)) * 100)}>
              <div className='text-center'>
                <h2 className='mb-0'>
                  <strong>{Math.round((correct / (correct + incorrect)) * 100)}%</strong>
                </h2>
                <p className='text-muted mb-0'>Accuracy</p>
              </div>
            </CircularProgressbarWithChildren>
          ) : (
            <p className='text-danger'>0%</p>
          )}
        </div>
      </div>
      <div className='text-center mt-3'>
        <h2 className='h1'>{correct}</h2>
        <p className='text-muted'>Words per minute:</p>
      </div>
    </section>
  );
};

export default ScoreCard;
