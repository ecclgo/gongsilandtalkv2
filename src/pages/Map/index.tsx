import { useState } from 'react';
import Layout from './Layout';
import LoadMap from './LoadMap';

export default function Map() {
  return (
    <>
      <div>
        <Layout>
          <LoadMap />
        </Layout>
      </div>
    </>
  );
}
