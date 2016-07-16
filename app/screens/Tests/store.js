
// Component Related Store Actions & Reducers

// Remove a student.
export const removeStudent = (index) => ({
  type: 'REMOVE_STUDENT',
  payload: {
    index,
  },
});
