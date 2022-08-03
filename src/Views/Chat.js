import React, {useContext, useEffect} from "react";
import {db} from "../config/config";
import {
    collection,
    getDocs,
    addDoc,
    query,
    onSnapshot
} from "firebase/firestore";
import {useState} from "react";
import {AuthContext} from "../context/authContext";

function Chat() { // console.log("db :>> ", db);
    const {user} = useContext(AuthContext);
    const [messages, setMessages] = useState(null);
    const [chatMsg, setChatMsg] = useState("");

    const getMessages = async () => {
        try {
            const q = query(collection(db, "chat"));
            onSnapshot(q, (querySnapshot) => {
                const msgs = [];
                querySnapshot.forEach((doc) => {
                    msgs.push(doc.data());
                    console.log("msgs", msgs);
                    setMessages(msgs);
                });
            });
        } catch (error) {
            console.log("error :>> ", error);
            console.log("error :>> ", error);
        }
    };
    useEffect(() => {
        getMessages();
    }, []);

    const handleChatMsgHandler = (e) => {
        setChatMsg(e.target.value);
    };

    const msgDate = (time) => {
        return new Date(time * 1000).toLocaleTimeString;
    };

    const handleSendMsgHandler = async () => {
        const newChatMsg = {
            text: chatMsg,
            author: user.email,
            date: new Date()
        };
        try {
            const docRef = await addDoc(collection(db, "chat"), newChatMsg);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };

    return (
        <div>
            <h2>Chat</h2>
            {
            messages && messages.map((message, i) => {
                return (
                    <div key={i}
                        style={
                            {
                                backgroundColor: "grey",
                                color: "white"
                            }
                    }>
                        <p>{
                            message.text
                        }</p>
                        <p>{
                            message.author
                        }</p>
                        <p>{
                            msgDate(message.date)
                        }</p>
                    </div>
                );
            })
        }
            <input type="text" name="chat" id="chat"
                value={chatMsg}
                onChange={handleChatMsgHandler}/>
            <button onClick={handleSendMsgHandler}>Send</button>
        </div>
    );
}

export default Chat;
