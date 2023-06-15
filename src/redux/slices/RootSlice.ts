import {createSlice} from "@reduxjs/toolkit"

const rootSlice = createSlice({
  name: "root",
  initialState: {
    title: "Title",
    author: "Author",
    page_count: 0,
    is_hardcover: false,
    isbn: 1001101000001,
  },
  reducers: {
    chooseTitle: (state, action) => {state.title = action.payload},
    chooseAuthor: (state, action) => {state.author = action.payload},
    choosePageCount: (state, action) => {state.page_count = action.payload},
    chooseIsHardcover: (state, action) => {state.is_hardcover = action.payload},
    chooseISBN: (state, action) => {state.isbn = action.payload},
  }
})

export const reducer = rootSlice.reducer;
export const {chooseTitle, chooseAuthor, choosePageCount, chooseIsHardcover, chooseISBN} = rootSlice.actions;