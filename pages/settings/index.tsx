import * as React from 'react';
import { NextPage } from 'next';
import Layout from '../../components/shared/layout/Layout';
import { useTranslation, LocalizedPage } from '../../common/helpers/Localizer';

const SettingPage: LocalizedPage = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <div>Setting Page</div>
    </Layout>
  );
};

SettingPage.getInitialProps = async () => {
  return {
    namespacesRequired: ['esports']
  };
};

export default SettingPage;
