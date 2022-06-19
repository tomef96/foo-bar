import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import * as FeedModule from "./features/feed";
import { ReactComponent as Logo } from "./twynner.svg";

const { Feed } = FeedModule.components;

const queryClient = new QueryClient({
  defaultOptions: { queries: { suspense: true } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className="App-title">
          <Logo />
          <h1>twynner</h1>
        </div>
        <Feed />
      </div>
    </QueryClientProvider>
  );
}

export default App;
