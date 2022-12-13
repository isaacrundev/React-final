import { createSlice, configureStore } from "@reduxjs/toolkit";

const issuesData = [
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

const initialState = { issuesData: issuesData };

const dataSlice = createSlice({ name: "", id: null, reducer: {} });

const store = configureStore({ reducer: {} });

export default store;
