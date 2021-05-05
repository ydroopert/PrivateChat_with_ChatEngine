import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import OptionsSettings from "./components/OptionsSettings";
import LoginForm from './components/LoginForm';

const projectID = '98b3415e-e10b-4f1a-bca1-488cf9165465';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      renderOptionsSettings={(creds, chats) => <OptionsSettings {...creds} {...chats} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
