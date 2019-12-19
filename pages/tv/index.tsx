import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/shared/layout/Layout';
import { useTranslation, LocalizedPage } from '../../common/helpers/Localizer';

const TVPage: LocalizedPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>TV Page</div>
    </Layout>
  );
};

TVPage.getInitialProps = async () => {
  return {
    namespacesRequired: ['esports']
  };
};

export default TVPage;
