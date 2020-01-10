import { HTMLAttributes } from "react";

export type Props = HTMLAttributes<HTMLTableRowElement> & {
    href: string;
    imageSrc: string;
};