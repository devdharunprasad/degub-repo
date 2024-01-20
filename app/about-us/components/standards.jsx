import * as React from "react";

function StandardsComponent(props) {
  return (
    <section className="bg-gray-50">
    <div className="justify-center items-stretch md:hidden bg-slate-50 flex flex-col px-9 py-12">
      <header className="text-stone-900 text-center text-3xl font-bold leading-10 mt-2.5">
        The Standards we follow in Pactron
      </header>
      <div
        className="backdrop-blur-[18.0797176361084px] shadow-lg flex flex-col items-center mt-6 pt-12 pb-8 px-1.5 rounded-xl border-[0.861px] border-solid border-white"
        role="group"
        aria-label="ISO Certified"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/68193199b253be94cefac788f24bcfc3c2cc35f162137c763df8e17f44557a57?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[1.08] object-contain object-center w-[148px] overflow-hidden max-w-full mt-1.5"
          alt="ISO Certified"
        />
        <div className="text-neutral-950 text-center text-2xl font-bold leading-9 self-stretch mt-6">
          ISO Certified
        </div>
      </div>
      <div
        className="backdrop-blur-[18.0797176361084px] shadow-lg flex flex-col items-center mt-10 mb-2.5 px-1.5 py-9 rounded-xl border-[0.861px] border-solid border-white"
        role="group"
        aria-label="ITAR Approved"
      >
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9446858690d20ccbd1e1e7444c52e0390b8fa7ccd0416a2d1eb65d6c3c3eb936?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[1.05] object-contain object-center w-[163px] overflow-hidden max-w-full"
          alt="ITAR Approved"
        />
        <div className="text-neutral-950 text-center text-2xl font-bold leading-9 self-stretch mt-6">
          ITAR Approved
        </div>
      </div>
    </div>

    {/* Desktop */}
        <div className="justify-center items-center bg-gray-50 hidden md:block flex-col px-16 py-12 max-md:px-5 mx-auto center-section w-full">
      <div className="flex w-[786px] mx-auto max-w-full flex-col items-stretch mt-16 mb-10 max-md:mt-10">
        <header className="text-stone-900 text-center text-3xl font-bold leading-10 max-md:max-w-full">
          The Standards we follow in Pactron
        </header>
        <div className="mt-12 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col shadow-lg rounded-md hover:shadow-2xl  transition-shadow duration-300 items-stretch w-[51%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col justify-center max-md:mt-10">
                <div
                  className="backdrop-blur-[21.0357723236084px] flex flex-col items-center pt-12 pb-6 px-2 rounded-2xl border-[1.002px] border-solid border-white"
                  role="img"
                  aria-label="ISO Certified"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fd645bba087ec92d933f1b8d7810ed0573c50f649e989224656ec66bbe0aa8cd?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[1.09] object-contain object-center w-[173px] overflow-hidden max-w-full mt-3.5"
                    alt="ISO Certified"
                  />
                  <div className="text-black text-center text-2xl font-bold leading-9 self-stretch mt-12 max-md:mt-10">
                    ISO Certified
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch shadow-lg rounded-md hover:shadow-2xl transition-shadow duration-300 w-[49%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col justify-center max-md:mt-10">
                <div
                  className="backdrop-blur-[21.0357723236084px] flex flex-col items-center pt-11 pb-6 px-2 rounded-2xl border-[1.002px] border-solid border-white"
                  role="img"
                  aria-label="ITAR Approved"
                >
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0bd2dca97d7088eaccb3b8a37b7e933a2a7b12ee767e56ab47d58daad80a9101?apiKey=cb09127259af43f49535d3079eb90155&"className="aspect-[1.06] object-contain object-center w-[190px] overflow-hidden max-w-full"
                    alt="ITAR Approved"
                  />
                  <div className="text-black text-center text-2xl font-bold leading-9 self-stretch mt-12 max-md:mt-10">
                    ITAR Approved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default StandardsComponent;