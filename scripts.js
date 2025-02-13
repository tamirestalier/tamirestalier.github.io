// Obtém o elemento de canvas onde o jogo será desenhado
const canvas = document.getElementById('snakeGame');
const ctx = canvas.getContext('2d');

// Tamanho da célula da cobra e do alimento
const box = 20;
let score = 0;

// A cobra começa com 1 célula na posição central
let snake = [];
snake[0] = { x: 9 * box, y: 10 * box };

// Direção inicial da cobra
let direction;

// O alimento começa em uma posição aleatória
let food = {
    x: Math.floor(Math.random() * 19 + 1) * box,
    y: Math.floor(Math.random() * 19 + 1) * box
};

// Função para capturar as teclas pressionadas e controlar a direção
document.addEventListener('keydown', directionControl);

// Função que altera a direção da cobra com base nas teclas pressionadas
function directionControl(event) {
    if (event.keyCode == 37 && direction != "RIGHT") direction = "LEFT";
    if (event.keyCode == 38 && direction != "DOWN") direction = "UP";
    if (event.keyCode == 39 && direction != "LEFT") direction = "RIGHT";
    if (event.keyCode == 40 && direction != "UP") direction = "DOWN";
}

// Função que desenha o jogo no canvas
function drawGame() {
    // Limpa o canvas antes de desenhar novamente
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha a cobra
    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = (i === 0) ? "green" : "white"; // A cabeça é verde, o corpo é branco
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    // Desenha o alimento (um quadrado vermelho)
    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    // Movimenta a cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (direction == "LEFT") snakeX -= box;
    if (direction == "UP") snakeY -= box;
    if (direction == "RIGHT") snakeX += box;
    if (direction == "DOWN") snakeY += box;

    // Se a cobra comer o alimento, ela cresce
    if (snakeX == food.x && snakeY == food.y) {
        score++; // Aumenta a pontuação
        food = { // Gera um novo alimento aleatoriamente
            x: Math.floor(Math.random() * 19 + 1) * box,
            y: Math.floor(Math.random() * 19 + 1) * box
        };
    } else {
        snake.pop(); // Remove a última célula da cobra (ela vai se mover)
    }

    // Cria uma nova cabeça para a cobra
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    // Adiciona a nova cabeça no começo da cobra
    snake.unshift(newHead);

    // Verifica se a cobra colidiu com as bordas ou com o corpo
    if (snakeX < 0 || snakeX >= 20 * box || snakeY < 0 || snakeY >= 20 * box || collision(snake)) {
        clearInterval(game); // Termina o jogo
    }

    // Exibe a pontuação na tela
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 20, 30);
}

// Função que verifica se a cobra colidiu com ela mesma
function collision(snake) {
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) return true;
    }
    return false;
}

// Inicia o loop do jogo, que chama a função drawGame a cada 100 ms
let game = setInterval(drawGame, 100);

