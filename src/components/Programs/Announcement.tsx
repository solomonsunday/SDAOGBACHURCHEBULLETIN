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
            GC 100 days of prayers program commenced April 4th – July 12th, 2025
            via zoom, time is 6:30a.m – 7:00a.m daily. This has begun and will
            end on the last day of GC Session.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Ogba Church Hymnal Sabbath holds on 28/06/2025.
          </li>{" "}
          <li className="pb-2 border-b border-orange-200">
            Today is our World Refugee Sabbath, let’s continue to pray for the
            displaced people in our community and beyond.{" "}
          </li>
          <li className="pb-2 border-b border-orange-200">
            LMC ASAM holds her All Night Prayer service tonight. 21/06/2025.
            Time is 10:00p.m after a brief meeting by 8:30p.m. Venue: Valley
            Side SDA Church Oregun.
          </li>{" "}
          <li className="pb-2 border-b border-orange-200">
            Ogba District AMO Inaugural Meeting holds tomorrow, Sunday
            22/06/2025. Time is 10:00a.m. Venue is Akiode Church.
          </li>{" "}
          <li className="pb-2 border-b border-orange-200">
            Please support the School (ANPS) Project as we anticipate responses
            to the appeal letters given to members and free will donations
            towards the development of our School.
          </li>
          <li className="pb-2 border-b border-orange-200">
            There will be a Fasting and Prayer program here in Ogba Church on
            5/7/2025. Please prepare for it as all are encouraged to participate
          </li>
          <li className="pb-2 border-b border-orange-200">
            2025 LMC Singles Conference holds on 6/07/2025 at SDA Church
            Ilupeju. Time is 9:00a.m.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Ogba District Combine Service hold July 12, 2025 here in Ogba
            Church.
          </li>
          <li className="pb-2 border-b border-orange-200">
            LMC Women’s Convention comes up as follows: Date: 26th – 31st
            August, 2025. Venue: Ikorodu, Lagos State. Registration: ₦20,000.
          </li>
          <li className="pb-2 border-b border-orange-200">
            WNUC AMO Convention holds August 6-10, 2025. More details to be
            provided later.
          </li>
          <li className="pb-2 border-b border-orange-200">
            WNUC Pathfinders Camporee holds in August 10th – 17th, 2025 at Reno
            Secondary School, Sagamu, Ogun State. Theme: OBEDIENCE. Registration
            is closed.
          </li>
          <li className="pb-2 border-b border-orange-200">
            WNUC YAWM Convention comes up as follows: Date: 26th -31st August,
            2025 Venue: Babcock University, Ogun State. Registration: ₦23,000
            (early bird) deadline June 30th. Late registration: ₦25,000 (1-31
            July, 2025)
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
            GC Session comes up July 3rd – 12th, 2025. Lets pray for its
            success.
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
