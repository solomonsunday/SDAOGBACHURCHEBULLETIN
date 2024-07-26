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
              {" "}
              Ellen G. White, The Great Controversy 486
            </p>
          </div>
          <p className="text-orange-500">
            'God wants every child of tender age to be His child, to be adopted
            into His family. Young though they may be, the youth may be members
            of the household of faith and have a most precious experience. They
            may have hearts that are tender and ready to receive impressions
            that will be lasting. They may have their hearts drawn out in
            confidence and love for Jesus, and live for the Saviour. Christ will
            make them little missionaries. The whole current of her thought may
            be changed, so that sin will not appear a thing to be enjoyed, but
            to be shunned and hated ...'
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
