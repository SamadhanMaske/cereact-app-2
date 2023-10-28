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

       <ClickCounter name='Samadhan'/>
       <ComponentHover name='Manasi'/>
    </div>
  );
}

export default App;
