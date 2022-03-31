//Daníel
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";

export default function SignInForm(){
    const auth = getAuth();
    const [errorMessage, setErrorMessage] = useState("");

    function signIn(event){ 
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
  })
  .catch(error => {
    let code = error.code; // saving error code in variable
    console.log(code);
    code = code.replaceAll("-", " "); // some JS string magic to display error message. See the log above in the console
    code = code.replaceAll("auth/", "");
    setErrorMessage(code);
});
    }
return(
    <div>
    <form onSubmit={signIn}>
        <label>E-mail</label>
        <input type="text" name="email" id="email" placeholder="Indtast din e-mail"></input>
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="Indtast dit password"></input>
        <p className="text-error">{errorMessage}</p>
        <button>Log ind</button>
    </form>
</div>
);
}