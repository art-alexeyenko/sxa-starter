import { JSX } from 'react';
import { ImageField, Image } from '@sitecore-content-sdk/nextjs';

export const IconAccent = ({
  image,
  inverted,
}: {
  image: ImageField;
  inverted?: boolean;
}): JSX.Element => {
  return (
    <div className={`icon-accent ${inverted ? 'inverted' : ''}`}>
      <Image field={image} />
    </div>
  );
};
