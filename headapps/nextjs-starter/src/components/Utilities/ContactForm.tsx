import React, { JSX } from 'react';
import { Field, Image, ImageField, Text } from '@sitecore-content-sdk/nextjs';

interface Fields {
  Title: Field<string>;
  EmailLabel: Field<string>;
  SubjectLabel: Field<string>;
  MessageLabel: Field<string>;
  ButtonLabel: Field<string>;
  BackgroundImage: ImageField;
}

export type ContactFormProps = {
  params: { [key: string]: string };
  fields: Fields;
};

const ComponentDefault = (props: ContactFormProps): JSX.Element => (
  <div className={`component ${props?.params?.styles}`.trimEnd()}>
    <div className="component-content">
      <span className="is-empty-hint">ContactForm</span>
    </div>
  </div>
);

export const Default = (props: ContactFormProps): JSX.Element => {
  const id = props.params.RenderingIdentifier;

  return props.fields ? (
    <div
      className={`component contact-form component-spaced ${props.params?.styles?.trimEnd()}`}
      id={id ? id : undefined}
    >
      <div className="container container-widest-fluid">
        <Image field={props.fields.BackgroundImage} className="img-fluid" />
        <div className="container">
          <div className="contact-form-inner">
            <form>
              <h2 className="mb-4">
                <Text field={props.fields?.Title} />
              </h2>
              <input type="text" placeholder={props.fields.EmailLabel.value} />
              <input type="text" placeholder={props.fields.SubjectLabel.value} />
              <textarea placeholder={props.fields.MessageLabel.value} />
              <input
                type="submit"
                value={props.fields.ButtonLabel.value}
                className="button button-main mt-3"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <ComponentDefault {...props} />
  );
};
