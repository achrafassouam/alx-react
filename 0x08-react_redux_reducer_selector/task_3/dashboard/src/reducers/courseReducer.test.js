import courseReducer from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('courseReducer', () => {
  it('should return the default state as an empty array', () => {
    const state = courseReducer(undefined, {});
    expect(state).toEqual([]);
  });

  it('should handle FETCH_COURSE_SUCCESS and return the correct data with isSelected set to false', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    };
    const state = courseReducer(undefined, action);
    expect(state).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });

  it('should handle SELECT_COURSE and update the correct course isSelected to true', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const state = courseReducer(initialState, action);
    expect(state[1].isSelected).toBe(true);
  });

  it('should handle UNSELECT_COURSE and update the correct course isSelected to false', () => {
    const initialState = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const state = courseReducer(initialState, action);
    expect(state[1].isSelected).toBe(false);
  });
});
