// Use Use url in production, otherwise use local
const host = process.env.NODE_ENV === 'production' ? 'me-api.ponand.me' : 'localhost:1338';

// Send is used to send messages
export let send;

export let closeWs;

let onMessageCallback;

// Initialize the websocket connection to the server
export const startWebsocketConnection = () => {
  // A new Websocket connection is initialized with the server
  const ws = new window.WebSocket('ws://' + host + '/realtime') || {};

  ws.onopen = () => {
    console.log('Opened ws connection.');
  }

  ws.onclose = (e) => {
    console.log('close ws connection: ', e.code, e.reason);
  }

  ws.onmessage = (e) => {
    // The onMessageCallback function is called with the message
    // data as the argument
    onMessageCallback && onMessageCallback(e.data);
  }

  // We assign the send method of the connection to the exported
  // send variable that we defined earlier
  send = ws.send.bind(ws);
  closeWs = ws.close.bind(ws)
}

// This function is called by our React application to register a callback
// that needs to be called everytime a new message is received
export const registerOnMessageCallback = (fn) => {
  // The callback function is supplied as an argument and assigned to the
  // `onMessageCallback` variable we declared earlier
  onMessageCallback = fn;
}
