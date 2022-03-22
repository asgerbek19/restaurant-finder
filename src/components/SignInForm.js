import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export default function SignInForm(){
    const auth = getAuth();

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
}
return(
    <div>
    Hej
    <form onSubmit={signIn}>
        <label>E-mail</label>
        <input type="text" name="email" id="email" placeholder="Indtast din e-mail"></input>
        <label>Password</label>
        <input type="password" name="password" id="password" placeholder="Indtast dit password"></input>
        <button>Log Ind</button>
    </form>
</div>
);
}