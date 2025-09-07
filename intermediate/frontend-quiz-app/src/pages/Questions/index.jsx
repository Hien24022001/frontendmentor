import { quizzes } from 'data';
import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Options from './Options';
import Question from './Question';

const duration = 5000;

function Questions({ addPoint, setHeaderContent }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [remainingTime, setRemainingTime] = useState(duration);
	const timerId = useRef();
	const navigate = useNavigate();

	const location = useLocation();
	const query = new URLSearchParams(location.search);
	const titleParams = query.get('title');
	const { title, icon, questions } = quizzes.find((item) => item.title === titleParams);
	const currentQuestion = questions[currentIndex];

	const handleNextQuestion = () => {
		// if the current is the last question, navigate to result screen, otherwise move to next question
		if (currentIndex + 1 === questions.length) {
			navigate(`/result?title=${title}`);
			return;
		}
		setCurrentIndex((i) => i + 1);
	}

	useEffect(() => {
		setHeaderContent({
			title: title,
			icon: icon
		})
	}, [])

	useEffect(() => {
	  setRemainingTime(duration);
	  timerId.current = setInterval(() => {
	      setRemainingTime((remain) => remain - 1000);
	  }, 1000)
	  return () => {
	      clearInterval(timerId.current);
	  }
	}, [currentIndex])

	useEffect(() => {
	  if (remainingTime <= 0) {
	      clearInterval(timerId.current);
	      handleNextQuestion();
	  }
	}, [remainingTime])

	return (
		<section className='flex justify-center items-center'>
			<div className='px-6 pt-8 pb-8 flex flex-col gap-[40px] md:w-[640px] md:pt-[49px] md:px-0 xl:pt-[85px] xl:w-[1160px] xl:gap-[128px] xl:flex-row'>
				<Question
					total={questions.length}
					index={currentIndex + 1}
					text={currentQuestion.question}
					progress={Math.floor(remainingTime * 100 / duration)}
				/>
				<Options
					options={currentQuestion.options}
					answer={currentQuestion.answer}
					currentIndex={currentIndex}
					handleNextQuestion={handleNextQuestion}
					addPoint={addPoint}
				/>
			</div>
		</section>
	)
}

export default Questions
