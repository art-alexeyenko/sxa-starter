import { JSX } from 'react';
import { ComponentProps } from 'lib/component-props';
import { Field, withDatasourceCheck } from '@sitecore-content-sdk/nextjs';

type CountryAndLangSlideItem = {
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
        results: CountryAndLangSlideItem[];
      };
    };
  };
}

type ComponentAndLangProps = ComponentProps & {
  params: { [key: string]: string };
  fields: Fields;
};

const CountryAndLang = (props: ComponentAndLangProps): JSX.Element => {
  // Query results in integrated GraphQL replace the normal `fields` data
  // i.e. with { data, }
  const { datasource } = props.fields.data;

  return (
    <div>
      {datasource && (
        <div>
          <h4>Datasource Item (via Integrated GraphQL)</h4>
          id: {datasource.id}
          <br />
          name: {datasource.name}
          <br />
          children: {datasource.children.results.toString()}
        </div>
      )}
    </div>
  );
};

export default withDatasourceCheck()<ComponentAndLangProps>(CountryAndLang);
