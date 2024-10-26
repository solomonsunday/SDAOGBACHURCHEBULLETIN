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
            GC Theme for the year 2024: Chosen for Mission
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
            Online prayer meeting / morning devotion holds every Sunday and
            Wednesday morning (5:00a.m -6:00a.m) via zoom. Zoom link to be
            shared on the church’s WhatsApp, Facebook and Instagram platforms,
            you can also find the Zoom links on the e-bulletin app
          </li>

          <li className="pb-2 border-b border-orange-200">
            LMC YAWM Retreat is currently ongoing here in Ogba Church and will
            end tomorrow. We pray for its success and safe journey for all
            delegates
          </li>

          <li className="pb-2 border-b border-orange-200">
            LMC AMO Monthly meeting holds here in Ogba Church tomorrow, 27th
            October, 2024. Time is 11:00a.m. All men please endeavour to attend.
          </li>

          <li className="pb-2 border-b border-orange-200">
            AYM Ogba Youth Curriculum Campout holds Oct. 31st – Nov. 2nd, 2024
            at Ogba Church, Registration is ₦3,000. Arrival time is 2p.m. Those
            to attend: Adventurers, Pathfinders, Ambassadors, Young Adult,
            Mentees, Master Guides.
          </li>

          <li className="pb-2 border-b border-orange-200">
            There will be Week of Prayer from 2nd – 9th November, 2024. Let’s
            prepare to be a part of this program.
          </li>

          <li className="pb-2 border-b border-orange-200">
            Pastors Appreciation Day for Ogba Church comes up on 23/11/2024
            Let's plan for it's success.
          </li>

          <li className="pb-2 border-b border-orange-200">
            The Ogba district Pastor, Pastor Happy Kona will be away on study
            leave from Sept.16th – Nov. 10th, 2024. Let’s support and uphold him
            in our prayers.
          </li>

          <li className="pb-2 border-b border-orange-200">
            There will be LMC Combined Worship here in Ogba on the 16th of
            November, 2024
          </li>
          <li className="pb-2 border-b border-orange-200">
            ICT Department: Kindly support the Church media ministry if you are
            yet to do so. We need the following items for more effectiveness in
            the ICT Department of the Church a. A camera,
            Sony NX3.
          </li>
          {/* <li className="pb-2 border-b border-orange-200">
            <span className="font-bold">ICT Department:</span>Kindly support the
            Church media ministry if you are yet to do so.. We need the
            following items for more effectiveness in the ICT Department of the
            Church. (a) A camera Sony NX3.
          </li> */}

          <li className="pb-2 border-b border-orange-200">
            ⁠WAD impact evangelism holds next year March. Ogba District has been
            assigned 6 centers. Members are encouraged to support this program.
          </li>

          <li className="pb-2 border-b border-orange-200">
            <span className="font-bold">
              PAN AFRICAN YOUTH CONGRESS (ECD / SID / WAD) holds as follows:
            </span>
            Venue: Babcock University, Nigeria Date: 23 - 28 Decembers, 2024
            Registration: Early Bird-#57,000 This is for Senior Youths & Master
            Guides
          </li>

          <li className="pb-2 border-b border-orange-200">
            Support the Church projects for this year: (a) Empowerment of
            members (b) Oke-Ira evangelism project (c) Reconstruction and
            renovation of the baptistry (d) Renovation and beautification of the
            Fence (e) Construction of more toilets facilities (f) Raising of the
            Church School to Standard
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
