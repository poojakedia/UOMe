import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from '../firebaseInit'

const fdb = getFirestore(app);
const auth = getAuth(app);
const createUserHandler = async(name,email, password)=> {
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(fdb, 'users', auth.currentUser.uid), {
                    name: name,
                    email: email,
                    password: password
                });
        console.log(response);

    }catch(error){
        console.log(error); 
        alert("Registration Failed:" + error.message)
    }
    
  
}
export default createUserHandler;