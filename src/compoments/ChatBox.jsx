import Message from "./Message";

const ChatBox = () => {
  const messages = [
    {
      id: 1,
      text: "Hello there!",
      name: "Trez Dev"
    },
    {
      id: 2,
      text: "Hello!",
      name: "Ida QA"
    },
  ];
  return (
    <div className="pb-44 pt-20 containerWrap">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
export default ChatBox;
