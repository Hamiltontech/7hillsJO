import React from "react";
import Header from "./components/Header";
import Link from "next/link";
import Footer from './components/Footer'

const PrivacyPolicy = () => {
  return (
    <div className="font-blinker h-screen">
      <Header />
      <div className="pt-[100px] flex justify-center">
        <div className="border mt-10 lg:mx-10 mx-5 p-5 text-justify max-w-[1500px] mb-10">
          <div className="max-w-8xl lg:px-10">
            <h1 className=" text-4xl font-bold mb-5">Privacy policy</h1>
            <p className="max-w-[1400px]">
              The following constitutes the Privacy Policy adopted by
              <Link href="/">
                <span className="font-bold underline cursor-pointer">
                   <span> </span>7HillsJO Magazine<span> </span>
                </span>
              </Link>
              with respect to its Site and any ancillary websites or
              ancillary services operated by the Site. This Privacy Policy
              is a part of the Terms of Use that govern your use of the Site.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">Changes</h2>
            <p className="max-w-[1400px]">
              This Privacy Policy is effective as of 01-01-2023 and will remain
              in effect except with respect to any changes in its provisions in
              the future, which will be in effect immediately after being posted
              on this page. We reserve the right to update or change our Privacy
              Policy at any time and you should check this Privacy Policy
              periodically. Your continued use of the Service after we post any
              modifications to the Privacy Policy on this page will constitute
              your acknowledgment of the modifications and your consent to abide
              and be bound by the modified Privacy Policy. If we make any
              material changes to this Privacy Policy, we will notify you by placing a
              prominent notice on our Site.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">
              Third Parties
            </h2>
            <p className="max-w-[1400px]">
              Although we will endeavor to require third-party content providers
              and other parties to adhere to our policies, we are not
              responsible for any actions or policies of any third parties or
              for the information practices of any third-party sites to which
              links may be provided in the Site.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">
              Use of the Information Collected
            </h2>
            <p className="max-w-[1400px]">
              From time to time, we may be approached by third parties with an
              interest in identifying subscribers to our print or digital
              publication. We may provide them with our publications’ mailing
              list (but not e-mail addresses) if we believe the subscribers in
              question would be interested in hearing from them. With respect to
              advertisements, an advertiser will inform us which type of
              audience it seeks to reach, and we may place advertisements in the
              Site that fit the advertiser’s criteria. The advertisers are not
              permitted to access any of your personally identifiable
              information. We also use tracking information to determine which
              areas of our Site users like and do not like based on traffic to
              those areas. We create aggregate reports on user demographics and
              traffic patterns for advertisers. This allows our advertisers to
              advertise more effectively, and allows our users to receive
              advertisements that are pertinent to their interests. We do not
              track the usage patterns of individual users, so an advertiser
              will never know that a specific user clicked on a particular ad.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">
              Security Measures
            </h2>
            <p className="max-w-[1400px]">
              The security of your Personal Information is important to us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage, is 100% secure. While we strive to
              use commercially acceptable means to protect your Personal
              Information, we cannot guarantee its absolute security.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">Log Data</h2>
            <p className="max-w-[1400px]">
              Like many Site operators, we collect information that your browser
              sends whenever you visit our Site (Log Data). This Log Data may
              include information such as your computers Internet Protocol (IP)
              address, browser type, browser version, the pages of our Site that
              you visit, the time and date of your visit, the time spent on
              those pages, and other statistics.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">
              Communications
            </h2>
            <p className="max-w-[1400px]">
              Ensuring your privacy is important to us we do not share your
              personal information with third parties. We may use your Personal Information to
              contact you with newsletters, marketing or promotional materials,
              and other information that will help us constantly improve your
              experience with us. Examples of how we may share information with
              service providers include: Providing customer support. Newsletters
              subscriptions. Sending marketing communications. Conducting
              research and analysis. Providing cloud computing infrastructure.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">
              Children’s Privacy
            </h2>
            <p className="max-w-[1400px]">
              The Site is intended for use by individuals over the age of 16 and
              not for children. If you are under 16, you should not submit any
              personally identifiable information on the Site. Children must ask
              a parent or guardian for permission before sending any personal
              information online to anyone.
            </p>

            <h2 className="font-bold text-blackk/80 text-xl my-5">Contact</h2>
            <p className="max-w-[1400px]">
              You can contact us with regard to this Privacy Policy as follows:
            </p>
            <p className="mt-4">Online Department - 7HillsJO Magazine </p>
            <p className="mt-2 ">+962 (779) 074-724</p>
            <p className="mt-2 ">info@7hillsjo.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
