import React, { Fragment, useState, useEffect, useRef, KeyboardEvent } from 'react';
// next files
import Link from 'next/link';
import Image from 'next/image';
import type { NextPage } from 'next';
// react bootstrap components
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//
import Typed from 'react-typed';
//
import Layout from '../components/layouts';
import ScoreCard from '../components/ScoreCard';
//
import randomWords from 'random-words';
//

const NUMB_OF_WORDS = 100;
const SECONDS = 60;
// 
interface inputEL {
  current: HTMLInputElement | null;
}
// 
const Home: NextPage = () => {
  const [words, setWords] = useState<Array<string>>([]);
  const [countDown, setCountDown] = useState<number>(SECONDS);
  const [currInput, setCurrInput] = useState<string>('');
  const [currWordIndex, setCurrWordIndex] = useState<number>(0);
  const [currCharIndex, setCurrCharIndex] = useState<number>(-1);
  const [currChar, setCurrChar] = useState<string>('');
  const [correct, setCorrect] = useState<number>(0);
  const [incorrect, setIncorrect] = useState<number>(0);
  const [status, setStatus] = useState<string>('waiting');
  const textInput: inputEL = useRef(null);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  useEffect(() => {
    if (status === 'started') {
      textInput.current && textInput.current.focus();
    }
  }, [status]);

  const generateWords = () => {
    return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords());
  };

  const start = () => {
    if (status === 'finished') {
      setWords(generateWords());
      setCurrWordIndex(0);
      setCorrect(0);
      setIncorrect(0);
      setCurrCharIndex(-1);
      setCurrChar('');
    }

    if (status !== 'started') {
      setStatus('started');
      let interval = setInterval(() => {
        setCountDown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(interval);
            setStatus('finished');
            setCurrInput('');
            return SECONDS;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    }
  };

  const handleKeyDown = ({ keyCode, key }: KeyboardEvent<HTMLInputElement>) => {
    // space bar
    if (keyCode === 32) {
      checkMatch();
      setCurrInput('');
      setCurrWordIndex(currWordIndex + 1);
      setCurrCharIndex(-1);
      // backspace
    } else if (keyCode === 8) {
      setCurrCharIndex(currCharIndex - 1);
      setCurrChar('');
    } else {
      setCurrCharIndex(currCharIndex + 1);
      setCurrChar(key);
    }
  };

  const checkMatch = () => {
    const wordToCompare = words[currWordIndex];
    const doesItMatch = wordToCompare === currInput.trim();
    if (doesItMatch) {
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
  };

  const getCharClass = (wordIdx: number, charIdx: number, char: string) => {
    if (wordIdx === currWordIndex && charIdx === currCharIndex && currChar && status !== 'finished') {
      if (char === currChar) {
        return 'bg-success';
      } else {
        return 'bg-danger';
      }
    } else if (wordIdx === currWordIndex && currCharIndex >= words[currWordIndex].length) {
      return 'bg-danger';
    } else {
      return '';
    }
  };

  return (
    <Fragment>
      <Layout>
        <Row className='justify-content-center pt-3'>
          <Col className='' lg={8}>
            {status === 'started' && (
              <Fragment>
                <h5 className=''>Start Typing</h5>
                <Card className='' style={{ minHeight: '120px' }}>
                  <Card.Body>
                    {words.map((word, i) => (
                      <span key={i} className={currWordIndex === i ? 'text-warning' : currWordIndex > i ? 'text-decoration-line-through' : 'text-dark'}>
                        <span>
                          {word.split('').map((char, idx) => (
                            <span className={getCharClass(i, idx, char)} key={idx}>
                              {char}
                            </span>
                          ))}
                        </span>
                        <span> </span>
                      </span>
                    ))}
                  </Card.Body>
                </Card>
              </Fragment>
            )}
            <Row className='border-top pt-3 mt-3'>
              <Col xs={6} md={4} className='order-2 order-md-1 d-grid d-md-block'>
                <Button variant='outline-dark' className=''>
                  <span className='d-flex flex-column align-items-sm-start align-items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' className='text-muted' fill='currentColor' viewBox='0 0 16 16'>
                      <path d='M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z' />
                      <path d='M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z' />
                    </svg>
                    <span className='text-nowrap d-block'>Set Time</span>
                  </span>
                </Button>
              </Col>
              <Col xs={12} md={4} className='order-1 order-md-2'>
                <div className='text-center'>
                  <h2>{countDown} Seconds</h2>
                  {/* <h2>10:00 Minutes</h2> */}
                  <p className='text-muted small'>Default Time</p>
                </div>
              </Col>
              <Col xs={6} md={4} className='text-end order-3 d-grid d-md-block'>
                <Button variant='outline-dark' className='' onClick={start}>
                  <span className='d-flex flex-column align-items-sm-start align-items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='text-muted' viewBox='0 0 16 16'>
                      <path d='M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z' />
                      <path d='M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z' />
                    </svg>
                    <span className='text-nowrap d-block'>Start Test</span>
                  </span>
                </Button>
              </Col>
            </Row>
            <div className='border-top py-3 my-3'>
              <Form.Control
                size='lg'
                placeholder='Type here'
                ref={textInput}
                disabled={status !== 'started'}
                type='text'
                className='input'
                onKeyDown={handleKeyDown}
                value={currInput}
                onChange={(e) => setCurrInput(e.target.value)}
              />
            </div>
            {status === 'finished' && <ScoreCard correct={correct} incorrect={incorrect} />}
          </Col>
        </Row>
      </Layout>
    </Fragment>
  );
};

export default Home;
