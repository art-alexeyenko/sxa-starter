import React, { JSX } from 'react';
import {
  Field,
  Image,
  ImageField,
  Link,
  LinkField,
  RichText,
  RichTextField,
  Text,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Eyebrow: Field<string>;
  Text: RichTextField;
  Link: LinkField;
  Image1: ImageField;
  Title1: Field<string>;
  Text1: Field<string>;
  Title2: Field<string>;
  Text2: Field<string>;
}

export type FeaturesProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: FeaturesProps): JSX.Element => (
  <div className={`component ${props.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">Features</span>
    </div>
  </div>
);

export const Default = (props: FeaturesProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return props.fields ? (
    <div
      className={`component features component-spaced ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container">
        <div className="info">
          <div className="eyebrow-accent">
            <Text field={props.fields?.Eyebrow} />
          </div>
          <div className="tagline">
            <RichText field={props.fields?.Text} />
          </div>
          <div className="button button-main">
            <Link field={props.fields?.Link} />
          </div>
        </div>
        <div className="items">
          <div className="item left">
            <div className="icon">
              <Image field={props.fields?.Image1} />
            </div>
            <div className="title">
              <Text field={props.fields?.Title1} />
            </div>
            <p className="subtitle">
              <Text field={props.fields?.Text1} />
            </p>
          </div>
          <div className="item right">
            <div className="title">
              <Text field={props.fields?.Title2} />
            </div>
            <p className="subtitle">
              <Text field={props.fields?.Text2} />
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
