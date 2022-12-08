/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';


function App() {
	return (
		<div className="app">
			<Router>
				<Routes>
					<Route path='/' element={<Login />} ></Route>
					<Route  element={<MainLayout />} >
						<Route path='/dashboard' element={<Dashboard />} />
					</Route>
				</Routes>
			</Router>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
}

export default App;
