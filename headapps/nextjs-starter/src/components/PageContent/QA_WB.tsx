import React, { JSX } from 'react';
import { Field, RichText as JssRichText } from '@sitecore-content-sdk/nextjs';

interface Fields {
  TitleQA: Field<string>;
}

export type QAWBProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: QAWBProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.TitleQA} />
  ) : (
    <span className="is-empty-hint">QA_WB</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component QA_WB ${props.params.styles?.trimEnd()}`} id={id ? id : undefined}>
      <div className="component-content">{text}</div>
    </div>
  );
};

export const QaVariant = (props: QAWBProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.TitleQA} />
  ) : (
    <span className="is-empty-hint">QA_WB</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component QA_WB ${props.params.styles?.trimEnd()}`} id={id ? id : undefined}>
      <div>This is QA_Variant</div>
      <div className="component-content">{text}</div>
    </div>
  );
};

export const QA1 = (props: QAWBProps): JSX.Element => {
  const text = props.fields ? (
    <JssRichText field={props.fields.TitleQA} />
  ) : (
    <span className="is-empty-hint">QA1</span>
  );
  const id = props.params.RenderingIdentifier;

  return (
    <div className={`component QA_WB ${props.params.styles?.trimEnd()}`} id={id ? id : undefined}>
      <div>This is QA1</div>
      <div className="component-content">{text}</div>
    </div>
  );
};
