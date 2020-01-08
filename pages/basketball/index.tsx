import "./style.scss";
import * as React from "react";
import Layout from "../../components/layout";
import { withTranslation, LocalizedPage } from "../../common/helpers/Localizer";
import { ResourceType, ResourceKey } from "../../common/constants";

const Basketball: LocalizedPage = props => {
  return (
    <Layout title="Basketball" breadcrumbs={[props.t(ResourceKey.BASKETBALL)]}>
      {/* <h1>{props.t(ResourceKey.BASKETBALL)}</h1> */}
      <div className="search-filter">
        <div className="show-hide">
          <span>show all</span>
          <span>hide</span>
          <span>show only</span>
        </div>
        <div className="search">
          <span>Search</span>
        </div>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th className="col-selected"></th>
              <th>league</th>
              <th>time</th>
              <th className="col-status">status</th>
              <th>home</th>
              <th>score</th>
              <th>away</th>
              <th className="col-1st-half width-50">1st half</th>
              <th>favorite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-1" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-1"></label>
                </div> 
              </td>
              <td className="league-0">ISR D4</td>
              <td>13:45</td>
              <td className="col-status">56'</td>
              <td className="text-right"><span className="red-card">1</span><span className="yellow-card">2</span>Shikun HaMizrah</td>
              <td className="text-score">0 - 3</td>
              <td className="text-left">Beitar Ironi Maale Adumim</td>
              <td className="col-1st-half text-1H">1 - 2</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-2" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-2"></label>
                </div> 
              </td>
              <td className="league-1">IND GoaPL</td>
              <td>14:00</td>
              <td className="col-status"></td>
              <td className="text-right">Corps Of Signals</td>
              <td className="text-score">-</td>
              <td className="text-left">Salgaocar Sports Club</td>
              <td className="col-1st-half text-1H">-</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-3" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-3"></label>
                </div> 
              </td>
              <td className="league-1">IND GoaPL</td>
              <td>15:45</td>
              <td className="match-cancel col-status">Canc.</td>
              <td className="text-right">FC Goa B</td>
              <td className="text-score">-</td>
              <td className="text-left">Sporting Clube de Goa</td>
              <td className="col-1st-half text-1H">-</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="ads-text" colSpan={9}>BK8 - Situs resmi taruhan online | Welcome Bonus 100% | Cash Rebate 1.1%</td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-4" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-4"></label>
                </div> 
              </td>
              <td className="league-2">JAP FutL</td>
              <td>20:45</td>
              <td className="col-status"></td>
              <td className="text-right">Voscuore sendai Futsal</td>
              <td className="text-score">-</td>
              <td className="text-left">Peace Does Machida Futsal</td>
              <td className="col-1st-half text-1H">-</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="latest-title" colSpan={9}>Latest Result</td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-5" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-5"></label>
                </div> 
              </td>
              <td className="league-3">SEN D1</td>
              <td>0:30</td>
              <td className="col-status">Postp.</td>
              <td className="text-right">Maccabi Um El Fahem</td>
              <td className="text-score">1 - 3</td>
              <td className="text-left">Hapoel MS Sandala Gilboa</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected">
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4">SPA T6</td>
              <td>6:45</td>
              <td className="col-status">AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="col-selected" rowSpan={2}>
                <div className="checkbox">
                  <input id="checkbox-6" name="Checbox1" type="checkbox" />
                  <label htmlFor="checkbox-6"></label>
                </div> 
              </td>
              <td className="league-4" rowSpan={2}>SPA T6</td>
              <td rowSpan={2}>6:45</td>
              <td className="col-status" rowSpan={2}>AP</td>
              <td className="text-right">Elche CF Ilicitano</td>
              <td className="text-score">1 - 1</td>
              <td className="text-left">CF Intercity</td>
              <td className="col-1st-half text-1H">1 - 1</td>
              <td rowSpan={2}><i className="icon-menu-favorites"/></td>
            </tr>

            <tr>
              <td className="text-extra" colSpan={4}>90 minutes [1 - 1], 120 minutes [1 - 1], aggregate score: 3 - 3, penalty shoot-out [5 - 6]</td>
            </tr>
          </tbody>
        </table>

        <div className="calendar-switch">
          <button className="btn btn-primary-outline" type="button">Thursday 07/12/2019</button>
          <button className="btn btn-primary-outline" type="button">Saturday 09/12/2019</button>
        </div>
      </div>
    </Layout>
  );
};

Basketball.getInitialProps = () => ({
  namespacesRequired: [ResourceType.BASKETBALL]
});

export default withTranslation()(Basketball);
