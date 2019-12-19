import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/shared/layout/Layout';
import { useTranslation, LocalizedPage } from '../../common/helpers/Localizer';

const MobilePage: LocalizedPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>Mobile Page</div>
    </Layout>
  );
};

MobilePage.getInitialProps = async () => {
  return {
    namespacesRequired: ['esports']
  };
};

export default MobilePage;
