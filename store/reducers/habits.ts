import {ADD_HABIT} from '../actions/habits';
type Habit = {
  id: string;
  name: string;
  isChecked: boolean;
};
type HabitsState = {
  habits: Habit[];
};
const initialState: HabitsState = {
  habits: [],
};

const habitsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: state.habits.concat({
          id: new Date().toString(),
          name: action.habitName,
          isChecked: false,
        }),
      };
    default:
      return state;
  }
};

export default habitsReducer;
