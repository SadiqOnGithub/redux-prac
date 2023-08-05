const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  numOfIcecreams: 20,
};

const icecreamSlice = createSlice({
  name: 'ice cream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--;
    },
    restocked: (state, action) => {
      state.numOfIcecreams += action.payload || 1;
    },
  }
});


module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;