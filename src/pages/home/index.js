import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { saveProgress , clearStorage} from '../../redux/actions'
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';

function Home() {

    const notify = () => toast("Please reset your progress!");
    const store = useSelector(state => state)
    console.log(store, 'store')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [save_progress, set_save_progress] = useState(store.save_progress)

    React.useEffect(()=> {

        set_save_progress(!save_progress)
    }, store.save_progress)

    return (
        <div >

            <h1>You haven't taken quiz yet</h1>
            <ToastContainer />
            <button onClick={() =>{ 
                if(store.save_progress){
notify()
                }else{
                    navigate('/quiz/1')
                }
               
                
                } }>Play
                </button>

                <button onClick={() =>{ 
              dispatch( clearStorage())
               dispatch(saveProgress())
                
                } }>Reset Progress
                </button>

        </div>
    )
}

export default Home