import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config()


const PORT = process.env.PORT || 9001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(cors());

const moderatorPermissions = [
  "room.list_available_layouts",
  "room.recording",
  "room.playback",
  "room.set_layout",
  "room.member.audio_mute",
  "room.member.audio_unmute",
  "room.member.deaf",
  "room.member.undeaf",
  "room.member.remove",
  "room.member.set_input_sensitivity",
  "room.member.set_input_volume",
  "room.member.set_output_volume",
  "room.member.video_mute",
  "room.member.video_unmute",
];
const normalPermissions = [
  "room.self.audio_mute",
  "room.self.audio_unmute",
  "room.self.video_mute",
  "room.self.video_unmute",
  "room.self.deaf",
  "room.self.undeaf",
  "room.self.set_input_volume",
  "room.self.set_output_volume",
  "room.self.set_input_sensitivity",
  "room.hide_video_muted",
  "room.show_video_muted",
];

const permissionsCheck = (mod) => {
  if (mod) {
    return [...normalPermissions, ...moderatorPermissions];
  } else {
    return moderatorPermissions;
  }
};

const auth = {
  username: process.env.SIGNALWIRE_PROJECT_KEY, // Project-ID
  password: process.env.SIGNALWIRE_TOKEN, // API token
};
const apiurl = process.env.SIGNALWIRE_SPACE; // <your username>.signalwire.com

app.use(express.static(path.resolve(__dirname, "../dist")));

app.post("/api/get_token", async (req, res) => {
  try {
    let token = await axios.post(
      "https://" + apiurl + "/api/video/room_tokens",
      {
        user_name: "test",
        room_name: "room_test",
        permissions: permissionsCheck(true),
      },
      { auth }
    );

    token = token.data?.token;
    return res.json({ token });
  } catch (e) {
    console.log(e);
    return res.status(500);
  }
});

// All other GET requests not handled before will return our React app
// app.get("/room", (req, res) => {
//   res.sendFile(path.resolve("room.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
