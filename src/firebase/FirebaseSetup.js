import app from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyC6n_0MqCxrZIIWM_smT9eVjKRMeBpWMG8",
	authDomain: "theory-parking.firebaseapp.com",
	databaseURL: "https://theory-parking.firebaseio.com",
	projectId: "theory-parking",
	storageBucket: "theory-parking.appspot.com",
	messagingSenderId: "192548003681",
	appId: "1:192548003681:web:b21ac8333b9acffc9caf20",
	measurementId: "G-360MP31ZY4",
};
class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
		this.database = app.firestore();
	}
}

export default Firebase;

// import app from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/analytics";
// const firebaseConfig = {
// 	apiKey: "AIzaSyCKghNDOPOufY-8SYVGW4xpOeZC3fDVZko",
// 	authDomain: "theory-parking.firebaseapp.com",
// 	databaseURL: "https://theory-parking.firebaseio.com",
// 	projectId: "theory-parking",
// 	storageBucket: "theory-parking.appspot.com",
// 	messagingSenderId: "192548003681",
// 	appId: "1:192548003681:web:1f092e58a62891359caf20",
// 	measurementId: "G-D9YWC0BFVD",
// };
// const devConfig = {};
// class Firebase {
// 	constructor() {
// 		app.initializeApp(firebaseConfig);
// 		app.analytics();
// 		this.auth = app.auth();
// 		this.database = app.firestore();
// 	}
// }
// // export const auth = Firebase.auth();
// // export const database = Firebase.firestore();
// // export const storage = Firebase.storage();
// export default Firebase;
