import Card from './Card'

let Board = (props) => {
  return (
    <div>
      {props.cards.map((aCard) => {
        if (!aCard) {
          return (<></>);
        }
        let key = (aCard) ? aCard.color + aCard.shape + aCard.pattern + aCard.num : 'temp';
        aCard.key = key;
        return (
          <div>
            <Card props={aCard} />
          </div>
        );
      })}
    </div>
  );
}

module.exports = Board;