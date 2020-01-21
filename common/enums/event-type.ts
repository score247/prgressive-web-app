export class EventType {
    constructor(public readonly value: number, public readonly displayName: string) {
    }
}

export const EventTypes = {
    BREAK_START: new EventType(1, "break_start"),//NOSONAR
    INJURY_TIME_SHOWN: new EventType(2, "injury_time_shown"),//NOSONAR
    MATCH_ENDED: new EventType(3, "match_ended"),//NOSONAR
    MATCH_STARTED: new EventType(4, "match_started"),//NOSONAR
    PENALTY_MISSED: new EventType(5, "penalty_missed"),//NOSONAR
    PENALTY_SHOOTOUT: new EventType(6, "penalty_shootout"),//NOSONAR
    PERIOD_START: new EventType(7, "period_start"),//NOSONAR
    RED_CARD: new EventType(8, "red_card"),//NOSONAR
    SCORE_CHANGE: new EventType(9, "score_change"),//NOSONAR
    SUBSTITUTION: new EventType(10, "substitution"),//NOSONAR
    YELLOW_CARD: new EventType(11, "yellow_card"),//NOSONAR
    YELLOW_RED_CARD: new EventType(12, "yellow_red_card"),//NOSONAR
    CANCELLED_VIDEO_ASSISTANT_REFEREE: new EventType(13, "cancelled_video_assistant_referee"),//NOSONAR
    CORNER_KICK: new EventType(14, "corner_kick"),//NOSONAR
    FREE_KICK: new EventType(15, "free_kick"),//NOSONAR
    GOAL_KICK: new EventType(16, "goal_kick"),//NOSONAR
    INJURY: new EventType(17, "injury"),//NOSONAR
    INJURY_RETURN: new EventType(18, "injury_return"),//NOSONAR
    SHOT_OFF_TARGET: new EventType(19, "shot_off_target"),//NOSONAR
    SHOT_ON_TARGET: new EventType(20, "shot_on_target"),//NOSONAR
    SHOT_SAVED: new EventType(21, "shot_saved"),//NOSONAR
    THROW_IN: new EventType(22, "throw_in"),//NOSONAR
    VIDEO_ASSISTANT_REFEREE: new EventType(23, "video_assistant_referee"),//NOSONAR
    VIDEO_ASSISTANT_REFEREE_OVER: new EventType(24, "video_assistant_referee_over"),//NOSONAR
    POSSIBLE_VIDEO_ASSISTANT_REFEREE: new EventType(25, "possible_video_assistant_referee"),//NOSONAR
    OFFSIDE: new EventType(26, "offside"),//NOSONAR
    PENALTY_AWARDED: new EventType(27, "penalty_awarded"),//NOSONAR
    PERIOD_SCORE: new EventType(28, "period_score"),//NOSONAR
    SCORE_CHANGE_BY_PENALTY: new EventType(29, "score_change_by_penalty"),//NOSONAR
    SCORE_CHANGE_BY_OWN_GOAL: new EventType(30, "score_change_by_own_goal"),//NOSONAR
    SUBSTITUTION_IN: new EventType(31, "substitution_in"),//NOSONAR
    SUBSTITUTION_OUT: new EventType(32, "substitution_out"),//NOSONAR
};