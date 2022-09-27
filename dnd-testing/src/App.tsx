import "./App.css";
import DndKit from "./dnd-kit/dnd-kit";

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
        <DndKit />
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "greenyellow",
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
          backgroundColor: "papayawhip",
          overflow: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <DndKit />
      </div>
    </div>
  );
}

export default App;
