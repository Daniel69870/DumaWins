"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw, Lock, Unlock } from "lucide-react"

const BOARD_SIZE = 20
const INITIAL_SNAKE = [{ x: 10, y: 10 }]
const INITIAL_FOOD = { x: 15, y: 15 }
const INITIAL_DIRECTION = { x: 0, y: -1 }

type Position = {
  x: number
  y: number
}

type Direction = {
  x: number
  y: number
}

export default function SnakeGame() {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE)
  const [food, setFood] = useState<Position>(INITIAL_FOOD)
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [gameFocused, setGameFocused] = useState(false)

  // Generate random food position
  const generateFood = useCallback(() => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_SIZE),
        y: Math.floor(Math.random() * BOARD_SIZE),
      }
    } while (snake.some((segment) => segment.x === newFood.x && segment.y === newFood.y))
    return newFood
  }, [snake])

  // Check if position is out of bounds or collides with snake
  const checkCollision = useCallback((head: Position, snakeBody: Position[]) => {
    // Wall collision
    if (head.x < 0 || head.x >= BOARD_SIZE || head.y < 0 || head.y >= BOARD_SIZE) {
      return true
    }
    // Self collision
    return snakeBody.some((segment) => segment.x === head.x && segment.y === head.y)
  }, [])

  // Move snake
  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return

    setSnake((currentSnake) => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }
      head.x += direction.x
      head.y += direction.y

      if (checkCollision(head, newSnake)) {
        setGameOver(true)
        setGameRunning(false)
        setGameFocused(false) // Auto-disable game focus on game over
        return currentSnake
      }

      newSnake.unshift(head)

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 10)
        setFood(generateFood())
      } else {
        newSnake.pop()
      }

      return newSnake
    })
  }, [direction, food, gameRunning, gameOver, checkCollision, generateFood])

  // Handle keyboard input
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      // Always allow spacebar for pause/play
      if (e.key === " ") {
        e.preventDefault()
        if (!gameOver) {
          setGameRunning((prev) => !prev)
        }
        return
      }

      // Only handle arrow keys if game is focused and running
      if (!gameFocused || !gameRunning || gameOver) return

      switch (e.key) {
        case "ArrowUp":
          e.preventDefault() // Prevent page scroll
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
          e.preventDefault() // Prevent page scroll
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          e.preventDefault() // Prevent page scroll
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
          e.preventDefault() // Prevent page scroll
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
      }
    },
    [direction, gameRunning, gameOver, gameFocused],
  )

  // Game loop
  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150)
    return () => clearInterval(gameInterval)
  }, [moveSnake])

  // Keyboard event listeners
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [handleKeyPress])

  // Update high score
  useEffect(() => {
    if (score > highScore) {
      setHighScore(score)
    }
  }, [score, highScore])

  // Auto-enable game focus when game starts
  useEffect(() => {
    if (gameRunning && !gameOver) {
      setGameFocused(true)
    }
  }, [gameRunning, gameOver])

  // Reset game
  const resetGame = () => {
    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setDirection(INITIAL_DIRECTION)
    setGameRunning(false)
    setGameOver(false)
    setScore(0)
    setGameFocused(false)
  }

  // Start/pause game
  const toggleGame = () => {
    if (gameOver) {
      resetGame()
    } else {
      setGameRunning(!gameRunning)
      if (!gameRunning) {
        setGameFocused(true) // Auto-enable focus when starting
      }
    }
  }

  // Toggle game focus
  const toggleGameFocus = () => {
    setGameFocused(!gameFocused)
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Game Stats */}
      <div className="flex gap-8 text-center">
        <div className="bg-slate-900/50 border border-purple-500/30 rounded-lg p-4 backdrop-blur-sm">
          <div className="text-2xl font-bold text-purple-400">{score}</div>
          <div className="text-sm text-slate-400">Score</div>
        </div>
        <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4 backdrop-blur-sm">
          <div className="text-2xl font-bold text-blue-400">{highScore}</div>
          <div className="text-sm text-slate-400">High Score</div>
        </div>
      </div>

      {/* Game Focus Status */}
      <div
        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 ${
          gameFocused
            ? "bg-green-500/20 border-green-500/50 text-green-400"
            : "bg-orange-500/20 border-orange-500/50 text-orange-400"
        }`}
      >
        {gameFocused ? "🎮 Game Controls Active" : "🌐 Website Navigation Active"}
      </div>

      {/* Game Board */}
      <div className="relative bg-slate-900/50 border border-slate-600 rounded-lg p-4 backdrop-blur-sm">
        <div
          className="grid gap-1 bg-black/50 p-2 rounded"
          style={{
            gridTemplateColumns: `repeat(${BOARD_SIZE}, 1fr)`,
            width: "400px",
            height: "400px",
          }}
        >
          {Array.from({ length: BOARD_SIZE * BOARD_SIZE }).map((_, index) => {
            const x = index % BOARD_SIZE
            const y = Math.floor(index / BOARD_SIZE)
            const isSnake = snake.some((segment) => segment.x === x && segment.y === y)
            const isHead = snake[0]?.x === x && snake[0]?.y === y
            const isFood = food.x === x && food.y === y

            return (
              <div
                key={index}
                className={`w-full h-full rounded-sm transition-all duration-150 ${
                  isFood
                    ? "bg-gradient-to-br from-pink-500 to-purple-500 animate-pulse shadow-lg shadow-pink-500/50"
                    : isHead
                      ? "bg-gradient-to-br from-green-400 to-emerald-500 shadow-lg shadow-green-500/50"
                      : isSnake
                        ? "bg-gradient-to-br from-green-500 to-green-600"
                        : "bg-slate-800/30"
                }`}
              />
            )
          })}
        </div>

        {/* Game Over Overlay */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/80 flex items-center justify-center rounded-lg backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-red-400">Game Over!</h3>
              <p className="text-slate-300">Final Score: {score}</p>
              <Button
                onClick={resetGame}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Play Again
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Game Controls */}
      <div className="flex gap-4 flex-wrap justify-center">
        <Button
          onClick={toggleGame}
          className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700"
        >
          {gameRunning ? (
            <>
              <Pause className="h-4 w-4 mr-2" />
              Pause
            </>
          ) : (
            <>
              <Play className="h-4 w-4 mr-2" />
              {gameOver ? "New Game" : "Start"}
            </>
          )}
        </Button>

        <Button
          onClick={toggleGameFocus}
          variant="outline"
          className={`border-2 transition-all duration-300 ${
            gameFocused
              ? "border-green-500 text-green-400 hover:bg-green-500/20"
              : "border-orange-500 text-orange-400 hover:bg-orange-500/20"
          }`}
        >
          {gameFocused ? (
            <>
              <Lock className="h-4 w-4 mr-2" />
              Game Focus ON
            </>
          ) : (
            <>
              <Unlock className="h-4 w-4 mr-2" />
              Game Focus OFF
            </>
          )}
        </Button>

        <Button onClick={resetGame} variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Instructions */}
      <div className="text-center text-sm text-slate-400 max-w-md space-y-2">
        <p className="mb-2">Use arrow keys to control your space snake</p>
        <p>Press SPACE to pause/resume the game</p>
        <p className="mt-2 text-purple-400">Collect energy orbs to grow and increase your score!</p>
        <div className="mt-4 p-3 bg-slate-800/50 rounded-lg border border-slate-600">
          <p className="text-yellow-400 font-medium">💡 Game Focus Toggle:</p>
          <p className="text-xs mt-1">
            When <span className="text-green-400">Game Focus is ON</span>, arrow keys control the snake.
            <br />
            When <span className="text-orange-400">Game Focus is OFF</span>, arrow keys scroll the website.
          </p>
        </div>
      </div>
    </div>
  )
}
