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
            <p className="dark:text-white"> (Proverbs 19:11(NASB))</p>
          </div>
          <p className="text-orange-500">
            'A person’s discretion makes him slow to anger, And it is his glory
            to overlook and offense May the Lord, the grace and wisdom of
            patience, forgiveness and self control as we deal with issues of
            life in Jesus Christ name.'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
