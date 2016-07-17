
// Component Related Store Actions & Reducers

// Remove a student.
export const removedStudent = (index) => ({
  type: 'REMOVED_STUDENT',
  payload: {
    index,
  },
});
