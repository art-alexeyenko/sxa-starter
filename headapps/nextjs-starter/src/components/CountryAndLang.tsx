import React, { JSX } from 'react';
import { Field, Text } from '@sitecore-content-sdk/nextjs';
import { ComponentProps } from 'lib/component-props';
type CountryAndLanguageSlideItem = {
  TestCountry: {
    value: Field<string>;
  };
  TestLanguage: {
    value: Field<string>;
  };
};
interface Fields {
  data: {
    datasource: {
      id: string;
      name: string;
      children: {
        results: CountryAndLanguageSlideItem[];
      };
    };
  };
}
type CountryAndLanguageProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};
type CountryAndLanguageSlideProps = {
  slides: CountryAndLanguageSlideItem[];
};
const CountryAndLanguageSlidesContent = (props: CountryAndLanguageSlideProps): JSX.Element => {
  if (props.slides && props.slides.length > 0) {
    return (
      <div>
        {props.slides.map((slide: CountryAndLanguageSlideItem, index: number) => (
          <div key={index}>
            <h1 className="component-content title row">
              <Text field={slide.TestCountry.value} />
            </h1>
            <div className="component-content text row">
              <Text field={slide.TestLanguage.value} />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return <></>;
};
export const Default = (props: CountryAndLanguageProps): JSX.Element => {
  const containerStyles = props.params && props.params.styles ? props.params.styles : '';
  const styles = `${props.params.GridParameters} ${containerStyles}`.trimEnd();
  if (props.fields?.data?.datasource) {
    return (
      <div className={`container-default component ${styles}`}>
        <div data-class-change className={containerStyles}>
          This container contains a datasource item.
        </div>
        <CountryAndLanguageSlidesContent slides={props.fields.data.datasource.children.results} />
      </div>
    );
  } else {
    return (
      <div className={`container-default component ${styles}`}>
        <div data-class-change className={containerStyles}>
          This container does not contain a datasource item.
        </div>
      </div>
    );
  }
};
