import { createStore } from "redux";
// import { createSlice, configureStore } from "@reduxjs/toolkit";

const initIssueData = [
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

// const crudSlice = createSlice({
//   name: "crud",
//   issueData: initIssueData,
//   reducers: {
//     refresh(state) {
//       state.InitIssueData;
//     },
//     addNew() {},
//     edit() {},
//     remove() {},
//     searchInput() {},
//   },
// });

// const store = configureStore({
//   reducer: crudSlice.reducer,
// });

// export const crudActions = crudSlice.actions;

const IssueReducer = (state = { issueData: initIssueData }, action) => {
  if (action.type === "ADD_NEW") {
    return { issueData: [...issueData].concat(action.newData) };
  }
  if (action.type === "EDIT") {
    return { issueData: [...issueData] };
  }
  if (action.type === "REMOVE") {
    return { issueData: [...issueData] };
  }
  if (action.type === "REFRESH") {
    return state.issueData;
  }

  if (action.type === "SEARCH") {
    return state;
  }
  return state;
};

const store = createStore(IssueReducer);

export default store;
