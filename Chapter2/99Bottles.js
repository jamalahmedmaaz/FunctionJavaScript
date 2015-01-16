/**
 * Created by Jamal on 16/1/15.
 */

/* Start - Imperative Programming style*/
var lyrics = [];

for (var bottles = 99; bottles > 0; bottles--) {
  lyrics.push(bottles + " Bottles of beer on the wall");
  lyrics.push(bottles + " Bottles of beer");
  lyrics.push("Take one down, pass it around");

  if (bottles > 1) {
    lyrics.push((bottles - 1) + " Bottles of beer on the wall");
  } else {
    lyrics.push("No more bottles of beer on the wall! ");
  }
}

/* Start - Imperative Programming style*/

function lyricSegement(n) {
  return _.chain()
    .push(n + " Bottles of beer on the wall")
    .push(n + " Bottles of beer")
    .push("Take one down, pass it around")
    .tap(function (lyrics) {
      if (bottles > 1) {
        lyrics.push((bottles - 1) + " Bottles of beer on the wall");
      } else {
        lyrics.push("No more bottles of beer on the wall! ");
      }
    }
  ).values();
}

function song(start, end, lyricGen) {
  return _.reduce(_.range(start, end, -1),
    function (acc, n) {
      return acc.concat(lyricGen(n))
    }, []);
}

song(99, 0, lyricSegement);

