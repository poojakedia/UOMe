import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import app from '../firebaseInit'

const fdb = getFirestore(app);
const auth = getAuth(app);
const createUserHandler = async(fname,lname,email, password)=> {
    try{
        console.log(email);
        const response = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(fdb, 'users', auth.currentUser.uid), {
                    firstName: fname,
                    lastName: lname,
                    email: email
                });
        console.log(response);

    }catch(error){
        console.log(error); 
    }
    
  
}
export default createUserHandler;