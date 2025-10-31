import React from "react";

const Announcement = () => {
  return (
    <section className="pt-10 " id="announcement">
      <div className="dark:text-orange-400 font-serif text-3xl pb-2 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
        Combined Announcement
      </div>
      <div className="space-y-4 dark:text-white">
        <ol className="space-y-4 list-decimal">
          <li className="pb-2 border-b border-orange-200 font-extrabold text-orange-400">
            GC Theme for the year 2025: I will go (SDAH 319)
          </li>
          <li className="pb-2 font-bold border-b border-orange-200">
            Members are encouraged to use the barcode at the entrance of the
            church to get the e-bulletin .
            <span className="font-bold text-orange-200">
              {" "}
              Please Note: On the e-bulletin app, you will find links to join
              both the midweek prayer and early morning prayers.
            </span>{" "}
            The hard copy in limited quantity is only for the Elderly ones who
            are not tech savvy or those without a smart phone.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Online Midweek service holds 8:00pm - 9:00pm on Wednesdays, Online
            prayer meeting / morning devotion holds every Sunday and Wednesday
            morning (5:00a.m -6:00a.m) via zoom. Zoom link to be shared on the
            church’s WhatsApp, Facebook and Instagram platforms, you can also
            find the Zoom links on the e-bulletin app
          </li>
          <li className="pb-2 border-b border-orange-200">
            Global Annual Week of Prayer starts today 1st -8th November, 2025.
            Week of Prayer Materials is ₦500 per copy.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Our weekly Bible Study holds today by 4:00p.m
          </li>{" "}
          <li className="pb-2 border-b border-orange-200">
            Tomorrow’s AWM Skill Acquisition program hols a follows: Date:
            2/11/2025. Time: 9a.m. Venue: SDA Church Ogba. Available Skills:
            Tofu and Liquid Soap making.
          </li>{" "}
          <li className="pb-2 border-b border-orange-200">
            Every man in the church is reminded of the school project which AMO
            pledged to support the school board with the sum of ₦500,000. To
            achieve this, every man is to pay the minimum sum of 10k. The school
            is our heritage.
          </li>
          <li className="pb-2 border-b border-orange-200">
            AMO Monthly Meeting holds tomorrow 2/11/2025. Time is 10:00a.m and
            Venue is: Board room.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Please support the School (ANPS) Project as we anticipate responses
            to the appeal letters given to members and free will donations
            towards the development of our School.
          </li>
          <li className="pb-2 border-b border-orange-200">
            LMC 2025 Annual Family Camp meeting is coming up next weekend
            between 6th -9th November, 2025. Venue: Orion School, Gberigbe,
            Ikorodu. Lagos. All interested attendees are to register with Elder
            Adeoti for proper planning of both feeding and logistics as the
            district intends to take care of all her members in attendance.
          </li>
          {/* <li className="pb-2 border-b border-orange-200 italic bg-pink-400 rounded-md text-center p-2">
            <span className="font-bold capitalize underline">
              Wedding Bell:
              <br />{" "}
            </span>
            Sis. Chinweike Glory Fredrick and{" "}
            <span className="font-bold">Bro. Iruka Innocent Johnson </span>
            Date: 25/05/2025 Time: 12:00 noon Venue: Umuokegwu Omoba, Isialangwa
            south, Abia State.
          </li> */}
          <li className="pb-2 border-b border-orange-200">
            The church leadership is calling for a regular donation of snacks
            and support from members for our children in Baby steps and
            beginners class upstairs.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Keep the Church environment clean. Dispose every trash properly in
            the waste baskets.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Hope Channel Media Evangelism holds Feb. 28 –March 14, 2026. There
            will be 150 downlinks centres in LMC.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Support the Church projects for this year a. Empowerment of members
            b. Oke Ira evangelism project c. Renovation and beautification of
            the Fence d. Construction of more toilets facilities e. Raising of
            the Church school to Standard.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Return your faithful tithes and give generous offerings. Send your
            tithes, offerings and other donations to the church account{" "}
            <span className="text-orange-400 font-bold">
              2020086453 First Bank Seventh-day Adventist Church Ogba.
            </span>{" "}
            Call or Whatsapp 07036586617 to share or seek more details about
            giving.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Announcement;
