// 

// Input:
// room = [
//     [1, 1, 1, 1, 1, 0, 1, 1],
//     [1, 1, 1, 1, 1, 0, 1, 1],
//     [1, 0, 1, 1, 1, 1, 1, 1],
//     [0, 0, 0, 1, 0, 0, 0, 0],
//     [1, 1, 1, 1, 1, 1, 1, 1]
// ],
//     row = 1,
//     col = 3

// Explanation:
// All grids in the room are marked by either 0 or 1.
// 0 means the cell is blocked, while 1 means the cell is accessible.
// The robot initially starts at the position of row = 1, col = 3.
// From the top left corner, its position is one row below and three columns right.

//Assume we have given the robot class with some APIs.

function cleanRoom(robot){
    let seen = new Set ();
    // [x, y] up, right, down, left
    const dirs = [[0,1],[1,0],[0,-1],[-1,0]];

    dfs(0, 1, 3) // index of direction, relative coordinate x, y

    function dfs(lastDirIndex, x, y){
        robot.clean();
        seen.add(x+','+y);

        // dfs 4 directions;
        for(let i=0; i< dirs.length; i++){
            let currentDir = (lastDirIndex + i) % 4;
            let xx = x + dirs[currentDir][0];
            let yy = y + dirs[currentDir][1];

            // if the current facing grid not visited, try move, if can move call DFS, otherwise skip (turn right)
            if(!seen(xx+','+yy) && robot.move()){
                dfs(currentDir, xx, yy);
            }

            // turn right 4 time so we don't lost
            room.turnRight();
        }

        // move back, face same direction so we don't lost
        robot.turnRight();
        robot.turnRight();
        robot.move();
        robot.turnRight();
    }
}

