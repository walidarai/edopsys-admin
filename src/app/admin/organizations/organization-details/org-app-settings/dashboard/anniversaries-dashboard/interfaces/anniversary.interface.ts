import { AnniversaryBirthdayTypeEnum } from '../enums/anniversary.enum';

export interface AnniversaryAndBirthday {
    initials: string;
    name: string;
    years?: number;
    date: string;
    color: string;
    type: AnniversaryBirthdayTypeEnum;
}
