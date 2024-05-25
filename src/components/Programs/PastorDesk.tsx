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
            <p className="dark:text-white">Ephesians 6:4 (Amp)</p>
          </div>
          <p className="text-orange-500">
            'Fathers, do not provoke your children to anger, do not exasperate
            them to the point of resentment with demands that are trivial or
            unreasonable or humiliating or abusive; nor by showing favoritism or
            indifference to any of them, but bring them up tenderly, with
            lovingkindness in the discipline and instruction of the Lord May we
            not abuse our children in the name of correction and discipline. '
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
