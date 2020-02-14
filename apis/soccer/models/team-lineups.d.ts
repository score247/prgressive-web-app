import { Coach } from "./coach";
import { Player } from "./player";
import { TimelineEvent } from "./timeline-event";

export interface TeamLineups {
    Id: string;
    Name: string;
    IsHome: boolean;
    Coach: Coach;
    Formation: string;
    Players: Player[];
    Substitutions: Player[];
    SubstitutionEvents: TimelineEvent[];
}