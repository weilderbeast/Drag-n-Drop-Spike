import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import Card from "./card";

type Item = {
  id: number;
  text: string;
};

export const ReactDnd = () => {
  const [cards, setCards] = useState<Item[]>(
    [...Array(50).keys()].map((item) => ({
      id: item,
      text: item.toString(),
    }))
  );

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      })
    );
  }, []);

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    },
    []
  );

  return (
    <DndProvider backend={HTML5Backend}>
      {cards.map((card, i) => renderCard(card, i))}
    </DndProvider>
  );
};
