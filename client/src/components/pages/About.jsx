import React from "react";

function About() {
  const [openTab, setOpenTab] = React.useState(1);

  return (
    <>
      <img
        class="flex md:w-[25rem] md:h-auto h-auto w-[20rem] mx-auto *:rounded-lg object-cover mt-10"
        src="/flowers_3.webp"
        alt=""
      />
      <div className="md:p-[2rem] p-[1rem] mb-[40vh] max-w-[80rem] mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row" role="tablist">
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 1 ? "text-white bg-[#3b3b3b]" : "text-" + " bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Om oss
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 2 ? "text-white bg-[#3b3b3b]" : "text-" + " bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Varför?
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                    (openTab === 3 ? "text-white bg-[#3b3b3b]" : "text-" + " bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  FAQ
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Vad är Folkets Reklam?</h2>
                    <p>
                      Folkets Reklam är en plattform som möjliggör för invånarna i Stockholm att direkt påverka stadens
                      reklamutrymme. Vi tror starkt på kraften i medborgardriven reklam och ger dig möjligheten att
                      stödja kampanjer som du brinner för. Genom att samla donationer från privatpersoner och företag
                      kan vi tillsammans finansiera reklamkampanjer som lyfter fram viktiga teman såsom miljö, social
                      rättvisa, och lokal gemenskap.
                    </p>
                  </div>
                  <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Varför Folkets Reklam?</h2>
                    <p>
                      Vi startade Folkets Reklam för att ge makten till folket och skapa en mer demokratisk reklamvärld.
                      Reklam har kraften att påverka och forma våra städer och samhällen. Genom att låta invånarna
                      själva välja vilka budskap som ska visas, skapar vi en stad som speglar dess invånares verkliga
                      värderingar och önskemål. Vår plattform är en bro mellan dina passioner och stadens ansikte utåt.
                    </p>
                  </div>
                  <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Vanliga frågor (FAQ)</h2>
                    <p className="mb-4">
                      <strong>Hur väljer jag vilken kampanj jag vill stödja?</strong>
                      <br />
                      På vår hemsida kan du bläddra igenom de olika kampanjerna som just nu söker finansiering. Varje
                      kampanj beskrivs med sina mål och syften, så att du kan göra ett informerat val baserat på vad som
                      ligger dig varmt om hjärtat.
                    </p>
                    <p className="mb-4">
                      <strong>Hur vet jag att min donation används korrekt?</strong>
                      <br />
                      Transparens är nyckeln till förtroende. Vi garanterar att 100% av din donation går direkt till den
                      kampanj du valt att stödja. Vi följer upp varje kampanjs framsteg och rapporterar tydligt tillbaka
                      till våra donatorer.
                    </p>
                    <p className="mb-4">
                      <strong>Kan företag också delta i Folkets Reklam?</strong>
                      <br />
                      Ja, absolut! Vi välkomnar alla former av stöd, inklusive företagsdonationer. Företag kan välja att
                      sponsra specifika kampanjer som alignerar med deras företagsvärderingar och samhällsansvar, vilket
                      även ger en positiv exponering.
                    </p>
                    <p className="mb-4">
                      <strong>Finns det ett minimumbelopp för donationer?</strong>
                      <br />
                      Nej, vi tror på att alla bidrag, stora som små, bidrar till att göra en skillnad. Varje krona
                      räknas och hjälper oss att nå våra gemensamma mål.
                    </p>
                    <p className="mb-4">
                      <strong>Hur länge stannar en kampanj uppe om den är fullt finansierad?</strong>
                      <br />
                      Det varierar beroende på kampanjen och dess natur. Generellt sett siktar vi på att hålla kampanjer
                      aktiva i minst en månad, men populära kampanjer kan förlängas beroende på ytterligare stöd och
                      efterfrågan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
