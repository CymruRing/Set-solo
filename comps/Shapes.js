

let defs = (shape, color) => {
  if(shape == 'oval') {
    return(
      <defs>
        <pattern
          id={`ovalStripes_${color}`}
          patternTransform="rotate(90) scale(1.5 1)"
          xlinkHref={`#Strips1_1_O_${color}`}
        ></pattern>
        <pattern
          id={`Strips1_1_O_${color}`}
          width="2"
          height="1"
          patternTransform="scale(10)"
          patternUnits="userSpaceOnUse"
        >
          <path fill={color} stroke="none" d="M0 -0.5H1V1.5H0z"></path> 
        </pattern>
      </defs>
    );    
  } else if (shape == 'squiggle') {
    return (
      <defs>
        <pattern
          id={`squiggleStripes_${color}`}
          patternTransform="rotate(90) scale(.4 1)"
          xlinkHref={`#Strips1_1_S_${color}`}
        ></pattern>
        <pattern
          id={`Strips1_1_S_${color}`}
          width="2"
          height="1"
          patternTransform="scale(10)"
          patternUnits="userSpaceOnUse"
        >
          <path fill={color} stroke="none" d="M0 -0.5H1V1.5H0z"></path>
        </pattern>
      </defs>
    );
  } else if (shape == 'diamond') {
    return (
      <defs>
        <pattern
          id={`diamondStripes_${color}`}
          patternTransform="rotate(45) scale(1 1)"
          xlinkHref={`#Strips1_1_D_${color}`}
        ></pattern>
        <pattern
          id={`#Strips1_1_D_${color}`}
          width="2"
          height="1"
          patternTransform="rotate(45) scale(1.1)"
          patternUnits="userSpaceOnUse"
        >
          <path fill={color} stroke="none" d="M0 -0.5H1V1.5H0z"></path>
        </pattern>
      </defs>
    );
  }
}



function Shapes(props) {
  // console.log(props);

  let pattern = (props.pattern == 'empty') ? '#00000000' : props.pattern;
  if(pattern !== '#00000000' ) {
    pattern = (pattern === 'stripes') ? `url(#${props.shape}Stripes_${props.color})` : props.color;
  }
  if(props.shape == 'oval') { // Oval --------------------------------------------
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height={props.height}
        version="1.1"
        viewBox="0 0 50 100"
      >
      {defs(props.shape, props.color)}
        <g display="inline" opacity="1">
          <rect
            width="44.908"
            height="94.908"
            x="2.546"
            y="2.546"
            fill={pattern}
            fillOpacity="1"
            stroke={props.color}
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="3.092"
            rx="22.454"
            ry="21.862"
          ></rect>
        </g>
      </svg>
    );
  } else if(props.shape == 'squiggle') { // Squiggle -----------------------------
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height={props.height}
        version="1.1"
        viewBox="0 0 13.229 26.458"
      >
      {defs(props.shape, props.color)}
        <g>
          <path
            fill={pattern}
            fillOpacity="1"
            stroke={props.color}
            strokeDasharray="none"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.794"
            d="M1.413 1.453c4.07-1.789 6.694-.087 7.11.142.416.228 3.092 1.79 3.288 4.167.195 2.378-.682 6.49-1.754 8.404-1.072 1.914.108 4.637.494 5.996.386 1.359 1.982 2.34 2.024 2.772.042.43.045 2.718-3.3 2.874-3.344.155-5.775-2.851-6.355-3.685-.549-.79-1.203-4.214-1.048-6.306.076-1.017.962-2.808 1.41-4.517 0 0-.215-3.7-.99-4.891C1.52 5.217.388 3.538.714 2.715c.326-.822.7-1.262.7-1.262z"
          ></path>
        </g>
      </svg>
    );
  } else if(props.shape == 'diamond') { // diamond -------------------------------
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        height={props.height}
        version="1.1"
        viewBox="0 0 50 100"
      >
        {defs(props.shape, props.color)}
        <g>
          <path
            fill={pattern}
            fillOpacity="1"
            stroke={props.color}
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeWidth="3.308"
            d="M30.641 -26.22H81.919V25.058H30.641z"
            opacity="1"
            transform="scale(.62137 1.2704) rotate(45)"
          ></path>
        </g>
      </svg>
    );
  } else { // empty -------------------------------------------------------------
    return (
      <></>
    );
  }
  
};

export default Shapes;


/*

      */