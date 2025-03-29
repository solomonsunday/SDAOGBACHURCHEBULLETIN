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
            <p className="dark:text-white">1 Peter 5:8</p>
          </div>
          <p className="text-orange-500">
            “Be sober-minded; be watchful. Your adversary the devil prowls
            around like a roaring lion, seeking someone to devour. The days are
            evil; the enemy is seeking to take advantage of us. Therefore, let
            nothing distract you from beholding Christ daily in word, in prayer
            with and in fellowship. Happy Sabbath.”
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
