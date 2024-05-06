import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface ByocErrorComponentProps {
  title: string;
  columnsCount: number;
}

export const ByocErrorComponent = (props: ByocErrorComponentProps): JSX.Element => {
  const columns: string[] = [];
  for (let i = 0; i < props.columnsCount; i++) {
    columns.push(`Component Column ${i + 1}`);
  }
  throw new Error('BYOC component failed');
  return (
    <div className="container">
      <h2>{props.title || 'BYOC Demo'}</h2>
      <p>ByocErrorComponent Component</p>
      <div className="row">
        {columns.map((text, index) => (
          <div key={index} className={`col-sm-${props.columnsCount}`}>
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

FEAAS.External.registerComponent(ByocErrorComponent, {
  name: 'ByocErrorComponent',
  properties: {
    title: {
      type: 'string',
    },
    columnsCount: {
      type: 'number',
    },
  },
});
