import React, {useEffect} from "react";
import { HeadingContent } from "./components/headingContent/headingContent";
import Footer from "./components/footer/footer";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout()
{
    const location = useLocation();

    /*
    const [isConnectedToSocket, setSockectConnection] = useState(false)


    // Create WebSocket connection.
    const socket = new WebSocket("ws://localhost:3000");

    console.log(socket)

    // Connection opened
    socket.addEventListener("open", (event) => {
      console.log("You are connected to socket");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("Message from server ", event.data);

      if(event.data == "NewOrder")
      {
        notifyHanlder();
      }
    });

    // Notification
    const notifyHanlder = () => {

      if(!("Notification" in window))
      {
        alert("Browser does not support notifications")
      }
      else
      {
        if(Notification.permission == 'granted')
        {
          new Notification("Hello notification");
        }
        else if (Notification.permission == 'default')
        {
          fetch(Notification.requestPermission()).then(permission => {
            if(permission == 'granted') 
            {
              new Notification("Hello notification");
            }
          })
        }
      }
    }

    */

    useEffect(() => {
      window.scrollTo(0,0);
    }, [location])

    return<>
    <HeadingContent/>
    <Outlet/>
    <Footer/>
    </>
}