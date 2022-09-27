import { useMemo, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { DraggableComponent } from "./draggable";

export const ReactBeautifulDnd = () => {
  const [data, setData] = useState(
    [...Array(50).keys()].map((item, index) => ({
      id: index,
      text: item.toString(),
    }))
  );

  const onDragEnd = (result: DropResult) => {
    setData((prev) => {
      if (!result.destination) {
        return prev;
      }
      const arr = prev;
      const itemToMove = arr.splice(result.source.index, 1)[0];
      arr.splice(result.destination?.index, 0, itemToMove);
      console.log("moved", result.source.index, result.destination.index);

      return [...arr];
    });
  };

  const items = useMemo(() => {
    return data.map((item, index) => (
      <DraggableComponent content={item.text} index={index} key={item.id} />
    ));
  }, [data]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="simple-cool-list">
        {(provided) => (
          <div
            ref={provided.innerRef}
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
            {...provided.droppableProps}
          >
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
