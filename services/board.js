const boards = [
    {
        id: 1,
        title: 'My board1',
    },
    {
        id: 1,
        title: 'My board2',
    }
]

exports.getAllBoards = function(cb){
    cb(null, boards);
}

exports.findBoardById = function(id, cb){
    boards.forEach(board => {
        if(board.id == id){
            cb(null, board)
        }
    })
}

exports.createBoard = function(board, cb){
    boards.push(board);
    cb(null, board)
}

exports.changeBoard = function(id, newData, cb){
    boards.forEach(board => {
        if(board.id == id){
            board = {...newData}
        }
    })
}

exports.deleteBoard = function(id, cb){
    boards.forEach(board => {
        if(board.id == id){
            const index = boards.indexOf(board)
            boards.splice(index, 1)
        }
    })
}
