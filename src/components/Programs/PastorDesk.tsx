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
            <p className="dark:text-white">Matthew 5:23-24</p>
          </div>
          <p className="text-orange-500">
            “Therefore if you bring your gift to the altar, and there remember
            that your brother has something against you, leave your gift there
            before the altar and go your way. First be reconciled to your
            brother, and then come and offer your gift. Don’t go about the
            worship of God with a mouthful of scriptures and songs, yet with a
            heart full of hate, grudge, bitterness and unforgiveness against a
            brother/sister. Forgiveness, peace and reconciliation are part of
            Christian duty."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
