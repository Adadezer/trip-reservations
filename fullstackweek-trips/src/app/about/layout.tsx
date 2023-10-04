import React, { ReactNode } from 'react'

function layout({children} : {children: ReactNode}) {
  return (
    <>
      <h2>About Layout</h2>
      {children}
    </>
  )
};

export default layout