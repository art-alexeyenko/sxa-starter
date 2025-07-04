import React, { JSX } from 'react';
import {
  Field,
  ImageField,
  Image,
  Text,
  ComponentParams,
  ComponentRendering,
  LinkField,
  Link,
} from '@sitecore-content-sdk/nextjs';

interface Fields {
  Name: Field<string>;
  Position: Field<string>;
  Photo: ImageField;
  SocialLink1: LinkField;
  SocialIcon1: ImageField;
  SocialLink2: LinkField;
  SocialIcon2: ImageField;
  SocialLink3: LinkField;
  SocialIcon3: ImageField;
}

export type AuthorWidgetProps = {
  rendering: ComponentRendering & { params: ComponentParams };
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: AuthorWidgetProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">AuthorWidget</span>
    </div>
  </div>
);

export const Default = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return props.fields ? (
    <div
      className={`component author-widget ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="author-card row g-0">
        <div className="col-auto">
          <Image field={props.fields.Photo} className="author-img" />
        </div>
        <div className="col">
          <h6 className="author-name">
            <Text field={props.fields.Name} />
          </h6>
          <p className="author-position">
            <Text field={props.fields.Position} />
          </p>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};

export const WithSocials = (props: AuthorWidgetProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return props.fields ? (
    <div
      className={`component author-widget with-socials ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="author-card row g-0">
        <div className="col-auto">
          <Image field={props.fields.Photo} className="author-img" />
        </div>
        <div className="col">
          <h6 className="author-name">
            <Text field={props.fields.Name} />
          </h6>
          <p className="author-position">
            <Text field={props.fields.Position} />
          </p>
        </div>
        <div className="col-12 col-md-auto">
          <div className="social-links">
            <Link field={props.fields?.SocialLink1}>
              <Image field={props.fields?.SocialIcon1} />
            </Link>
            <Link field={props.fields?.SocialLink2}>
              <Image field={props.fields?.SocialIcon2} />
            </Link>
            <Link field={props.fields?.SocialLink3}>
              <Image field={props.fields?.SocialIcon3} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
