import React from "react";

const PastorDesk = () => {
  return (
    <div id="pastordesk">
      <section className="pt-10 pb-10" id="features">
        <div className="dark:text-orange-400 font-serif text-3xl pb-4 mb-5 text-[#304D30] text-center border-b border-[#304D30]">
          Pastor's Desk
        </div>
        <div className="space-y-3">
          <div className="underline text-lg font-semibold">
            <p className="dark:text-white">Counsels for the Church. p357</p>
          </div>
          <p className="text-orange-500">
            We have nothing to fear for the future except as we shall forget the
            way the Lord has led us and His teaching in our past history. Ellen
            G. White, Counsels for the Church. p357.
            <br />
            Although we cannot change the past, and we should not be stuck to
            it, there are valuable lesson in our history. If we fail to learn
            them, We may end up repeating history in negative ways”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
