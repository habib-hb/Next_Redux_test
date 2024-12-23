import { createSlice } from '@reduxjs/toolkit';

const nameChangerSlice = createSlice({
  name: 'name_changer',
  initialState: { values: ['Habib' , 'Abid' , 'Momena' , 'Tamim' , 'Tahmid' , 'Kawser' , 'Tohofa' , 'Tanjila' , 'Sajid' ] , name: 'Habib' , serial : 0 , notification: '' },
  reducers: {
    next_name: (state) => {

      state.serial += 1;

      if(state.serial >= state.values.length){
        state.serial = 0;
      } 

      state.name = state.values[state.serial];
    },
    prev_name: (state) => {
      state.serial -= 1;

      if(state.serial < 0){
        state.serial = state.values.length - 1;
      } 

      state.name = state.values[state.serial];
    },

    new_name: (state , action) => {
      state.values.push(action.payload);
      state.notification = 'Name Added.';
    }, 

    clear_notification: (state) => {
      state.notification = '';
    }
  },
});

export const { next_name , prev_name , new_name , clear_notification} = nameChangerSlice.actions;
export default nameChangerSlice.reducer;