const { configureStore } = require("@reduxjs/toolkit");
const { default: TudoSlice } = require("../slices/TudoSlice");

const Store = configureStore({
    reducer:{
        TUDO:TudoSlice
    }
})

export default Store