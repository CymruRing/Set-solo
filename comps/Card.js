import Shapes from './Shapes.js'

// given card attributes, shape, color, pattern, number and height creates the card
const Card = ({props}) => {
  console.log(props);
  let temp = [];
  for (let i = 0; i < props.num; i++) {
    temp.push({color: props.color, shape: props.shape, pattern: props.pattern});
  }
  return (
    <span>
      {temp.map((aShape) => {
        return (
          <Shapes height={'100'} color={aShape.color} shape={aShape.shape}  pattern={aShape.pattern} />
        );
      })}
    </span>
  )
};

export default Card;