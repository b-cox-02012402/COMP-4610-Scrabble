// var _ = require("lodash");

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

$().ready(() => {
  // $.getJSON('pieces.json', (data) => {
  //   console.log(data.pieces);
  // }).fail(() => {
  //   console.log('error');
  // });
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
        // 'position': 'relative',
        // 'left': tileWidth,
        'height': dimensions,
        'width': dimensions
      });
      // $('#tile-holder').append(newImg);
      // tileLetters.push(newImg);
    }
    getBoardPositions();
  });
});

function getBoardPositions() {
  const boardPosTop = $('#droppable-board').position().top;
  const boardPosLeft = $('#droppable-board').position().left;
  const boardWidth = $('#droppable-board').width();
  console.log($('#droppable-board').position());
  console.log(boardPosTop, boardPosLeft, boardWidth);
  for (let i = 0; i < boardPostions.length; i++) {
    boardPostions[i].tile.position.top = boardPosTop;
    boardPostions[i].tile.position.left = (boardWidth/15) * i;
    console.log("TEST...", boardPostions[i].tile);
  }
}

function loadTiles() {
  // $('#droppable-board').css({
  //   'margin-left': 'auto',
  //   'margin-right': 'auto',
  //   'position': 'relative'
  // })
  $('#holder-img').height($('#droppable-board').height() + 20);
  $('#holder-img').width(($('#droppable-board').width() / 15) * 7);
  $('#holder-img').css({
    'margin-left': 'auto',
    'margin-right': 'auto',
    'position': 'absolute'
  });
  const dimensions = $('#droppable-board').width() / 15.5;
  for (let i = 0; i < 7; i++) {
    var newImg = $(`<img id="tile-${i}" src="Scrabble_Tiles/Scrabble_Tile_A.jpg" />`);
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
    tileLetters.push(newImg);
  }
  $('#droppable-board').droppable({
    drop: (event, ui) => {
      const offsetLeft = $('#droppable-board').offset().left + $('#holder-img').width();
      console.log(offsetLeft);
      const boardSpot = _.find(boardPostions, (b) => (b.tile.position.left < (ui.offset.left + ui.draggable[0].width/2)) && (b.tile.position.left > (ui.offset.left - ui.draggable[0].width/2))
      );
      if (boardSpot) {
        console.log(ui.offset.left, ui.offset.top);
        console.log(boardSpot.tile.position.left, boardSpot.tile.position.top);
        console.log(ui.offset.left - boardSpot.tile.position.left, boardSpot.tile.position.top - ui.offset.top);
        // $(`#${ui.draggable.attr("id")}`).css('position', 'absolute');
        $(`#${ui.draggable.attr("id")}`).css({
          'position': 'absolute',
          'left': boardSpot.tile.position.left + 'px',
          'top': boardSpot.tile.position.top + 'px',
          'padding': '0'
        });
        // ui.draggable.left = boardSpot.tile.position.left;
        // ui.offset.top = boardSpot.tile.position.top;
        // $(`#${ui.draggable.attr("id")}`).offset().left = $('#droppable-board').offset().left;
        var $this = $('droppable-board');
      }
    }
  });
}