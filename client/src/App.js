import Messenger from "./components/Messenger";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";
import TemplateProvider from "./theme/TemplateProvider";

function App() {
  return (
    <div className="App">
      <TemplateProvider>
      <AccountProvider>
        <UserProvider>
        <Messenger />
        </UserProvider>
      </AccountProvider>
      </TemplateProvider>
    </div>
  );
}

export default App;
