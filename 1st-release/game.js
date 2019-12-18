export default function createGame(playerId) {
    const state = {
        players: {},
        fruits: {
            fruit1: {x: 3, y: 1}
        },
        screen: {
            width: 10,
            height: 10
        }
    };
    const player = state.players[playerId] ?
        state.players[playerId] :
        addPlayer(playerId, {x: 0, y: 0});
    console.log(state);
    console.log(player);

    function addPlayer(id, position) {
        state.players[id] = {
            x: position.x,
            y: position.y
        };
        return state.players[id];
    }

    function removePlayer(id) {
        delete state.players[id];
    }
    
    function addFruit(id, position) {
        state.fruits[id] = {
            x: position.x,
            y: position.y
        };
    }

    function removeFruit(id) {
        delete state.fruits[id];
    }
    
    function checkCollision() {
        const fruit = removeAndReturnFruit(player.x, player.y);
        if (fruit) {
            console.log('Player get fruit');
        }
    }

    function removeAndReturnFruit(x, y) {
        for (const fruitId in state.fruits) {
            const fruit = state.fruits[fruitId];
            if ((fruit.x === x) && (fruit.y === y)) {
                removeFruit(fruitId);
                return fruit;
            }
        }
        return null;
    }

    function moveUp() {
        if (player.y > 0) {
            player.y--;
            checkCollision();
        }
    }

    function moveDown() {
        if (player.y + 1 < state.screen.height) {
            player.y++;
            checkCollision();
        }
    }

    function moveLeft() {
        if (player.x > 0) {
            player.x--;
            checkCollision();
        }
    }

    function moveRight() {
        if (player.x + 1 < state.screen.width) {
            player.x++;
            checkCollision();
        }
    }

    return {
        state,
        moveUp,
        moveDown,
        moveLeft,
        moveRight
    };
}