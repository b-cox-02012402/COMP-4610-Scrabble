var tileLetters = [];
var boardPostions = [
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'double word',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'double letter',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'double letter',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'double word',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
  {
    tile: {
      type: 'standard',
      position: {
        top: null,
        left: null
      }
    }
  },
];

var ScrabbleTiles = [];
ScrabbleTiles["A"] = { "value": 1, "original-distribution": 9, "number-remaining": 9 };
ScrabbleTiles["B"] = { "value": 3, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["C"] = { "value": 3, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["D"] = { "value": 2, "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["E"] = { "value": 1, "original-distribution": 12, "number-remaining": 12 };
ScrabbleTiles["F"] = { "value": 4, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["G"] = { "value": 2, "original-distribution": 3, "number-remaining": 3 };
ScrabbleTiles["H"] = { "value": 4, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["I"] = { "value": 1, "original-distribution": 9, "number-remaining": 9 };
ScrabbleTiles["J"] = { "value": 8, "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["K"] = { "value": 5, "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["L"] = { "value": 1, "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["M"] = { "value": 3, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["N"] = { "value": 1, "original-distribution": 6, "number-remaining": 6 };
ScrabbleTiles["O"] = { "value": 1, "original-distribution": 8, "number-remaining": 8 };
ScrabbleTiles["P"] = { "value": 3, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["Q"] = { "value": 10, "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["R"] = { "value": 1, "original-distribution": 6, "number-remaining": 6 };
ScrabbleTiles["S"] = { "value": 1, "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["T"] = { "value": 1, "original-distribution": 6, "number-remaining": 6 };
ScrabbleTiles["U"] = { "value": 1, "original-distribution": 4, "number-remaining": 4 };
ScrabbleTiles["V"] = { "value": 4, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["W"] = { "value": 4, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["X"] = { "value": 8, "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["Y"] = { "value": 4, "original-distribution": 2, "number-remaining": 2 };
ScrabbleTiles["Z"] = { "value": 10, "original-distribution": 1, "number-remaining": 1 };
ScrabbleTiles["_"] = { "value": 0, "original-distribution": 2, "number-remaining": 2 };

var tempWidth = 0;

$().ready(() => {
  loadTiles();
  getBoardPositions();
  $(window).on('resize', () => {
    $('#holder-img').height($('#droppable-board').height() + 20);
    $('#holder-img').width(($('#droppable-board').width() / 15) * 7);
    const dimensions = $('#droppable-board').width() / 16;
    for (let i = 0; i < tileLetters.length; i++) {
      // $('#droppable-board').position() -
      var newImg = $(`<img src="Scrabble_Tiles/Scrabble_Tile_A.jpg" />`);
      let tileWidth = $('#holder-img').width() * -1;
      $(tileLetters[i]).css({
        'position': 'relative',
        'left': tileWidth,
        'height': dimensions,
        'width': dimensions
      });
    }
    getBoardPositions();
  });
  $('#submit').on('submit', () => submitBoard());
});

function getBoardPositions() {
  const boardPosTop = $('#droppable-board').offset().top;
  const boardPosLeft = $('#droppable-board').offset().left;
  const boardWidth = $('#droppable-board').width();
  let width = 0;
  for (let i = 0; i < boardPostions.length; i++) {
    width = 3 * (i + 1) + (i * $(`#tile-1`).width());
    boardPostions[i].tile.position.top = boardPosTop;
    boardPostions[i].tile.position.left = width + boardPosLeft;
  }
}

function loadTiles() {
  $('#holder-img').height($('#droppable-board').height() + 20);
  $('#holder-img').width(($('#droppable-board').width() / 15) * 7);
  $('#holder-img').css({
    'margin-left': 'auto',
    'margin-right': 'auto',
    'position': 'absolute'
  });
  const dimensions = $('#droppable-board').width() / 15;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (let i = 0; i < 7; i++) {
    const rand = alphabet.charAt(Math.floor(Math.random() * 26));
    let url = `Scrabble_Tiles/Scrabble_Tile_${rand}.jpg`;
    console.log(url);
    var newImg = $(`<img id="tile-${i}" src="Scrabble_Tiles/Scrabble_Tile_${rand}.jpg" />`);
    $(newImg).css({
      'position': 'relative',
      'padding': '0 2px',
      'margin': '3px 0',
      'background-color': 'transparent',
      'width': dimensions,
      'height': dimensions
    });
    $('#tile-holder').append(newImg);
    $(newImg).draggable({
      snap: '#droppable-board, #tile-holder',
      snapMode: 'inside',
      revert: (dropped) => !$(dropped[0]).is('#droppable-board')
    });
    tileLetters.push(ScrabbleTiles[rand]);
  }
  $('#droppable-board').droppable({
    drop: (event, ui) => {
      const offsetLeft = $('#droppable-board').offset().left + $('#holder-img').width();
      console.log(offsetLeft);
      const boardSpot = _.find(boardPostions, (b) => (b.tile.position.left < (ui.offset.left + ui.draggable[0].width / 2)) && (b.tile.position.left > (ui.offset.left - ui.draggable[0].width / 2))
      );
      if (boardSpot) {
        boardSpot['isMarked'] = true;
        if (_.indexOf(boardPostions, boardSpot) >= 10) {
          if (_.indexOf(boardPostions, boardSpot) > 12) {
            boardSpot.tile.position.left += 6;
          } else {
            boardSpot.tile.position.left += 3;
          }
        }
        boardSpot['hasLetter'] = ui.draggable[0].src.slice(-5, -4);
        console.log(_.remove(boardPostions, (b) => b.hasLetter == boardSpot['hasLetter']));
        console.log('TEST... ', boardSpot['hasLetter']);
        $(`#${ui.draggable.attr("id")}`).css({
          'position': 'absolute',
          'border': '2px solid black',
          'background-color': 'black',
          'left': boardSpot.tile.position.left + 'px',
          'top': boardSpot.tile.position.top + 'px',
        });
      }
    }
  });
}

function submitBoard() {
  let marked = 0;
  for (const b of boardPostions) {
    if (b['hasLetter']) {
      marked += ScrabbleTiles[b['hasLetter']].value;
    }
  }
  $('#score').text('Score: '+ marked);
  console.log(marked);
}