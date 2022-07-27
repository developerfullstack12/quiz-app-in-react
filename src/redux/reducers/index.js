import { createSlice } from "@reduxjs/toolkit"  
import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage"
import Data from '../../utils/data'

const persistConfig = {
    key:'persist-root',
    storage
}

export  const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
    data:Data,
    save_progress:false
  },
  reducers: {
    incremented: state => {

      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.value += 1
      
    },
    decremented: state => {
      state.value -= 1
    },

    answered: (state, {payload}) =>{
      const data = state.data
      const newData = data.filter(dt=> dt.number !== payload.number);
      newData.push(payload)
      state.data = newData
      return state
    },

    saveProgress:(state) => {
      state.save_progress = !(state.save_progress)
    
    },
    
    clearStorage:(state) => {
      // const newState = {
      //   value: 1,
      //   data:Data,
      //   save_progress:false
      // }
      state.save_progress = !(state.save_progress)
      // localStorage.clear()
      // return newState
      
    }

  }
})

export const persistedReducer = persistReducer(persistConfig, counterSlice.reducer)
