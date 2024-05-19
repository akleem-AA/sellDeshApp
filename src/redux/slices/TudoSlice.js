const { createSlice } = require("@reduxjs/toolkit");

const TudoSlice = createSlice({
    name: 'TUDO',
    initialState: {
        data: [{ name: 'defualt', email: 'defual', address: 'default', phone: 1344 }],
    },
    reducers: {
        addTudo(state, action) {
            state.data.push(action.payload)
        },
        removeTudo(state, action) {
            state.data.splice(action.payload, 1)
        },
        editTudo(state, action) {
            const { index, inputValue } = action.payload;
            state.data = state.data.map((todo, i) =>
                i === index ? inputValue : todo
            );
        }

    }
})

export const { addTudo, removeTudo, editTudo } = TudoSlice.actions
export default TudoSlice.reducer