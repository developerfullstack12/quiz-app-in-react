import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { saveProgress , clearStorage} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import './style.css'

function Home() {

    const notify = () => toast("Please reset your progress!");
    const store = useSelector(state => state)
    console.log(store, 'store')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [save_progress, set_save_progress] = useState(store.save_progress)

    React.useEffect(()=> {

        if( store.save_progress !== false){
            set_save_progress(true)
        }else{
            set_save_progress(false)
        }

       
    }, store.save_progress)

    return (
        <div >
            <div className='container-box'>

            <h1  className=" style-for-text">Click on play to start Quiz</h1>
            <h1  className=" style-for-text or">OR</h1>
            <h1   className=" style-for-text">Reset to Play Again</h1>
            <ToastContainer />
            <div className="btn-for-test paddings">
            <button className='btnStyle previous-btn' onClick={() =>{ 
                if(store.save_progress){
notify()
                }else{
                    navigate('/quiz/1')
                }
               
                
                } }>Play
                </button>
            

                <button className="next-btns" onClick={() =>{ 
              dispatch( clearStorage())
            //    dispatch(saveProgress())
                } }>Reset Progress
                </button>
                </div>

        </div>
        </div>
    )
}

export default Home