import { aqMessage } from '../TextContent/aqMessageInfo';

interface ChatBubbleProps {
  svg: number;
  aqMessageValue: {
    userGroupInfo: {
      [key: string]: any; // Adjust the type accordingly
    };
  };
}

function ChatBubble(props: ChatBubbleProps) {
  const { svg, aqMessageValue } = props;
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return (
    <div className="relative chat chat-end mr-80 mt-20">
      <div
        className=" chat-bubble bg-white text-2xl font-light text-black px-4 py-3 mr-10"
        style={{ maxWidth: '600px' }}
      >
        {aqMessageValue.userGroupInfo[svg].healthMessage}
      </div>
      <div className="chat-footer opacity-50 mr-10">
        Sendt {hours}:{minutes}
      </div>
    </div>
  );
}

export default ChatBubble;
