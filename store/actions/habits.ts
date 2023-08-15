export const ADD_HABIT = 'ADD_HABIT';

export const addHabit = (name: string) => {
  return {type: ADD_HABIT, habitName: name};
};
