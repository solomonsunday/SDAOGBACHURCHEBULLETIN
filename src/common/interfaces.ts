export interface ISignUpUser {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface ILoginUser {
  userName: string;
  password: string;
}

export interface IAnnouncement {
  content: string;
}

export interface IBaseEntity {
  id: string;
  entityName: string;
  createdDate: string;
  createdBy: string;
  updatedDate: string;
  updatedBy: string;
}

export interface IBulletin extends IBaseEntity {
  status: "published" | "";

  // welcome
  themeForTheQuarter: string;
  topicForTheWeek: string;
  lessonMemoryTest: string;
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
}
