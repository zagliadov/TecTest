import axios from 'axios';
import * as SignalWire from "@signalwire/js";

console.log('hello')

async function connect() {
  // Get an authentication token (This is for demo purposes only. Not for production use!)
  const reply = await axios.post(
    "https://guides.swrooms.com/public/video_token",
    {
      user_name: "user",
      room_name: "room"
    }
    
  );

  // Configuration
  const roomSession = new SignalWire.Video.RoomSession({
    rootElement: document.getElementById("video"),
    token: reply.data.token
  });

  // Join the room
  await roomSession.join();
  console.log(roomSession)
}

connect();