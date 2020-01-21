import "./style.scss";
import * as React from "react";
import Layout from "../../components/layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const Basketball: LocalizedPage = props => {
  return (
    <Layout title="Basketball" breadcrumbs={[props.t(ResourceKey.BASKETBALL)]}>
      <h1>{props.t(ResourceKey.BASKETBALL)}</h1>
      <table>
        <thead>
          <th></th>
          <th>League</th>
          <th>Time</th>
          <th>Status</th>
          <th>Home</th>
          <th>Score</th>
          <th>Away</th>
          <th>1H</th>
          <th>Favorite</th>
        </thead>
        <tbody>
          <tr>
            <td rowSpan={2}>checkbox</td>
            <td rowSpan={2}>AUS D1</td>
            <td rowSpan={2}>03:30</td>
            <td rowSpan={2}></td>
            <td>Sepidrood Rasht</td>
            <td> 2 - 2</td>
            <td>Baderan Tehran FC</td>
            <td rowSpan={2}></td>
            <td rowSpan={2}></td>
          </tr>
          <tr>
            <td colSpan={3}>FT[1 - 1], AET[1 - 1], AGG[3 - 3], PEN[5 - 4]</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

Basketball.getInitialProps = () => ({
  namespacesRequired: [ResourceType.BASKETBALL]
});

export default withTranslation()(Basketball);
