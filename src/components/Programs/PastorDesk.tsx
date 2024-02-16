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
            <p className="dark:text-white">
              Ellen G. White, Adventist Home, p305.
            </p>
          </div>
          <p className="text-orange-500">
            “Every Christian home should have rules; and parents should, in
            their words and in their deportment toward each other, give to the
            children a precious living example of what they desire them to
            be….Teach the children and youth to respect themselves, to be true
            to God, true to principles; teach them to respect and obey the law
            of God. Then these principles will control their lives and will be
            carried out in their association with others…Ellen G. White,
            Adventist Home, p305.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
