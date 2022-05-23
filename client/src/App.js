import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import store from "./store"
import {Provider} from "react-redux"
import {Routes, Route} from "react-router-dom" 
import Landing from "./components/Layout/Landing"
import Register from "./components/Auth/Register"
import Login from "./components/Auth/Login"
import PrivateRoute from "./components/Routing/PrivateRoute"
import Navbar from "./components/Layout/Navbar"
import Alert from "./components/Layout/Alert"

const App = () => {

	
	
  return (
	<Provider store={store}>
		<Alert />
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
