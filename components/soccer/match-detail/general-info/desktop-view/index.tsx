import React from "react";
import { DateTimeFormat } from "../../../../../common/constants";
import { Props } from "./type";
import HomeTeam from "../home-team";
import AwayTeam from "../away-team";
import Score from "../score";
import { useTranslation } from "../../../../../common/helpers/Localizer";
import { formatDate } from "../../../../../common/helpers/date-time-helper";


const DesktopView: React.FC<Props> = props => {
  const { match } = props;
  const { t } = useTranslation();
  return (
    <div className="general-info">
      <div className="extra-info">
        <div className="league-name">{match?.LeagueName}</div>
        <div className="kick-off-time">
          {`${t("kickofftime")}: ${formatDate(
            new Date(match.EventDate[0]),
            DateTimeFormat.DATE_TIME
          )}`}
        </div>
      </div>
      <div className="main-info">
        <HomeTeam match={match} />
        <Score match={match} />
        <AwayTeam match={match} />
      </div>
    </div>
  );
};

export default DesktopView;
