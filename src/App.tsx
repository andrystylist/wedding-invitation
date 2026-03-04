import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <section className="h-[200px] fixed top-0 left-0 right-0 z-10 w-screen">
          <nav className="w-full">
            <ul className="flex flex-row justify-between list-none">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">RSVP</a>
              </li>
            </ul>
          </nav>
        </section>
        <div className="">
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </main>
    </>
  );
}

export default App;
