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
            <p className="dark:text-white">
              Ellen G. White, Counsels for the Church, 261
            </p>
          </div>
          <p className="text-orange-500">
            “God made from the man a woman, to be a companion and helpmeet for
            him, to be one with him, to cheer encourage, and bless him, he in
            his turn to be her strong helper. All who enter into matrimonial
            relations with a holy purpose – the husband to obtain the pure
            affections of a woman’s heart, the wife to soften and improve her
            husband’s character and give completeness-fulfil God’s purpose for
            them."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
