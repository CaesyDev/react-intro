import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketIOClient = () => {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [error, setError] = useState(null);

    // Define your server URL here
    const SERVER_URL = 'http://localhost:3333'; // Update with your server's address

    useEffect(() => {
        // Initialize socket connection
        const socket = io(SERVER_URL);

        // Listen for connection errors
        socket.on('connect_error', (err) => {
            setError(`Connection error: ${err.message}`);
        });

        // Listen for messages from the server
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        // Cleanup on component unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    // Handle sending messages
    const sendMessage = () => {
        const socket = io(SERVER_URL);
        socket.emit('message', inputMessage);
        setInputMessage(''); // Clear the input field
    };

    return (
        <div>
            <h1>Socket.IO Client</h1>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            <div>
                <h2>Messages:</h2>
                <ul>
                    {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                    ))}
                </ul>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default SocketIOClient;
