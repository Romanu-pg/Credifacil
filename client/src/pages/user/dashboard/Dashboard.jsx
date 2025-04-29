import React from 'react';
import Aside from '../../../components/user/dashboard/Aside';
import PostList from '../../../components/user/dashboard/PostList';

const UserDashboard = () => {
  return (
    <div>
      <main className="container mx-auto mt-8 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <aside className="col-span-1">
          <Aside />
        </aside>
        {/* Main Content */}
        <section className="col-span-2">
          <PostList />
        </section>
      </main>
    </div>
  );
};

export default UserDashboard;


