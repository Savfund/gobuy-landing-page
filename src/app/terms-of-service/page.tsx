import genUtils from "@/utils/gen";

export default function TermsOfService() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-4">
          Welcome to GoBuy. These Terms of Service ("Terms") govern your use of
          our website (gobuy.vercel.app) and related services (collectively,
          "Services"). By accessing or using our Services, you agree to be bound
          by these Terms. This agreement was last updated on May 20, 2025.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-600 mb-4">
          By accessing or using our Services, you confirm that you have read,
          understood, and agree to these Terms. If you do not agree, you must
          not use our Services.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          3. Account Registration
        </h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            Provide accurate, current, and complete information during
            registration.
          </li>
          <li>
            Maintain the security of your account by not sharing your login
            credentials.
          </li>
          <li>
            Notify us immediately of any unauthorized use of your account at
            codinkage@gmail.com
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          4. Use of Services
        </h2>
        <p className="text-gray-600 mb-4">
          You agree to use our Services only for lawful purposes and in
          accordance with these Terms. Prohibited activities include, but are
          not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Posting false, misleading, or fraudulent listings.</li>
          <li>Using the Services to harass, harm, or defraud others.</li>
          <li>
            Attempting to interfere with the functionality or security of our
            platform.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          5. Intellectual Property
        </h2>
        <p className="text-gray-600 mb-4">
          All content on our platform, including text, images, logos, and
          software, is owned by GoBuy or its licensors and protected by
          intellectual property laws. You may not reproduce, distribute, or
          create derivative works from this content without our prior written
          permission, except as permitted for personal, non-commercial use.
        </p>

        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>
            Grant House A Kopa a non-exclusive, royalty-free, worldwide license
            to use, display, and distribute your content in connection with our
            Services.
          </li>
          <li>
            Represent that you own or have the right to submit such content and
            that it does not violate any laws or third-party rights.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          8. Termination
        </h2>
        <p className="text-gray-600 mb-4">
          We reserve the right to suspend or terminate your access to our
          Services at our sole discretion, without prior notice, if we believe
          you have violated these Terms or engaged in conduct harmful to GoBuy
          or other users. You may terminate your account at any time by
          contacting us.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          9. Limitation of Liability
        </h2>
        <p className="text-gray-600 mb-4">
          Our Services are provided "as is" without warranties of any kind. To
          the fullest extent permitted by law, GoBuy shall not be liable for any
          indirect, incidental, or consequential damages arising from your use
          of our Services, including but not limited to loss of profits or data.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          10. Governing Law
        </h2>
        <p className="text-gray-600 mb-4">
          These Terms shall be governed by and construed in accordance with the
          laws of Nigeria. Any disputes arising under these Terms shall be
          subject to the exclusive jurisdiction of the courts in Kwara State,
          Nigeria.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          11. Modifications to Terms
        </h2>
        <p className="text-gray-600 mb-4">
          We may update these Terms from time to time. We will notify you of
          significant changes via email or a notice on our website. Your
          continued use of our Services after such changes constitutes
          acceptance of the revised Terms.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
          12. Contact Us
        </h2>
        <p className="text-gray-600">
          If you have questions or concerns about these Terms, please contact us
          at:
        </p>
        <ul className="list-disc list-inside text-gray-600 mt-4">
          <li>Email: codinkage@gmail.com</li>
          <li>Address: Lagos, Nigeria</li>
        </ul>
      </div>
    </div>
  );
}
