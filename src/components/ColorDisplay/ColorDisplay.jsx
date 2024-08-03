import React, { useEffect, useState } from 'react';
import { hexToRgb, calculateNewColor, rgbToHex } from '../../utils/ColorUtils';

const ColorDisplay = (props) => {

  const [isPresent, setPresent] = useState(false);
  const [resultColor, setResultColor] = useState();

  const colorOne = props.colorOne;
  const colorTwo = props.colorTwo;

  useEffect(() => {

    if (colorOne !== '' && colorTwo !== '') {

      const rgbOne = hexToRgb(colorOne);
      const rgbTwo = hexToRgb(colorTwo);

      const newColor = calculateNewColor(rgbOne, rgbTwo);

      const resultColor = rgbToHex(newColor);

      setPresent(true);
      setResultColor(resultColor);

    } else {

      setPresent(false);
      setResultColor('none');
      
    }

  }, [colorOne, colorTwo]);

  return (
    <div className='color-display' style={{ height: '200px', width: '200px', backgroundColor: isPresent ? resultColor : 'none' }}></div>
  )
}

export default ColorDisplay