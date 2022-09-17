const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  try {
    const theaterIxx = await promiseTheaterIXX();
    const theaterVgc = await promiseTheaterVGC();

    const combinedTheater = theaterIxx.concat(theaterVgc);

    let emosiPenonton = 0;

    for (i = 0; i < combinedTheater.length; i++) {
      if (combinedTheater[i].hasil == emosi) {
        emosiPenonton += 1;
      }
    }
    return emosiPenonton;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  promiseOutput,
};
