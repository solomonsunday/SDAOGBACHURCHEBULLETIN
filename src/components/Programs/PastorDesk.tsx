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
            <p className="dark:text-white">(Ellen G. White, Manuscript 42)</p>
          </div>
          <p className="text-orange-500">
            'The father is the priest of the family. The souls of his wife and
            children, as God’s property, should be to him of the highest value,
            and he should faithfully guide the formation of their characters.
            The care of his children from infancy should be his first
            consideration; for it is for their present and eternal good that
            they develop right characters. He should carefully weigh his words
            and actions, considering their influence, and the results they may
            produce. (Ellen G. White, Manuscript 42 Happy AMO day. Adventist
            Men!)'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
