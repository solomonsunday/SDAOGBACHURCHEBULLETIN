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
            {/* <span className="font-bold">ADVENTIST MEN ORGANIZATION:</span> */}
            Ogba district Children Ministry quiz comes up as follows: Date:
            29/3/2025 Time: 2:30pm Venue: District HQ (Ogba Church){" "}
            <span className="font-bold">
              PS: The Children are encouraged to wait behind after worship today
              for preparations
            </span>
          </li>
          <li className="pb-2 border-b border-orange-200">
            AMO monthly meeting holds Sunday 06/04/25 Time: 10:00am Venue: Board
            room
          </li>

          <li className="pb-2 border-b border-orange-200">
            Adventurers Family Camp comes up on April 17th -20th, 2025. Theme: A
            Walk with Jesus (1 John 2:6). Venue: Ogba Church. Registration Fee:
            ₦6,000.
          </li>

          <li className="pb-2 border-b border-orange-200">
            Appeal for Donation towards Zoom Subscription: Our yearly Zoom
            subscription is $160. Please kindly donate towards it, preferably in
            dollars as the Lord impresses it in your heart.
          </li>

          <li className="pb-2 border-b border-orange-200">
            Here is the funeral arrangements in honour of Late brother Mr.
            Innocent O. Ogbenyia; Service of songs: SDA Church Ogba, 6/4/2025
            time: 4:00pm. Burial service: At his hometown, Umuodu Umuakwu in
            Isiala Ngwa L.G.A of Abia state Date: 17/4/2025 Time: 10:00am.
          </li>
          <li className="pb-2 border-b border-orange-200">
            WNUC Pathfinders comporee holds as follows: Theme: OBEDIENCE Date:
            August 10th - 17th, 2025 Venue: Reno Secondary School, Sagamu, Ogun
            state Registration: #12,500
          </li>
          <li className="pb-2 border-b border-orange-200">
            The church leadership is calling for a regular donation of snacks
            and support from members for our children in Baby steps and
            beginners class upstairs.
          </li>
          <li className="pb-2 border-b border-orange-200">
            Keep the Church environment clean. Dispose every trash properly in
            the waste baskets.{" "}
          </li>
          <li className="pb-2 border-b border-orange-200">
            LMC Elders Certification comes up April 13, 2025. All Elders are to
            prepare for this by studying the Elders' Handbook.
          </li>
          <li className="pb-2 border-b border-orange-200">
            <span className="font-bold">
              LMC CHILDREN DEPARTMENT {"=>"} Zonal Quiz:
            </span>{" "}
            Ogba zone (Ogba, Iju and Ojokoro District) LMC children department
            quiz holds as follows: Date: 20/4/2025. Venue: SDA Church Ogba.
            Material for Study: Michael Asks Why. Beginner(1-3yrs): God's words.
            Kindergarten (4-6yrs): Our worst enemy. Primary (7-9yrs): Where's
            did sin come from? and Can the dead speak? Power Point (10-12yrs):
            God's unchanging law and Death and Resurrection. Real time and
            Cornerstone will study the Book of Daniel- complete study, Images
            and symbols.
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
