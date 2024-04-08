import React from 'react';

function Footer({ itemCount, completedItems }) {
  const completionPercentage = itemCount > 0 ? ((completedItems / itemCount) * 100).toFixed(2) : 0;

  return (
    <div>
      <p>You have {itemCount} items in your list, and you completed {completedItems}, {completionPercentage}%</p>
    </div>
  );
}

export default Footer;
