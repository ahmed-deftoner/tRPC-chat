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

    return <div>welcome to room {roomId}</div>

}

export default RoomPage;