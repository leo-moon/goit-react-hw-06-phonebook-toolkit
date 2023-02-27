import { createAction } from '@reduxjs/toolkit';

export const setFilter = createAction('filter/set', data => {
  return {
    payload: { data },
  };
});

// export const filterContacts = payload => {
//   return {
//     type: SET_FILTER,
//     payload,
//   };
// };
