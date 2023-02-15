import React from 'react';

const Navigation = (props) => {
  return (
    <div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/procedures">Procedures</a>
        </li>
        <li>
          <a href="/vehicles">Vehicles</a>
        </li>
        <li>
          <a href="/launch-recovery">Launch & Recovery</a>
        </li>
        <li>
          <a href="/documentation">Documentation</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
