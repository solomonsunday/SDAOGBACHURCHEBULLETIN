"use client";

import BackButton from "@/components/Admin/backButton";
import Container from "@/components/Admin/Container";
import AdminLayout from "@/components/Admin/layout";
import { Spinner } from "@/components/Common/Spinner";
import { useEffect } from "react";
import { useGetBulletinById } from "@/hooks/useGetBulletinById";

export default function EditBulletin({ params }: { params: { slug: string } }) {
  const { fetchBulletinById, bulletin, isLoading } = useGetBulletinById();
  const bulletinId = params.slug;
  console.log(bulletin, "bulletin");

  useEffect(() => {
    fetchBulletinById(bulletinId);
  }, [bulletinId]);

  return (
    <AdminLayout>
      <Container className="md:px-[3.125rem] px-[2.5rem] pt-6 pb-7 ">
        <div className=" flex flex-wrap gap-5 justify-between ml-[.125rem] mr-[.625rem]">
          <BackButton text="Bulletin List Page" />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center h-96">
            {" "}
            <Spinner color="orange" />
          </div>
        ) : (
          <div className="w-full md:flex-row flex-col h-fit rounded-lg gap-y-3 gap-x-3 pb-8 pt-6 px-5 bg-white font-poppins">
            <section className="pt-5 md:pt-0" id="sabbathschool">
              <div className="font-serif text-3xl pb-2 mb-5 dark:text-orange-400 text-[#304D30] text-center italic ">
                Welcome to{" "}
                <span className="text-base italic text-orange-500">
                  Seventh-Day Adventist Church, OGBA{" "}
                </span>
                <div className="border border-orange-500 "></div>
              </div>
              <div className="space-y-2">
                <div>
                  <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
                    <p className="underline text-orange-400">
                      THEME FOR THIS QUARTER
                    </p>
                    {bulletin?.themeForTheQuarter}
                  </blockquote>
                </div>
                <div>
                  <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
                    <p className="underline text-orange-400">
                      TOPIC FOR THE WEEK
                    </p>
                    {bulletin?.topicForTheWeek}
                  </blockquote>
                </div>
                <div>
                  <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8 ">
                    <p className="underline text-orange-400">MEMORY TEXT</p>

                    <span className=" italic px-1">
                      {bulletin?.lessonMemoryTest}
                      <span className="font-bold">
                        ({bulletin?.lessonMemoryVerse})
                      </span>
                    </span>
                  </blockquote>
                </div>

                <div>
                  <blockquote className="rounded-lg capitalize bg-[#EEF0E5] py-2 pl-8  overflow-auto">
                    <a
                      href={bulletin?.onLineZoomLink}
                      target="_blank"
                      className="cursor-pointer text-blue-700"
                    >
                      <div className="">
                        <p className="underline">Join us Online via Zoom</p>

                        <p>Click here to join us online </p>
                        <span className=" text-orange-500">
                          Every Sabbath Morning
                        </span>
                      </div>
                    </a>
                  </blockquote>
                </div>
              </div>
            </section>

            <div>
              <section className="pt-10  dark:text-white " id="sabbathschool">
                <div className="font-serif dark:text-orange-400 text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
                  Sabbath School{" "}
                  <span className="text-base">(8:45 - 10:45 AM)</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-3  capitalize">
                    {" "}
                    Singspiration (8:45 AM)
                  </div>
                  <div className="capitalize"> Song Leader</div>

                  <div className="col-span-3  capitalize">
                    Opening Remark (Welcome & Prayer)
                  </div>
                  <div className=""> {bulletin?.openningRemarkBy}</div>

                  <div className="col-span-3  capitalize">
                    Welcome / Supt's Opening Remark
                  </div>
                  <div className=""> - </div>

                  <div className="col-span-3  capitalize">
                    {" "}
                    Welcome / Opening Hymn ({bulletin?.openingHymn})
                  </div>
                  <div className=" capitalize"> {bulletin?.openingHymnBy}</div>
                  <div className="col-span-3  capitalize">
                    {" "}
                    Mission Spotlight{" "}
                  </div>
                  <div className=" capitalize">
                    {" "}
                    {bulletin?.missionSpotlightBy}
                  </div>
                  <div className="col-span-3  capitalize">
                    {" "}
                    Keeping on Course
                  </div>
                  <div className=" capitalize">
                    {" "}
                    {bulletin?.keepingOnCourseBy}
                  </div>
                  <div className="col-span-3  capitalize">
                    {" "}
                    Study Time, Lession Introduction
                  </div>
                  <div className=" capitalize">
                    {" "}
                    {bulletin?.lessonIntroductionBy}{" "}
                  </div>
                  <div className="col-span-3  capitalize">
                    Unit Activities / Lesson Study (40 Mins)
                  </div>
                  <div className=" capitalize"> - </div>
                  <div className="col-span-3  capitalize">Lesson Summary</div>
                  <div className=" capitalize">
                    {" "}
                    {bulletin?.lessonSummaryBy}{" "}
                  </div>
                  <div className="col-span-3  capitalize">Friend's time</div>
                  <div className=" capitalize"> {bulletin?.friendTimeBy}</div>
                  <div className="col-span-3  capitalize">Special Feature</div>
                  <div className=" capitalize">
                    {" "}
                    {bulletin?.specialFeature ? bulletin.specialFeature : "-"}
                  </div>
                  <div className="col-span-3  capitalize">
                    Announcement / Closing Remark
                  </div>
                  <div className=" capitalize">
                    {" "}
                    {bulletin?.annnouncementClosingRemarkBy}
                  </div>
                  <div className="col-span-3  capitalize">
                    Closing Hymn ({bulletin?.SSClosingHymnNo})
                  </div>
                  <div className="">{bulletin?.SSClosingHymnBy}</div>
                  <div className="col-span-3  capitalize">Closing Prayer</div>
                  <div className=""> {bulletin?.SSclosingPrayerBy}</div>
                </div>
              </section>
            </div>
            <div id="divineservice">
              <section className="pt-10 dark:text-white " id="features">
                <div className="font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center dark:text-orange-400 border-b border-[#304D30]">
                  Divine Service{" "}
                  <span className="text-base">(11:00 AM - 12:30 PM)</span>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div className="col-span-3  "> Prelude</div>
                  <div className=""> Organist</div>

                  <div className="col-span-3 ">
                    Call to Worship: ({bulletin?.callToWorshipHymnNo})
                  </div>
                  <div className=""> {bulletin?.callToWorshipBy}</div>
                  <div className="col-span-3 "> Invocation</div>
                  <div className=""> {bulletin?.invocation}</div>
                  <div className="col-span-3 ">
                    {" "}
                    Welcome / opening Hymn ({bulletin?.openingHymn})
                  </div>
                  <div className=""> {bulletin?.openingHymnBy}</div>
                  <div className="col-span-3 "> Pastoral Prayer</div>
                  <div className="">{bulletin?.pastoralPrayerBy}</div>
                  <div className="col-span-3 "> Stewardship </div>
                  <div className=""> {bulletin?.stewardshipBy}</div>
                  <div className="col-span-3 "> Musical Selection (Choir)</div>
                  <div className="">{bulletin?.musicalSelectionBy} </div>
                  <div className="col-span-3 ">
                    Spiritual Reading ({bulletin?.spiritualReadingBibleVerse})
                  </div>
                  <div className="">
                    {" "}
                    {bulletin?.spiritualReadingBibleVerseBy}
                  </div>
                  <div className="col-span-3 ">
                    Hymn of Concecration ({bulletin?.hymnOfConcecrationNo})
                  </div>
                  <div className=""> {bulletin?.hymnOfConcecrationNoBy}</div>
                  <div className="col-span-3 ">
                    Sermon Title{" "}
                    <span className="font-bold">{bulletin?.sermonTitle}</span>
                  </div>
                  <div className=""> {bulletin?.preacher}</div>
                  <div className="col-span-3 ">
                    Closing Hymn ({bulletin?.SSClosingHymnNo})
                  </div>
                  <div className="">{bulletin?.SSClosingHymnBy}</div>
                  <div className="col-span-3 ">Benediction</div>
                  <div className="">{bulletin?.benediction}</div>
                  <div className="col-span-3 ">Doxology</div>
                  <div className=""> Congregation</div>
                </div>
              </section>
            </div>

            <section className="pt-10  px-5" id="announcement">
              <div className="dark:text-orange-400 font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
                Combined Announcement
              </div>
              <div className="space-y-4 dark:text-white">
                {bulletin?.announcementDescription?.map((item) => (
                  <ol className="list-decimal space-y-4">
                    <li className="border-b border-orange-200 font-bold pb-2">
                      {item}
                    </li>
                  </ol>
                ))}
              </div>
            </section>

            <div id="pastordesk">
              <section className="pt-10 pb-10" id="features">
                <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
                  Pastor's Desk
                </div>
                <div className="space-y-3">
                  <div className="underline text-lg font-semibold">
                    <p className="dark:text-white">
                      {bulletin?.pastorDeskBibleVerse}
                    </p>
                  </div>
                  <p className="text-orange-500">
                    {bulletin?.pastorDeskBibleVerseDescription}
                  </p>
                </div>
              </section>
            </div>
          </div>
        )}
      </Container>
    </AdminLayout>
  );
}