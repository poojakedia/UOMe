import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseInit';
import fdb from '../firebaseInit';
import { collection, getDocs,setDoc, doc } from "firebase/firestore";


export async function createChat(user1, user2){
    const chat_id = user1+" "+user2;
    try{
        const chatRef = doc(fdb, 'chats', chat_id);
        const response = await setDoc(chatRef, {
            user1: user1,
            user2: user2,
            balance: 0

        })
        
        const messagesRef = collection(chatRef, 'messages');

        return chatRef;
    }catch (error) {
        console.error("Error setting default profile values:", error.message);
        
      }
}

function get_numerics(text){
    for (let i = 0; i < text.length; i++) {
        if (typeof i === 'number' || i === '.'){
            
        }
    }
}

export async function createMessage(chat_id, sender, text){
    try{
        const chatRef = doc(fdb, 'chats', chat_id);
        const messageRef = collection(chatRef, "messages");

        
        try{
            await addDoc(messageRef,{
                text: text,
                sender: sender,
            })
        }catch(error){
            console.log(error);
        }
    }catch(error){
        console.log(error);
    }
}

export async function getMessages(chat_id){
    const chatRef = doc(fdb, "chats", chat_id);

    const messageRef = collection(chatRef, "messages");
    try{
        const snapshot = await getDocs(messageRef);

        const messages = snapshot.docs.map(doc=>({
            id: doc.id,
            ...doc.data()
        }));
        return messages;
    } catch (error){
        console.error(error);
    }
}