import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import LifeCycleA from "./Components/LifeCycleA";
import RefsDemo from "./Components/RefsDemo";
import FocusInput from "./Components/FocusInput";
import PortalDemo from "./Components/PortalDemo";
import Hero from "./Components/Hero";
import ErrorBoundary from "./Components/ErrorBoundary";
import ClickCounter from "./Components/ClickCounter";
import ComponentHover from "./Components/ComponentHover";
import ClickCounter2 from "./Components/ClickCounter2";
import HoverCounter2 from "./Components/HoverCounter2";
import User from "./Components/User";
import Counter2 from "./Components/Counter2";
import PureParent from "./Components/PureParent";
import ComponentC from "./Components/ComponentC";
import { UserProvider } from "./Components/UserContext";

function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <LifeCycleA/> */}

      {/* <RefsDemo/> */}

      {/* <FocusInput/> */}

      {/* <PortalDemo/> */}

      {/* <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Sam" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>
       */}

      {/* <ClickCounter name='Samadhan'/>
       <ComponentHover name='Manasi'/> */}

      {/* <PureParent /> */}

      {/* <ClickCounter2/>
       <HoverCounter2/>
      <User name={(isLoggedIn)=>isLoggedIn?'Samadhan':'Guest'} /> */}

      {/* <Counter2
        render={(count, incrementCount) => (
          <ClickCounter2 count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter2
        render={(count, incrementCount) => (
          <HoverCounter2 count={count} incrementCount={incrementCount} />
        )}
      /> */}

      <UserProvider value="Samadhan">
        <ComponentC/>
      </UserProvider>

    </div>
  );
}

export default App;
