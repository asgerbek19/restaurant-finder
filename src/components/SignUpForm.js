//Daníel
import { doc, setDoc } from "@firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { usersRef } from "../firebase-config";



export default function SignUpForm() {
const auth = getAuth();

function signUp(event){
    event.preventDefault();
const email = event.target.email.value;
const password = event.target.password.value;
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential)=> {
    //Signed in
    const user = userCredential.user;
    const docRef = doc(usersRef, user.uid);
    setDoc(docRef, {email});
})
.catch((error) => {
    if (error.code === "auth/email-already-in-use") {
        alert("Denne email er allerede i brug");
    } 
  });
}
    return (
        <div>
            <form onSubmit={signUp}>
                <label>E-mail</label>
                <input type="text" name="email" id="email" placeholder="Indtast din e-mail"></input>
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="Indtast dit ønskede password"></input>
                <button>Opret bruger</button>
            </form>
        </div>
    )
}
