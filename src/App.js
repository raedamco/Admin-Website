import "./App.css";
import UserForm from "./Users/UserForm";
import { FirebaseContext } from "./firebase";
function App() {
	console.log("here");
	return (
		<FirebaseContext.Consumer>
			{(firebase) => <UserForm firebase={firebase} />}
		</FirebaseContext.Consumer>

		// <div className="App">
		//   <header className="App-header">
		//     <img src={logo} className="App-logo" alt="logo" />
		//     <p>
		//       Edit <code>src/App.js</code> and save to reload.
		//     </p>
		//     <a
		//       className="App-link"
		//       href="https://reactjs.org"
		//       target="_blank"
		//       rel="noopener noreferrer"
		//     >
		//       Learn React
		//     </a>
		//   </header>
		// </div>
	);
}

export default App;
