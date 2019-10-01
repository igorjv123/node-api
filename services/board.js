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
    boards.forEach((board, index) => {
        if(board.id == id){
            boards[index] = {...newData}
            cb(null, boards[index]);
            return
        }
    })
}

exports.deleteBoard = function(id, cb){
    console.log(id)
    boards.forEach((board, index) => {
        if(board.id == id){
            boards.splice(index, 1)
            cb(null, board);
            return
        }
    })
}
