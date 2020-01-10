interface MatchStatusKeyNumberValue {
    [key: number]: MatchStatus
}

export class MatchStatus {
    constructor(public readonly value: number, public readonly displayName: string) {
    }
}

export const MatchStatusType = {
    NOT_STARTED: new MatchStatus(1, "-"),//NOSONAR
    POSTPONED: new MatchStatus(2, "Postp."),//NOSONAR
    START_DELAYED: new MatchStatus(3, "Delayed"),//NOSONAR
    CANCELLED: new MatchStatus(4, "Canc."),//NOSONAR
    LIVE: new MatchStatus(5, "mm'"),//NOSONAR
    FIRST_HALF: new MatchStatus(6, "mm'"),//NOSONAR
    SECOND_HALF: new MatchStatus(7, "mm'"),//NOSONAR
    OVERTIME: new MatchStatus(8, "mm+injury_time_shown'"),//NOSONAR
    FIRST_HALF_EXTRA: new MatchStatus(9, "mm' or mm+injury_time_shown'"),//NOSONAR
    SECOND_HALF_EXTRA: new MatchStatus(10, "mm' or mm+injury_time_shown'"),//NOSONAR
    AWAITING_PENALTIES: new MatchStatus(11, "Await. PEN"),//NOSONAR
    PENALTIES: new MatchStatus(12, "PEN"),//NOSONAR
    PAUSE: new MatchStatus(13, "Pause"),//NOSONAR
    AWAITING_EXTRA_TIME: new MatchStatus(14, "Await. ET"),//NOSONAR
    INTERRUPTED: new MatchStatus(15, "INT"),//NOSONAR
    HALFTIME: new MatchStatus(16, "HT"),//NOSONAR
    FULLTIME: new MatchStatus(17, "FT"),//NOSONAR
    EXTRA_TIME: new MatchStatus(18, "mm+injury_time_shown'"),//NOSONAR
    DELAYED: new MatchStatus(19, "Delayed"),//NOSONAR
    ABANDONED: new MatchStatus(20, "AB"),//NOSONAR
    EXTRA_TIME_HAFT_TIME: new MatchStatus(21, "ETHT"),//NOSONAR
    ENDED: new MatchStatus(22, "FT"),//NOSONAR
    CLOSED: new MatchStatus(23, "FT"),//NOSONAR
    ENDED_EXTRA_TIME: new MatchStatus(24, "AET"),//NOSONAR
    ENDED_AFTER_PENALTIES: new MatchStatus(25, "AP")//NOSONAR
};

export const eventNeedBeShownMinute = [
    MatchStatusType.LIVE.value,
    MatchStatusType.FIRST_HALF.value,
    MatchStatusType.SECOND_HALF.value,
    MatchStatusType.FIRST_HALF_EXTRA.value,
    MatchStatusType.SECOND_HALF_EXTRA.value,
    MatchStatusType.OVERTIME.value,
    MatchStatusType.EXTRA_TIME.value
];

export const cancelStatus = [
    MatchStatusType.CANCELLED.value,
    MatchStatusType.POSTPONED.value,
    MatchStatusType.ABANDONED.value,
    MatchStatusType.START_DELAYED.value,
    MatchStatusType.DELAYED.value,
    MatchStatusType.INTERRUPTED.value
];

export const MatchStatusTypeDic: MatchStatusKeyNumberValue = {};

Object.keys(MatchStatusType)
    .forEach(function (key) {
        const matchStatusKeyStringValue = MatchStatusType as any;

        MatchStatusTypeDic[matchStatusKeyStringValue[key].value] = matchStatusKeyStringValue[key];
    });