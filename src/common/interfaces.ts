import { IBaseEntity } from "./base.interface";

export interface ISignUpUser {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
}

export interface IAnnouncement extends IBaseEntity {
  content: string;
}

export interface ISignIn {
  userName: string;
  password: string;
}

export interface IAnnouncement {
  content: string;
  createdDate: string;
}

export interface IUser extends ISignUpUser, Omit<ISignUpUser, "password"> {
  id: string;
}

export interface IKeywords {
  onSearch: (query: string) => void;
}

export interface IBulletin extends IBaseEntity, Pick<IAnnouncement, "content"> {
  status: BulletinStatusEnum;

  // welcome
  themeForTheQuarter: string;
  topicForTheWeek: string;
  lessonMemoryTest: string;
  lessonMemoryVerse: string;
  onLineZoomLink: string;

  // sabbath school
  singspirationTime: string;
  songLeader: string;
  openingPrayerBy: string;
  openningRemarkBy: string;
  openingHymn: string;
  openingHymnBy: string;
  keepingOnCourseBy: string;
  missionSpotlightBy: string;
  lessonIntroductionBy: string;
  specialFeature: string;
  unitActivities: string;
  lessonSummaryBy: string;
  friendTimeBy: string;
  annnouncementClosingRemarkBy: string;
  SSclosingPrayerBy: string;
  SSClosingHymnNo: string;
  SSClosingHymnBy: string;

  //   divine service dto
  prelude: string;
  callToWorshipHymnNo: string;
  callToWorshipBy: string;
  invocation: string;
  divineServiceOpeningHymnNo: string;
  divineServiceOpeningHymnBy: string;
  pastoralPrayer: string;
  pastoralPrayerBy: string;
  stewardshipBy: string;
  musicalSelectionBy: string;
  spiritualReadingBibleVerse: string;
  spiritualReadingBibleVerseBy: string;
  sermonTitle: string;
  preacher: string;
  hymnOfConcecrationNo: string;
  hymnOfConcecrationNoBy: string;
  divinceServiceClosingHymnNo: string;
  divinceServiceClosingHymnBy: string;
  benediction: string;
  doxology: string;

  //   pastor's desk
  pastorDeskBibleVerse: string;
  pastorDeskBibleVerseDescription: string;

  // announcement
  announcements?: IAnnouncement[];
  announcementIds: string[];

  start_date: string;
  end_date: string;
}

export enum BulletinStatusEnum {
  DRAFT = "draft",
  PAST = "past",
  PUBLISHED = "published",
}
export type BulletinStatusType = `${BulletinStatusEnum}`;

export interface CreateBulletinDTO
  extends Omit<
    IBulletin,
    | "id"
    | "createdAt"
    | "updatedAt"
    | "entityName"
    | "createdDate"
    | "createdBy"
    | "updatedDate"
    | "updatedBy"
    | "announcements"
  > {}
