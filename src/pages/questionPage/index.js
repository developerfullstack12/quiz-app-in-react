

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import Data from '../../utils/data'
import './style.css'
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented, answered, saveProgress } from '../../redux/actions'


function QuestionPage() {

    
    const store = useSelector(state => state)
    console.log(store, 'store')

    const dispatch = useDispatch()

    const [selected, setSelected] = useState(null)

    const Data = store.data

    const parameters = useParams();
    const navigate = useNavigate()
    let currentQuestion = 1
    let data = Data.filter(question => question.number === currentQuestion)
    const [quesRef, setQuesRef] = useState(data)


    useEffect(() => {
        if (Number(parameters.no)) {
            currentQuestion = Number(parameters.no);
        }

        data = Data.filter(question => question.number === currentQuestion)
        // quesRef = data
        setQuesRef(data)
        console.log(parameters, quesRef)
    }, [parameters.no])

    const handleClick = (ind,question) => {
        setSelected(ind + 1)
        dispatch(answered({
            ...question,
            selected:ind + 1
        }))
    }

    const SaveProgress = () => {
        dispatch(saveProgress())
    }

    return (
        <div>
            <div className="container-box">
              <div className="brand-icon-head">
              <h5 className="brand-icon"><li></li>BRAND</h5>
                <h3>Developer quiz</h3>
                  <button className="save-progress" onClick={()=> SaveProgress()}>Save Progress</button>
              </div>
              <div className="container-box-padding">
              
                <p className="questions"><span>{quesRef[0].number}</span>{quesRef[0].question}</p>
                {quesRef[0].answers.length && quesRef[0].answers.map((a, index) => (<div className="quzioption">
                    <button className={selected === (index + 1) && selected === quesRef[0].correct ? 'greenBackground ' : selected === (index + 1) && selected !== quesRef[0].correct ? 'redBackground ' : quesRef[0].selected === (index + 1 ) ? 'pinkBackground  ' : null} onClick={() => handleClick(index,quesRef[0])}>{index + 1}  {a}</button>
                </div>))}
                {

                    quesRef[0].number !== 7 ?
                        <>
                        <div className="btn-for-test">

                            <button className="previous-btn" disabled={(quesRef[0].number === 1) || store.save_progress} onClick={() => {
                                if (quesRef[0].number !== 1) {
                                    setSelected(null)
                                    dispatch(decremented())
                                    navigate(`${quesRef[0].number - 1}`)
                                }
                            }}>Previous</button>
                            <button className="next-btns" onClick={() => {
                                setSelected(null)
                                dispatch(incremented())
                                navigate(`${quesRef[0].number + 1}`
                                )
                            }}>next</button>
                            </div>
                        </>
                        : <button className="submit-btns" onClick={() => {
                            setSelected(null)
                            dispatch(saveProgress())
                            navigate('/'
                            )
                        }}>Submit</button>
                }
            </div>
            </div>
        </div>
    )
}

export default QuestionPage
