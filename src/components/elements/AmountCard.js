import React from 'react';

const AmountCard = (props) => {
  const {size} = props
  const {value, description} = props.object
  return (
    <div className="amount-card reveal-from-bottom">
      {
        size=='small'?
        <h4 className="mt-0 mb-8 base-color">
          {value}
        </h4>:
        <h3 className="mt-0 mb-8 base-color">
          {value}
        </h3>
      }
      <div className={`m-0 ${size=='small'?'text-xs':'text-sm'} heading-color`}>
        {description}
      </div>
    </div>
  );
}

export default AmountCard;