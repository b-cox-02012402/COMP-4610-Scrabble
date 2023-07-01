var activeTiles = [];
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
  $().on('change drop'), () => {
    loadTiles(false);
  }
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
});

function getBoardPositions() {
  const boardPosTop = $('#droppable-board').offset().top;
  const boardPosLeft = $('#droppable-board').offset().left;
  const boardWidth = $('#droppable-board').width();
  let width = 0;
  for (let i = 0; i < boardPostions.length; i++) {
    width = 3 * (i + 1) + (i * $(`#tile-1`).width());
    boardPostions[i].tile.position.top = boardPosTop;
    boardPostions[i].tile.position.left = boardPosLeft + ($('#droppable-board').width() / 15 * i);
  }
}

function loadTiles(reload = true) {
  if (reload) {
    $('#holder-img').height($('#droppable-board').height() + 20);
    $('#holder-img').width(($('#droppable-board').width() / 15) * 7);
    $('#holder-img').css({
      'margin-left': 'auto',
      'margin-right': 'auto',
      'position': 'absolute'
    });
    const dimensions = ($('#droppable-board').width() / 15) - ($('#droppable-board').width() % 15);
    const padding = $('#droppable-board').width() % 15;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 7; i++) {
      const rand = alphabet.charAt(Math.floor(Math.random() * 26));
      var newImg = $(`<img id="tile-${i}" src="Scrabble_Tiles/Scrabble_Tile_${rand}.jpg" />`);
      $(newImg).css({
        'position': 'relative',
        'padding': '0 ' + padding / 2 + 'px',
        'margin': '3px 0',
        'background-color': 'transparent',
        'width': dimensions,
        'height': dimensions
      });
      $('#tile-holder').append(newImg);
      tileLetters.push(rand);
      $(newImg).draggable({
        snap: '#droppable-board, #tile-holder',
        snapMode: 'inside',
        revert: (dropped) => !$(dropped[0]).is('#droppable-board')
      });
    }
  }

  $('#droppable-board').droppable({
    drop: (event, ui) => {
      console.log($('#droppable-board').width() % 15);
      const boardSpot = _.find(boardPostions, (b) => (b.tile.position.left < (ui.offset.left + ui.draggable[0].width / 2)) && (b.tile.position.left > (ui.offset.left - ui.draggable[0].width / 2))
      );
      boardSpot['hasLetter'] = _.toString(ui.draggable[0].src.slice(-5, -4));
      boardSpot['id'] = ui.draggable.attr("id");


      _.forEach(_.filter(boardPostions, (d) => (boardSpot['id'] === d.id && (d.tile.position.left != boardSpot.tile.position.left))), (element) => {
        console.log('DELETING', element.hasLetter, 'FROM', element.tile.type);
        delete element.hasLetter;
        delete element.id;
      });


      $('#letter').text('Letter: ' + boardSpot['hasLetter']);
      $('#word').text('Word: ' + getWord());
      activeTiles.push(boardSpot.hasLetter);
      $(`#${ui.draggable.attr("id")}`).css({
        'position': 'absolute',
        'left': boardSpot.tile.position.left + 'px',
        'top': boardSpot.tile.position.top + 'px',
      });
    }
  });
}

function getWord() {
  let word = '';
  _.forEach(_.filter(boardPostions, (d) => _.isString(d.hasLetter)), (e) => {
    word += e.hasLetter;
  });
  return word;
}

function submitBoard() {
  let marked = 0;
  let doubleWord = false;
  console.log(activeTiles);
  const tileType = _.filter(boardPostions, (letter) => _.isString(letter.hasLetter));
  console.log(tileType);
  for (const tileName of tileType) {
    console.log(tileName.tile.type);
    switch (tileName.tile.type) {
      case 'double letter':
        marked += (ScrabbleTiles[tileName.hasLetter].value * 2);
        break;
      case 'double word':
        doubleWord = true;
        marked += ScrabbleTiles[tileName.hasLetter].value;
        break;
      default:
        marked += ScrabbleTiles[tileName.hasLetter].value;
        break;
    }
  }
  if (doubleWord) {
    marked += marked;
  }
  $('#score').text('Score: ' + marked);
  console.log(marked);
}

function refreshPage() {
  location.reload();
}
