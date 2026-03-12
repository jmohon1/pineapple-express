import PageHero from "@/components/PageHero";

const productTypes = [
  {
    name: "Flower",
    description:
      "The part of the cannabis plant used for smoking. Dried and cured buds available in many strains.",
  },
  {
    name: "Concentrates",
    description:
      "Highly potent cannabis extracts including wax, shatter, live resin, and rosin.",
  },
  {
    name: "Edibles",
    description:
      "Cannabis-infused food and beverages. Effects may be delayed up to 2-3 hours.",
  },
  {
    name: "Topicals",
    description:
      "Lotions, balms, and patches applied directly to the skin for localized relief.",
  },
  {
    name: "Tinctures & Oils",
    description:
      "Liquid cannabis extracts taken sublingually (under the tongue) for precise dosing.",
  },
];

export default function EducationPage() {
  return (
    <>
      <PageHero
        title="Education"
        subtitle="Your guide to understanding cannabis products, consumption methods, and Massachusetts regulations."
      />

      <div className="mx-auto max-w-5xl px-6 py-12 md:px-12 md:py-16">
        {/* Intro */}
        <section className="mb-16">
          <p className="text-gray-600 leading-relaxed mb-4">
            Our team is here to help you choose the right product and find your
            ideal dose. Whether you are a first-time consumer or an experienced
            user, we want to make sure you have the best experience possible.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Have questions? Give us a call at{" "}
            <a
              href="tel:+14132770277"
              className="font-bold text-black hover:opacity-70 transition-opacity"
            >
              (413) 277-0277
            </a>
            , use the chat on our app, or ask your delivery driver. We also
            include an education folder with your first order.
          </p>
        </section>

        {/* Consumer Education PDFs */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-6">
            Click Below To Read The Massachusetts Education PDFs
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            The Massachusetts Cannabis Control Commission provides consumer
            education materials to help you make informed decisions. Resources
            are available in English and Spanish.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://masscannabiscontrol.com/wp-content/uploads/2021/10/English_Consumer_Education_Insert_2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Read English (PDF)
            </a>
            <a
              href="https://masscannabiscontrol.com/wp-content/uploads/2021/10/Spanish_Consumer_Education_Insert_2021.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              Read Spanish (PDF)
            </a>
          </div>
        </section>

        {/* Choosing the Right Product */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-8">
            Choosing The Right Cannabis Product
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productTypes.map((product) => (
              <div key={product.name} className="border-2 border-black p-6">
                <h3 className="text-lg font-black uppercase mb-3">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Dosage & Administration */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-4">
            Dosage & Administration
          </h2>
          <p className="text-xl font-black uppercase tracking-wide mb-8 text-accent bg-black inline-block px-4 py-2">
            Start Low & Go Slow
          </p>
          <div className="space-y-6">
            <div className="border-b-2 border-black pb-6">
              <h3 className="text-lg font-black uppercase mb-2">Inhalation</h3>
              <p className="text-gray-600 leading-relaxed">
                Smoking or vaporizing flower and concentrates. Effects are felt
                within minutes. Wait 45 minutes before taking more.
              </p>
            </div>
            <div className="border-b-2 border-black pb-6">
              <h3 className="text-lg font-black uppercase mb-2">
                Oral Ingestion
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Eating edibles or swallowing capsules. Effects may be delayed.
                Wait 2-3 hours before re-dosing. Start with a low dose (2.5-5mg
                THC).
              </p>
            </div>
            <div className="border-b-2 border-black pb-6">
              <h3 className="text-lg font-black uppercase mb-2">
                Topical Application
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Applying cannabis products directly to the skin. Effects are
                localized and do not produce a psychoactive high.
              </p>
            </div>
          </div>
        </section>

        {/* Recognizing Signs of Dependence */}
        <section className="mb-16 bg-gray-50 p-8">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-4">
            Recognizing Signs of Dependence
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Tolerance builds over time with regular cannabis use. If you find
            yourself needing more to achieve the same effects, consider taking a
            break. If you or someone you know needs help, reach out to the
            Massachusetts Substance Use Helpline.
          </p>
          <div className="space-y-2">
            <p className="font-mono text-lg font-bold">
              Call:{" "}
              <a
                href="tel:+18003275050"
                className="hover:opacity-70 transition-opacity"
              >
                800-327-5050
              </a>
            </p>
            <p className="font-mono text-lg font-bold">
              Text: HOPE to 8800327
            </p>
          </div>
        </section>

        {/* Know the Laws */}
        <section className="mb-16">
          <h2 className="text-2xl font-black uppercase tracking-wide mb-8">
            Know The Laws In Massachusetts
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="border-2 border-black p-6">
              <h3 className="text-lg font-black uppercase mb-3">
                Possession Limits
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Up to 1 ounce in public or 10 ounces at home for adults 21 and
                older.
              </p>
            </div>
            <div className="border-2 border-black p-6">
              <h3 className="text-lg font-black uppercase mb-3">
                Home Cultivation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adults 21+ may grow up to 6 plants per person, with a maximum of
                12 plants per household.
              </p>
            </div>
            <div className="border-2 border-black p-6">
              <h3 className="text-lg font-black uppercase mb-3">Public Use</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Cannabis consumption is prohibited in public places. Use is
                restricted to private property with the owner&apos;s permission.
                No open containers in vehicles.
              </p>
            </div>
            <div className="border-2 border-black p-6">
              <h3 className="text-lg font-black uppercase mb-3">
                Interstate Transport
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                It is illegal to transport cannabis across state lines, even to
                other states where cannabis is legal.
              </p>
            </div>
          </div>
        </section>

        {/* Storage Notice */}
        <section className="mb-16 border-2 border-black p-8">
          <p className="text-center font-bold uppercase tracking-wide">
            Always store cannabis products securely away from children and pets.
          </p>
        </section>

        {/* Resource Links */}
        <section>
          <h2 className="text-2xl font-black uppercase tracking-wide mb-6">
            Additional Resources
          </h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://masscannabiscontrol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              MA Cannabis Control Commission
            </a>
            <a
              href="https://www.moreaboutmj.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border-2 border-black px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
            >
              MoreAboutMJ.org
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
