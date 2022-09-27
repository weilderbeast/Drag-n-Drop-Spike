import { Reorder } from "framer-motion";
import { useState } from "react";

export const FramerReorder = () => {
  const [data, setData] = useState(
    [...Array(50).keys()].map((item, index) => ({
      id: index,
      text: item.toString(),
    }))
  );

  return (
    <Reorder.Group
      axis="y"
      values={data}
      onReorder={setData}
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "papayawhip",
        overflow: "auto",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        listStyle: "none",
      }}
    >
      {data.map((item) => (
        <Reorder.Item key={item.id} value={item}>
          <div
            style={{
              background: "white",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            {item.text}
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
