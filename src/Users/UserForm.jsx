import React, { useState, useEffect } from "react";
// TODO change to api request
async function getCompanies(firebase) {
	const theCompanies = [];

	const querySnapshot = await firebase.database.collection("Companies").get();

	querySnapshot.docs.map((doc) => {
		//
		if (Object.keys(doc.data()).length > 0) {
			theCompanies.push(doc.data().Info.Name);
			return doc.data().Info.Name;
		}
	});
	return await theCompanies;
}
export default function UserForm({ firebase }) {
	function submitHandler() {
		//TODO send HTTP message to api
	}
	const [config, setConfig] = useState({});
	const [companies, setCompanies] = useState([]);
	const [companySelector, setCompanySelector] = useState(null);
	const changeHandler = () => {};

	useEffect(() => {
		getCompanies(firebase).then(setCompanies);
	}, []);
	useEffect(() => {
		if (companies.length != 0) {
			setCompanySelector(
				companies.map((value) => (
					<option key={value} value={value}>
						{value}
					</option>
				))
			);
		}
	}, [companies]);

	// TODO validate form input
	// TODO make user creation with authentication
	// TODO UUID on account creation

	// only manage database not authentication for now
	// company drop down menu
	// Email
	// Password
	// Name

	return (
		<div className="row">
			<div className="col-6">
				<h2>New User:</h2>
				<form onSubmit={submitHandler}>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={config.email}
							onChange={changeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="name"
							className="form-control"
							id="name"
							name="name"
							value={config.name}
							onChange={changeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={config.password}
							onChange={changeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							className="form-control"
							id="confirmPassword"
							name="confirmPassword"
							value={config.confirmPassword}
							onChange={changeHandler}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="companies">Company</label>
						<select
							className="form-control"
							id="companies"
							name="companies"
							value={config.companies}
							onChange={changeHandler}
						>
							{companySelector}
						</select>
					</div>

					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}
