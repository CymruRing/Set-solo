import Shapes from './Shapes.js'

// Not currently providing unique keys to shape comps

// given card attributes, shape, color, pattern, number and height creates the card
const Card = ({props}) => {
  // console.log('key ', props.key);
  // console.log(props);
  let temp = [];
  for (let i = 0; i < props.num; i++) {
    temp.push({color: props.color, shape: props.shape, pattern: props.pattern});
  }
  return (
    <span>
      {temp.map((aShape) => {
        return (
          <Shapes height={'100'} color={aShape.color} shape={aShape.shape}  pattern={aShape.pattern} temp={props.key}/>
        );
      })}
    </span>
  )
};

export default Card;