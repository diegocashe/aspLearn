import React, { useState, useEffect } from 'react';
import GetUserData from './GetUserData';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import questionsData from '../../../origin/Questions';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import ExamenSvg from '../../../img/examenSVG.svg'

const QuizQuestion = ({
    id = null,
    setAnswer = null,
    question = 'Pregunta',
    answer = 1,
    options = ['']
}) => {

    const [selected, setSelected] = useState(null);

    const isCorrect = () => !!(selected != null && (answer.toString() === selected));

    const handlerOnClick = (setAnswer)
        ? (() => {
            setAnswer(isCorrect(), id)
            console.log(isCorrect(), id)
        })
        : (() => { alert(selected) });

    const fcl = options.map((actual, i) => <div key={i} className="my-1"> <FormControlLabel value={i} control={<Radio />} label={actual} /> </div>)

    const handlerOnChange = (e) => {
        setSelected(e.target.value);
    }

    return (
        <div className="m-6 bg-white md:shadow-lg shadow-none rounded p-6 w-96">
            <FormControl component="fieldset">
                <FormLabel component="legend">{question}</FormLabel>
                <RadioGroup
                    aria-label={question}
                    defaultValue="0"
                    name="radio-buttons-group"
                    value={selected}
                    onChange={handlerOnChange}
                >
                    {fcl}

                </RadioGroup>
                <Button variant="contained" onClick={handlerOnClick}>Enviar respuesta</Button>
            </FormControl>
        </div>
    )
}

const QuizBody = ({ children }) => {
    return (
        <div className="space-y-10 justify-center items-center min-h-full">
            <div className="flex flex-wrap p-6 justify-center" >
                {children}
            </div>
        </div>
    )
}

const Quiz = () => {

    const qtyQuestions = questionsData.length;

    const [user, setUser] = useState(null);
    const [email, setEmail] = useState(null);
    const [rate, setRate] = useState(0);
    const [questions, setQuestion] = useState(questionsData);
    const [page, setPage] = React.useState(1);
    const [status, setStatus] = useState('aplazado')

    useEffect(() => {
        console.log('rate: ', rate);
        console.log(questions)
        if(rate>=0&&rate<10)setStatus('APLAZADO');
        if(rate>=10&&rate<16)setStatus('APROVADO');
        if(rate>=16&&rate<20)setStatus('APROVADO, SOBRESALIENTE');
    }, [rate, questions]);

    const onAddPoints = (isRight = false) => {
        if (rate >= 20) return;
        const point = (isRight === true || isRight === 1) ? 1 : 0;
        const newPoint = ((20 / qtyQuestions) * point) + rate;
        setRate(newPoint);
    }

    const onDeleteQuestion = (key) => setQuestion(questions.filter(data => data.key != key));

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const isCorrect = (flag = false, key = Infinity) => {
        if (flag && rate <= 20) {
            onAddPoints(true);
        }
        onDeleteQuestion(key);
    }

    const $questionsNode =             
        <QuizBody>
            {questions.map((data, i) => {
                if (i+1 == page) {
                    return <QuizQuestion
                        key={data.key}
                        id={data.key}
                        setAnswer={isCorrect}
                        question={data.question}
                        answer={data.answer}
                        options={data.options} 
                    /> }
                }
            )}
        </QuizBody>

    return (
        <div className="my-5">
            <div className='container px-20 mx-auto'>
                {
                    (user && email && questions.length != 0)
                        && <> <h3 className='text-4xl'>Ahora, {user.split(' ')[0]}, responde lo siguiente</h3> <h3 className='text-2xl mx-auto'>Tus puntos actuales son {rate.toFixed(2)}, en base a 20</h3></>
                        
                }
                {
                    (user && email && questions.length === 0)
                        &&  <> 
                                <h3 className='text-xl sm:text-2xl md:text-4xl text-center'>Estimado participante, su evaluacion se considera <strong> {status}</strong></h3> 
                                <h3 className='text-xl sm:text-2xl md:text-4xl mx-auto text-center my-2'>Con una puntuación total de {rate.toFixed(2)}, en base a 20 puntos</h3>
                                <h3 className='text-base sm:text-lg md:text-xl mx-auto text-center text-blue-700 my-2'>Revisa tu correo alli estará el certificado de realizacion del curso</h3>
                                <img alt="Examen completado" src={ExamenSvg}/>

                        </>
                }
            </div>

            {
                (user && email )
                    ? $questionsNode 
                    : <GetUserData onSetEmail={setEmail} onSetUser={setUser} />
            }
            {
                (user && email && questions.length != 0) && 
                <Container maxWidth="sm">    
                    <Stack direction="row" spacing={2}>
                        <Pagination count={questions.length} page={page} onChange={handleChangePage} color="primary" className="justify-center shadow-none" />
                    </Stack>
                </Container>
            }            
           
        </div>
    );
}

export default Quiz;
