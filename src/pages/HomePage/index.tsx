import React, { useCallback, useEffect, memo, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { useTranslation } from 'react-i18next';

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import Table from "./components/Table";
import AddNewEmpoyee from "./components/AddNewEmpoyee";

import {
  selectData,
  getDataEmployess,
  incrementPage, decrementPage,
  selectFilter,
} from './slice';

export const HomePage = memo((props) => {
  const { t, i18n } = useTranslation();
  const data = useSelector(selectData);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataEmployess(filter));
  }, [dispatch, filter]);

  const nextPage = useCallback(() => {
    dispatch(incrementPage());
  }, [dispatch]);

  const prevPage = useCallback(() => {
    dispatch(decrementPage());
  }, [dispatch]);

  const emloyess = useMemo(() => data, [data]);

  return (
    <>
      <Layout>
        <h1 className="title-page">
          {t('Home page')}
        </h1>
        <HomePageWrapper>
          <Table data={emloyess} />
          <BlockAction>
            <Button disabled={filter.page <= 1} onClick={() => prevPage && prevPage()}>Prev</Button>
            <Button disabled={filter.limit > data.length} onClick={() => nextPage && nextPage()}>Next</Button>
          </BlockAction>
          <AddNewEmpoyee />
        </HomePageWrapper>
      </Layout>
    </>
  );
});

const HomePageWrapper = styled.div`
`;

const BlockAction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin: 10px auto;
`