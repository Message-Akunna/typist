import React from 'react';
//
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';

interface Props {
  correctWordIndexArray: Array<number>;
  incorrectWordIndexArray: Array<number>;
  correct: number;
  incorrect: number;
}

const ScoreCard = ({ correctWordIndexArray, incorrectWordIndexArray, correct, incorrect }: Props) => {
  return (
    <section className=''>
      <h3 className='text-center mb-4'>Checkout your score !!!</h3>
      <div className='d-flex flex-column flex-md-row justify-content-center align-items-md-center'>
        <div className='d-flex justify-content-start align-items-center mb-3'>
          <div className='' style={{ width: '160px' }}>
            <CircularProgressbarWithChildren value={Math.round((correct / (correct + incorrect)) * 100)}>
              <div className='text-center'>
                <h2 className='mb-0'>
                  <strong>{correct !== 0 ? Math.round((correct / (correct + incorrect)) * 100) : 0}%</strong>
                </h2>
                <p className='text-muted mb-0'>Accuracy</p>
              </div>
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className='mt-3 mt-md-0 ms-0 ms-md-5'>
          <p className='text-muted fs-5 fw-normal'>
            Words per minute : <span className='fw-bold text-dark'>{correct}</span>
          </p>
          <p className='text-muted fs-5 fw-normal'>
            Correct word count : <span className='fw-bold text-success'>{correctWordIndexArray.length}</span>
          </p>
          <p className='text-muted fs-5 fw-normal'>
            Incorrect word count : <span className='fw-bold text-danger'>{incorrectWordIndexArray.length}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScoreCard;
