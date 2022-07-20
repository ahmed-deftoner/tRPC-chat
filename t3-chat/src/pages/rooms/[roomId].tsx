import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { Message } from "../../constants/schemas";
import { trpc } from "../../utils/trpc";

function RoomPage(){
    const { query } = useRouter();
    const roomId = query.roomId as string;
    const { data: session } = useSession();

    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState<Message[]>([]);

    const { mutateAsync: sendMessageMutation } = trpc.useMutation([
        "room.send-message",
      ]);
    
      trpc.useSubscription(
        [
          "room.onSendMessage",
          {
            roomId,
          },
        ],
        {
          onNext: (message) => {
            setMessages((m) => {
              return [...m, message];
            });
          },
        }
      );
    
    if (!session) {
        return (
          <div>
            <button onClick={() => signIn()}>Login</button>
          </div>
        );
      }

      return (
        
    
          <form
            className="flex"
            onSubmit={(e) => {
              console.log("submity");
              e.preventDefault();
    
              sendMessageMutation({
                roomId,
                message,
              });
    
              setMessage("");
            }}
          >
            <textarea
              className="black p-2.5 w-full text-gray-700 bg-gray-50 rounded-md border border-gray-700"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you want to say"
            />
    
            <button className="flex-1 text-white bg-gray-900 p-2.5" type="submit">
              Send message
            </button>
          </form>
      );

}

export default RoomPage;