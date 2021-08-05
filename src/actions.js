
/*
const getMyProfile = () => async (dispatch, getState) => {
  const client = getState().state.client;
  let profile;
  try {
    await client.getProfile(client.address, profile => {
      dispatch({
        type: "GET_MYPROFILE",
        payload: profile,
      });
    });
  } catch(err) {
    console.error(err);
    return;
  }
}
*/

export {};
