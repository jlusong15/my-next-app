import { combineReducers } from "@reduxjs/toolkit";
import integratedDataTable from "./integratedDataTable";
import simpleDataTable from "./simpleDataTable";

const dashboardSlice = combineReducers({
	simpleDataTable,
	integratedDataTable
})

export default dashboardSlice