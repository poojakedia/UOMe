import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebaseInit';
import { fdb } from '../firebaseInit';
import { collection, getDocs,setDoc, doc, updateDoc, increment, getDoc, addDoc } from "firebase/firestore";


export async function createChat(user1, user2){
    const chat_id = user1+" "+user2;
    try{
        const chatRef = doc(fdb, 'chats', chat_id);
        const response = await setDoc(chatRef, {
            user1: user1,
            user2: user2,
            balance1: 0,
            balance2: 0

        })
        
        const messagesRef = collection(chatRef, 'messages');

        return chatRef;
    }catch (error) {
        console.error("Error setting default profile values:", error.message);
        
      }
}

function get_numerics(text){
    let cost = ""
    for (let i = 0; i < text.length; i++) {
        if ((text[i] >= '0' && text[i] <= '9') || text[i] === '.'){
            cost+= text[i];
        }
    }
    return Number(cost);
}

export async function updateBalances(chat_id, sender, cost){
    const chatRef = doc(fdb, "chats", chat_id);
    const chat = await getDoc(chatRef);
    const chatData = chat.data();
    const user1 = chatData.user1;
    const user2 = chatData.user2;
    
    if(sender === user1){
        await updateDoc(chatRef, {
            balance1: increment(cost)
        })
    } 
    if(sender === user2){
        await updateDoc(chatRef, {
            balance2: increment(cost)
        })
    }
}
export async function createMessage(chat_id, sender, text){
    try{
        const chatRef = doc(fdb, 'chats', chat_id);
        const messageRef = collection(chatRef, "messages");
        const cost = get_numerics(text);
        
        
        try{
            await addDoc(messageRef,{
                text: text,
                sender: sender,
            })
            await updateBalances(chat_id,sender,cost);
        }catch(error){
            console.log(error);
        }
    }catch(error){
        console.log(error);
    }
}

export async function getMessages(chat_id){
    console.log("Firestore instance:", fdb);
    const chatRef = doc(fdb, "chats", chat_id);
    console.log("chat is", chatRef);
    const messageRef = collection(chatRef, "messages");
    try{
        const snapshot = await getDocs(messageRef);

        const messages = snapshot.docs.map(doc=>({
            id: doc.id,
            ...doc.data()
        })).reverse();
        return messages;
    } catch (error){
        console.error(error);
    }
}

export async function getBalance1(chat_id) {
    const chatRef = doc(fdb, "chats", chat_id);
    const chat = await getDoc(chatRef);
    const chatData = chat.data();
    const balance1 = chatData.balance1;
    const balance2 = chatData.balance2;

    return balance1;

    
}

export async function getBalance2(chat_id) {
    const chatRef = doc(fdb, "chats", chat_id);
    const chat = await getDoc(chatRef);
    const chatData = chat.data();
    const balance1 = chatData.balance1;
    const balance2 = chatData.balance2;

    return balance2;

    
}