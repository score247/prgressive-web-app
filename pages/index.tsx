import "./Index.scss";
import { NextPage } from "next";
import Layout from '../components/shared/Layout';

const Index: NextPage<{ userAgent: string }> = ({ userAgent }) => (
    <Layout>
      <div className="index-text">
        Index Page!
        <p>Browser: {userAgent}</p>
      </div>
    </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req 
    ? req.headers["user-agent"] || "" 
    : navigator.userAgent;
    
  return { userAgent };
};

export default Index;