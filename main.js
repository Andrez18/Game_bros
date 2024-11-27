import './style.css';
import { Game } from './src/game/Game';

const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);
game.start();