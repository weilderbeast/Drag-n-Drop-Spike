import "./App.css";
import DndKit from "./dnd-kit/dnd-kit";
import { FramerReorder } from "./framer/framer-reorder";
import { ReactBeautifulDnd } from "./react-beautiful-dnd/react-beautiful-dnd";
import { ReactDnd } from "./react-dnd/react-dnd";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100vw",
        height: "100vh",
        justifyContent: "space-evenly",
        padding: "64px",
        gap: "32px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "lightblue",
          overflow: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <DndKit />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          background: "pink",
          overflow: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <ReactDnd />
      </div>
      <div style={{ width: "100%" }}>
        <ReactBeautifulDnd />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <FramerReorder />
      </div>
    </div>
  );
}

export default App;
