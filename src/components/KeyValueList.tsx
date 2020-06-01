import React from 'react';

interface KeyValueProps {
  keyValues: {
    [key: string]: string;
  };
  ulClassName?: string;
  liClassName?: string;
  bClassName?: string;
  spanClassName?: string;
}

const KeyValueList: React.FC<KeyValueProps> = ({
  ulClassName,
  spanClassName,
  bClassName,
  liClassName,
  keyValues,
}) => (
  <ul className={ulClassName}>
    {
        Object.entries(keyValues).map(([key, value]) => (
          <li className={liClassName} key={key}>
            <b className={bClassName}>
              {key}
            </b>
            <span className={spanClassName}>
              {value}
            </span>
          </li>
        ))
      }
  </ul>
);

export default React.memo(KeyValueList);
