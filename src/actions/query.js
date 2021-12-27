import { types } from '../types/types'

export const search = (searchText) => {
  return (dispatch) => {
    // setTimeout(() => {
    //   dispatch(query(searchText))
    // }, 3000)

    fetch(`http://localhost:3000/api/search/${searchText}`, {
      // body: JSON.stringify({ text: searchText }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }else
          throw 'No text';
      })
      .then(({ text, palindrome }) => {
        dispatch(query(text, palindrome));
      })
      .catch((error) => {
        dispatch(query(error, false));
      });
  }
}

export const query = (text, palindrome) => ({
  type: types.success,
  payload: {
    text,
    palindrome,
  },
});
