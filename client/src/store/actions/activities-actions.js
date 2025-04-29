import { uiActions } from '../ui-slice';
import * as ActivitiesAPIUtil from '../util/activities_api_util';

export const RECEIVE_ALL_ACTIVITIES = 'RECEIVE_ALL_ACTIVITIES';
export const RECEIVE_ACTIVITY = 'RECEIVE_ACTIVITY';

const receiveAllActivities = activities => ({
  type: RECEIVE_ALL_ACTIVITIES,
  activities
});

const receiveActivity = activity => ({
  type: RECEIVE_ACTIVITY,
  activity
});

export const fetchAllActivities = (payload) => {
  return async dispatch => {
      dispatch(uiActions.registerLoading())

      const postGet = async () => {
          const response = await api.get("/api/activities", payload);

          const data = await response.data;
          return data;
      };

      try {
          const activities = await postGet();
          dispatch(uiActions.registerLoading());
          dispatch(receiveAllActivities(user));
      } catch (error) {
          console.log(error);
      }
  }
};
  

  return ActivitiesAPIUtil.fetchAllActivities().then(activities => {
    dispatch(receiveAllActivities(activities));
  });
};
