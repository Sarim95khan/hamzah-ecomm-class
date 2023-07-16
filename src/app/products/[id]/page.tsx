import React from 'react';

const page = ({ params: { id  }}: {params:{id:any}}) => {
  const category = id;
  return <div>Category : {category}</div>;
};

export default page;
