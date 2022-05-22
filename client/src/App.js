import React, {Fragment,useState, useEffect} from "react"
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import Chart from "./components/Chart/Chart"
import store from "./store"
import {Provider} from "react-redux"
import {Routes, Route} from "react-router-dom" 
import Landing from "./components/Layout/Landing"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import PrivateRoute from "./components/Routing/PrivateRoute"
import {loadUser} from "./actions/auth"
import Navbar from "./components/Layout/Navbar"

	const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
		id: 'e2',
		title: 'New TV',
		amount: 799.49,
		date: new Date(2021, 2, 12)
	},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

const App = () => {


	// useEffect(() => {
	// 	store.dispatch(loadUser())
	// }, [])
	
	
  return (
	<Provider store={store}>
		<Navbar />
		<Routes>
			<Route exact path="/" element={<Landing />}/>
			<Route exact path="/register" element={<Register />}/>
			<Route exact path="/login" element={<Login />}/>
			<Route path="/dashboard" element={
					<PrivateRoute>
						<div>  
							<NewExpense/> 
							<Expenses />
						</div>
					</PrivateRoute>}>
			</Route>
		</Routes>
	</Provider>
  );
}

export default App;
