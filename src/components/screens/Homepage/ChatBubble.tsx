import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { aqMessage } from '../TextContent/aqMessageInfo';
import AqMessage from './AqMessage';

interface ChatBubbleProps {
  svg: number;
  aqMessageValue: {
    userGroupInfo: {
      [key: string]: any; // Adjust the type accordingly
    };
    color: string;
  };
  aqMessageStatment: string;
}

function ChatBubble(props: ChatBubbleProps) {
  const { svg, aqMessageValue, aqMessageStatment } = props;
  const [showText, setShowText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    setShowText(false); // Reset showText to false when svg prop changes

    const timer1 = setTimeout(() => {
      setShowText(true); // Show the first message after 2 seconds

      const timer2 = setTimeout(() => {
        setShowSecondText(true); // Show the second message after additional delay
      }, 2000); // Adjust the delay according to your preference

      return () => clearTimeout(timer2); // Clear the timer for the second message
    }, 2000); // Adjust the delay according to your preference

    return () => clearTimeout(timer1); // Clear the timer for the first message
  }, [aqMessageValue, svg]); // Include svg in the dependency array

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  return (
    <div className="relative chat chat-end mr-80 mt-5">
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
          animation: typing 1s steps(1) infinite;
          width: 1ch;
        }
      `}</style>

      <div
        className={`chat-bubble bg-white text-2xl text-start font-extralight text-black px-4 py-3 mt-5 mr-10 max-w-600 transition-all font-extralight`}
        style={{
          overflow: 'hidden',
          whiteSpace: 'normal',
          maxWidth: '500px', // Allow text wrapping
        }}
      >
        {aqMessageStatment}
      </div>
      <div
        className={`chat-bubble bg-white text-2xl text-start font-extralight text-black px-4 py-3 mt-5 mr-10 max-w-600 transition-all font-extralight`}
        style={{
          overflow: 'hidden',
          whiteSpace: 'normal',
          maxWidth: '800px', // Allow text wrapping
        }}
      >
        {showText ? (
          aqMessageValue.color !== aqMessage['low'].color ? (
            <span>
              {aqMessageValue.userGroupInfo[svg].healthMessage}
              <Link to="/map" className="font-normal">
                Se områder i kart
              </Link>
            </span>
          ) : (
            aqMessageValue.userGroupInfo[svg].healthMessage
          )
        ) : (
          <span className="ellipsis"></span>
        )}
      </div>
      <div className="chat-footer opacity-50 mr-10">
        Sent {hours}:{minutes}
      </div>
    </div>
  );
}

export default ChatBubble;
