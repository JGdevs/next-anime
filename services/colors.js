const { extractColors } = require('extract-colors');
const pixels = require('image-pixels');
const colorableDominant = require('colorable-dominant');

export async function getColors (image) {

  try {

    const {data, width, height} = await pixels(image),

    colors = await extractColors({data,width,height}),

    hexs = colors.map(el => el.hex),

    color = colorableDominant(hexs);

    return color;

  }

  catch(err) {console.log(err)}

}
