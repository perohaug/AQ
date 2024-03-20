import { useEffect, useState } from 'react';
import { aqMessage } from '../TextContent/aqMessageInfo';
import AqMessage from './AqMessage';

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
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(false); // Reset showText to false when svg prop changes

    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [aqMessageValue, svg]); // Include svg in the dependency array

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return (
    <div className="relative chat chat-end mr-80 mt-20">
      <style>{`
        @keyframes typing {
          0%, 30% {
            content: '.';
          }
          40%, 70% {
            content: '..';
          }
          80%, 100% {
            content: '...';
          }
        }
        .ellipsis::after {
          display: inline-block;
          content: '.';
          overflow: hidden;
          vertical-align: bottom;
          animation: typing 2s steps(1) infinite;
          width: 1ch;
        }
      `}</style>
      <div
        className={`chat-bubble bg-white text-2xl font-light text-black px-4 py-3 mr-10 max-w-600 transition-all duration-200`}
        style={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {showText ? aqMessageValue.userGroupInfo[svg].healthMessage : <span className="ellipsis"></span>}
      </div>
      <div className="chat-footer opacity-50 mr-10">
        Sendt {hours}:{minutes}
      </div>
    </div>
  );
}

export default ChatBubble;
