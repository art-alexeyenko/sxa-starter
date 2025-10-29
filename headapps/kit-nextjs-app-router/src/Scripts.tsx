'use client';
import { JSX } from 'react';
import { EditingScripts } from '@sitecore-content-sdk/nextjs';
import CdpPageView from 'components/content-sdk/CdpPageView';
import BYOC from 'src/byoc';

const Scripts = (): JSX.Element => {
  return (
    <>
      <BYOC />
      <CdpPageView />
      <EditingScripts />
    </>
  );
};

export default Scripts;
