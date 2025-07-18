import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnv from '../../config/config.js';
const dashboardApis = createApi({
  reducerPath: 'floorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${getEnv('SERVER_URL')}/api/admin`,
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    adminDashboard: builder.query({
      query: () => ({
        url: `/dashboard`,
        method: 'GET',
      }),
      //   providesTags: ['floor'],
    }),
  }),
});

export const {
  useAdminDashboardQuery,
  //   useCreateFloorMutation,
  //   useGetAllFloorQuery,
  //   useGetSingleFloorQuery,
  //   useUpdateSingleFloorMutation,
  //   useDeleteSingleFloorMutation,
} = dashboardApis;
export default dashboardApis;
