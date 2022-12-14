import TrunLeftState from './TurnLeft/TrunLeftState';
import { DIRECTION_ENUM } from '../../../../../Enum';
import { GameObject } from '@eva/eva.js';
import DirectionStateMachine from '../../../../../Base/DirectionStateMachine';

export default class TurnLeftSubStateMachine extends DirectionStateMachine {
  constructor(go: GameObject) {
    super(go);

    this.init();
  }

  init() {
    this.states.set(DIRECTION_ENUM.TOP, new TrunLeftState(this.go, 'player_turn_left_top', 1));
    this.states.set(DIRECTION_ENUM.BOTTOM, new TrunLeftState(this.go, 'player_turn_left_bottom', 1));
    this.states.set(DIRECTION_ENUM.LEFT, new TrunLeftState(this.go, 'player_turn_left_left', 1));
    this.states.set(DIRECTION_ENUM.RIGHT, new TrunLeftState(this.go, 'player_turn_left_right', 1));
  }
}
