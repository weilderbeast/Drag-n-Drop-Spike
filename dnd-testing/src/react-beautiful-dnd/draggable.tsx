import { Draggable } from "react-beautiful-dnd";

type Props = {
  content: string;
  index: number;
};

export const DraggableComponent = ({ content, index }: Props) => {
  return (
    <Draggable draggableId={content} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ background: "white", borderRadius: "8px", padding: "16px" }}
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};
