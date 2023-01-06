import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1492652302,
    title: "build: update actions/checkout digest to 7dd9e2a",
    state: "open",
    url: "https://api.github.com/repos/angular/angular/issues/48460",
    createdAt: "2022-12-12T20:02:45Z",
    updatedAt: "2022-12-13T20:02:45Z",
  },
  {
    id: 1492636893,
    title: "docs: call interval methods explicitly from window",
    state: "open",
    url: "https://api.github.com/repos/angular/angular/issues/48459",
    createdAt: "2022-12-12T21:05:11Z",
    updatedAt: "2022-12-13T21:02:45Z",
  },
];

const storageArray = [...initialState];

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addNew(state, action) {
      storageArray.push(action.payload);
      return [...state, action.payload];
    },
    edit(state, action) {
      return state.map((i) => {
        if (i.id === action.payload.id) {
          return action.payload;
        }
        return i;
      });
    },
    remove(state, action) {
      return state.filter((i) => {
        i.id !== action.payload;
      });
    },
    reload(state) {
      return state;
    },
    search(state, action) {
      console.log("storage: ", storageArray);
      console.log("action", action.payload);
      if (state.length === 0) {
        return storageArray.filter((i) => {
          let isMatch = false;
          Object.values(i).forEach((element) => {
            if (element.toString().includes(action.payload)) isMatch = true;
          });
          return isMatch;
        });
      }
      // if (action.payload === "") return state;
      return state.filter((i) => {
        let isMatch = false;
        Object.values(i).forEach((element) => {
          if (element.toString().includes(action.payload)) isMatch = true;
        });
        return isMatch;
      });
    },
  },
});

const store = configureStore({ reducer: crudSlice.reducer });

export const crudActions = crudSlice.actions;

export default store;
