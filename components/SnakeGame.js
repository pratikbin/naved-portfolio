import { useState, useEffect, useCallback } from 'react';

export default function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 15 });
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const gridSize = 20;
  const cellSize = 20;

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * gridSize),
      y: Math.floor(Math.random() * gridSize)
    };
    return newFood;
  }, []);

  // Initialize game
  const initGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
    setGameStarted(true);
    setIsPaused(false);
  }, [generateFood]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted) {
        if (e.key === ' ') {
          initGame();
        }
        return;
      }

      if (e.key === ' ') {
        setIsPaused(!isPaused);
        return;
      }

      if (isPaused || gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y !== 1) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y !== -1) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x !== 1) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x !== -1) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction, gameStarted, isPaused, gameOver, initGame]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return;

    const moveSnake = () => {
      setSnake(currentSnake => {
        const newSnake = [...currentSnake];
        const head = { ...newSnake[0] };
        
        head.x += direction.x;
        head.y += direction.y;

        // Check wall collision
        if (head.x < 0 || head.x >= gridSize || head.y < 0 || head.y >= gridSize) {
          setGameOver(true);
          return currentSnake;
        }

        // Check self collision
        if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return currentSnake;
        }

        newSnake.unshift(head);

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore(prev => prev + 1);
          setFood(generateFood());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [direction, food, gameStarted, gameOver, isPaused, generateFood]);

  // Generate grid cells for rendering
  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const isSnake = snake.some(segment => segment.x === x && segment.y === y);
        const isHead = snake[0]?.x === x && snake[0]?.y === y;
        const isFood = food.x === x && food.y === y;
        
        let cellClass = "border border-[#f0f0f0] ";
        
        if (isHead) {
          cellClass += "bg-[#000000]"; // Head is black
        } else if (isSnake) {
          cellClass += "bg-[#333333]"; // Body is dark gray
        } else if (isFood) {
          cellClass += "bg-[#ff0000]"; // Food is red
        } else {
          cellClass += "bg-[#ffffff]"; // Empty cell
        }
        
        cells.push(
          <div
            key={`${x}-${y}`}
            className={cellClass}
            style={{ width: cellSize, height: cellSize }}
          />
        );
      }
    }
    return cells;
  };

  return (
    <div className="mt-16 mb-16">
      <div className="flex flex-col items-center mb-6">
        <h2 className="text-xl font-medium mb-2">Snake Game</h2>
        <p className="text-sm text-[#666666] mb-4">
          {gameOver 
            ? "Game Over! Press Space to restart" 
            : isPaused 
              ? "Paused. Press Space to continue" 
              : gameStarted 
                ? "Use arrow keys to play. Press Space to pause" 
                : "Press Space to start"}
        </p>
        <div className="flex items-center gap-4 mb-4">
          <div className="text-sm">
            Score: <span className="font-medium">{score}</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div 
          className="grid border-2 border-[#f0f0f0] bg-[#f0f0f0]"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, ${cellSize}px)`,
            width: gridSize * cellSize,
            height: gridSize * cellSize
          }}
        >
          {renderGrid()}
        </div>
      </div>
      
      {!gameStarted && (
        <div className="flex justify-center mt-4">
          <button 
            onClick={initGame}
            className="px-4 py-2 bg-[#000000] text-white text-sm rounded hover:bg-[#333333] transition duration-200"
          >
            Start Game
          </button>
        </div>
      )}
    </div>
  );
}