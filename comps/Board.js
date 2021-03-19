import Card from './Card'

let Board = (props) => {
let stripesId = props.stripesId;
  console.log(props);
  
  return (
    <div>
      {props.cards.map((aCard) => {
        let key = aCard.color + aCard.shape + aCard.pattern + aCard.num;
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