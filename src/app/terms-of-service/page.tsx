import genUtils from "@/utils/gen";

export default function TermsOfService() {
  return (
    <div>
      <div className="p-6 space-y-6">
        {/* <LandingPageBanner
          heading="Terms and Conditions"
          subheading="Last updated: April 02, 2025"
        /> */}
        {/* <p className="text-gray-700 text-center text-[14px]">
          Please read these terms and conditions carefully before using Our
          Service.
        </p> */}
        <h2 className="text-2xl font-semibold">
          Interpretation and Definitions
        </h2>
        <h3 className="text-xl font-medium">Interpretation</h3>
        <p className="text-gray-700">
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>
        <h3 className="text-xl font-medium">Definitions</h3>
        <p className="text-gray-700">
          For the purposes of these Terms and Conditions:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <span className="text-gray-700">
              <strong>Affiliate</strong> means an entity that controls, is
              controlled by or is under common control with a party, where
              &quot;control&quot; means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Country</strong> refers to: Nigeria
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Company</strong> (referred to as either &quot;the
              Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot;
              in this Agreement) refers to CoinBuy.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Device</strong> means any device that can access the
              Service such as a computer, a cellphone or a digital tablet.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Service</strong> refers to the Website.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Terms and Conditions</strong> (also referred as
              &quot;Terms&quot;) mean these Terms and Conditions that form the
              entire agreement between You and the Company regarding the use of
              the Service. This Terms and Conditions agreement has been created
              with the help of the{" "}
              <a
                href="https://www.privacypolicies.com/terms-conditions-generator/"
                target="_blank"
                className="text-blue-500 underline"
              >
                Terms and Conditions Generator
              </a>
              .
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Third-party Social Media Service</strong> means any
              services or content (including data, information, products or
              services) provided by a third-party that may be displayed,
              included or made available by the Service.
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>Website</strong> refers to CoinBuy, accessible from{" "}
              <a
                href="www.coinbuy.com"
                rel="external nofollow noopener"
                target="_blank"
                className="text-blue-500 underline"
              >
                www.coinbuy.com
              </a>
            </span>
          </li>
          <li>
            <span className="text-gray-700">
              <strong>You</strong> means the individual accessing or using the
              Service, or the company, or other legal entity on behalf of which
              such individual is accessing or using the Service, as applicable.
            </span>
          </li>
        </ul>
        <h2 className="text-2xl font-semibold">Acknowledgment</h2>
        <p className="text-gray-700">
          These are the Terms and Conditions governing the use of this Service
          and the agreement that operates between You and the Company. These
          Terms and Conditions set out the rights and obligations of all users
          regarding the use of the Service.
        </p>
        <p className="text-gray-700">
          Your access to and use of the Service is conditioned on Your
          acceptance of and compliance with these Terms and Conditions. These
          Terms and Conditions apply to all visitors, users and others who
          access or use the Service.
        </p>
        <p className="text-gray-700">
          By accessing or using the Service You agree to be bound by these Terms
          and Conditions. If You disagree with any part of these Terms and
          Conditions then You may not access the Service.
        </p>
        {/* <p className="text-gray-700">
          You represent that you are over the age of 14. The Company does not
          permit those under 15 to use the Service.
        </p> */}
        <p className="text-gray-700">
          Your access to and use of the Service is also conditioned on Your
          acceptance of and compliance with the Privacy Policy of the Company.
          Our Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your personal information when You
          use the Application or the Website and tells You about Your privacy
          rights and how the law protects You. Please read Our Privacy Policy
          carefully before using Our Service.
        </p>
        {/* Continue styling the rest of the content similarly */}
      </div>
      <p className="text-center text-sm p-5 text-eminence">
        &copy; {genUtils.getCurrentYear()} Gobuy. All rights reserved
      </p>
    </div>
  );
}
