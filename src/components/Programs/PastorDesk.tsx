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
            <p className="dark:text-white"> Ellen G. White, Education</p>
          </div>
          <p className="text-orange-500">
            'The greatest want of the world is the want of men- men who will not
            be bought or sold; men who in their inmost souls are true and
            honest; men who do not fear to call sin by its right name; men whose
            conscience is as true to duty as the needle to the pole; men who
            will stand for the right though the heavens fall.' Happy Men’s
            Sabbath.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
