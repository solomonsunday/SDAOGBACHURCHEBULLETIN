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
            <p className="dark:text-white">Psalm 51:10</p>
          </div>
          <p className="text-orange-500">
            “Create in me a pure heart, O God, and renew a steadfast spirit
            within me. Have you ever felt like your relationship with God needed
            a fresh start? It’s as if there’s a glitch in the connection,
            causing you to feel distant or stuck. Just like a computer or phone
            that needs a reboot when it’s not functioning properly, our
            relationship with God sometimes require a reset too. David
            understand the need for a reboot, a fresh start, a renewed spirit.
            He wanted to restore his relationship with God and remove anything
            that kept the apart."
          </p>
        </div>
      </section>
    </div>
  );
};

export default PastorDesk;
