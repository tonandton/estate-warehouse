import { useState } from "react";
import "./chat.scss";

function Chat() {
  const [chat, setChat] = useState(false);

  return (
    <div className="chat">
      <div className="messages">
        <h1>Message</h1>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
            alt=""
          />
          <span>John</span>
          <p>Lorem ipsum dolor, sit amet quibusdam.....</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
            alt=""
          />
          <span>John</span>
          <p>Lorem ipsum dolor, sit amet quibusdam.....</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
            alt=""
          />
          <span>John</span>
          <p>Lorem ipsum dolor, sit amet quibusdam.....</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
            alt=""
          />
          <span>John</span>
          <p>Lorem ipsum dolor, sit amet quibusdam.....</p>
        </div>
        <div className="message">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
            alt=""
          />
          <span>John</span>
          <p>Lorem ipsum dolor, sit amet quibusdam.....</p>
        </div>
      </div>
      <div className="chatBox">
        <div className="top">
          <div className="user">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl5EQY2tgjBIOIrmxMqKY9eYGeik2dz34zdQ&s"
              alt=""
            />
            John Doe
          </div>
          <div className="close">X</div>
        </div>
        <div className="center">
          <div className="chatMessage own">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage own">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
          <div className="chatMessage ">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit....</p>
            <span>1 hour ago</span>
          </div>
        </div>
        <div className="bottom">
          <textarea></textarea>
          <button>send</button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
