import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import styled from "styled-components";
import { useTranslation } from 'react-i18next';

import Layout from "../../components/Layout";

import {
  selectData,
  getDataPersist,
} from './slice';

export const PersistPage = memo((props) => {
  const { t } = useTranslation();
  const data = useSelector(selectData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataPersist());
  });

  return (
    <>
      <Layout>
        <h1 className="title-page">
          {t('Persist Page')}
        </h1>
        <div>
          Data Render:
          {data.map((item: string, index: number) => <div key={`item-${index}`}>{item}</div>)}
        </div>
      </Layout>
    </>
  );
});