import Card from './Card'

let Board = (props) => {

  console.log(props);

  return (
    <div>
      {props.cards.map((aCard) => {
        return (
          <div key={aCard.color + aCard.shape + aCard.pattern + aCard.num}>
            <Card props={aCard} />
          </div>
        );
      })}
    </div>
  );
}

module.exports = Board;