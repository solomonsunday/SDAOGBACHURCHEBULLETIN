import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="text-lg font-semibold underline">
            <p className="dark:text-white"> Philippians 2:5-8</p>
          </div>
          <p className="text-orange-500">
            “Let this mind be in you which was also in Christ Jesus, who being
            in the form of God, did not consider it robbery to be equal with
            God, but made himself of no reputation, taking the form of a
            bondservant, and coming in the likeness of men. And being found in
            appearance as a man, He humbled Himself and became obedient to the
            point of death, even the death of the cross"
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
