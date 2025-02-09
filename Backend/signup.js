import { setDoc, getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const fdb = getFirestore(app);
export const createUserHandler = async()=> {
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
                await setDoc(doc(fdb, 'users', auth.currentUser.uid), {
                    name: '',
                    email: email,
                    password: password
                });

    }catch(error){
        console.log(error); 
        alert("Registration Failed:" + error.message)
    }


  
}