import React from 'react';
import ActivityForm from '../../components/user/CreateActivity';
import RoutesList from '../../components/user/RoutesList';

const RoutesUser = () => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <main className="mt-2">
        <h1 className="text-3xl font-bold mb-4">New Activity</h1>
        <ActivityForm />
        <div className="mt-8">
          <p className="text-gray-700 mb-4">Or choose distance and elevation from routes below:</p>
          <RoutesList/>
        </div>
      </main>
    </div>
  );
}

export default RoutesUser;