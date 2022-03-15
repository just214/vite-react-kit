import { Emoji } from "./components/Emoji";

const App = () => {
  return (
    <div>
      <p className="text-3xl">
        Hello <Emoji symbol="👋" label="Hello" />
      </p>
    </div>
  );
};

export default App;
