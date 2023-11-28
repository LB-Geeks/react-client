import "./App.css";

import ConfirmedAccomodationList from "./components/confirmedAccomodationList/ConfirmedAccomodationList";
import Navbar from "./components/navbar/Navbar";
import NeedAccomodationList from "./components/needAccomodationList/NeedAccomodationList";
import StatBox from "./components/statBox/StatBox";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hey Dear Friend!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true, 
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#f8f8ff',
    headerBgColor: '#eb2427',
    headerFontSize: '20px',
    botBubbleColor: '#eb2427',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "help.png",
    floating: true,
};
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <ThemeProvider theme={theme}>
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="HelpBot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
      <main>
        <StatBox />
<div class="container d-flex mt-4">
          <form class="d-flex" role="search">
          <input type="text" class="search-click" name="" placeholder="search here..." />
            <button class="d-flex btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
        <div class="container text-center">
          <div class="row">
        <NeedAccomodationList />
<ConfirmedAccomodationList />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
