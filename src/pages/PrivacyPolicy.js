import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
    return (
      <>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <h1 className="privacy-policy-title">Privacy Policy</h1>
        <div className="privacy-policy-page">
          <div className="privacy-policy-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="privacy-policy-content">
            <div className="privacy-policy-box">
              <p className="privacy-policy-paragraph">
                DriveChicago.com's policy is to respect and protect the privacy
                of its users and recognize the importance of protecting the
                personal information it collects about its users.
                DriveChicago.com would like to assure its users that this
                privacy policy meets the requirements of the various privacy
                laws and regulations, including, without limitation, the
                Children's Online Privacy Protection Act of 1998.
              </p>
              <p className="privacy-policy-paragraph">
                DriveChicago is owned and operated by the Chicago Auto Trade
                Association, producers of the Chicago Auto Show. Please visit{" "}
                <Link
                  className="privacy-policy-link"
                  to="https://www.chicagoautoshow.com/default.html"
                >
                  Chicago Auto Show
                </Link>{" "}
                for more information.
              </p>
            </div>
            <h3 className="privacy-policy-section-title">
              Your User Information
            </h3>
            <p className="privacy-policy-paragraph">
              All personal information collected at www.DriveChicago.com (the
              “Web Site") by DriveChicago.com and/or its parents, affiliates,
              subsidiaries, affiliated companies and/or promotional partners or
              agencies will be utilized primarily for internal purposes with the
              goal of enhancing the user's online experience.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com collects information in several ways including,
              without limitation, primarily the following:
            </p>
            <ul className="privacy-policy-list">
              <li>
                <p className="privacy-policy-paragraph">
                  Some personal information is gathered when you register to
                  participate in or receive information via electronic mail or
                  otherwise about: automobiles in general, your automobile,
                  automobile insurance, general and personal automobile
                  maintenance, general and personal finance, general and
                  personal credit, automobile dealerships, quotes, research,
                  statistics, advice, Web sites, games, contests, sweepstakes,
                  promotional events and/or any other event that takes place on
                  the Web Site. During such registration, DriveChicago.com may
                  ask for information such as, without limitation, a user's
                  name, electronic mail address, birth date, gender, zip code
                  and country, and other optional information that may be
                  particular to that registration process;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com collects information on its users'
                  demographics, interests and behavior based on the information
                  provided to DriveChicago.com from the registration described
                  in (1) above, from DriveChicago.com's server log files, from
                  surveys, from cookies (see below) and from IP addresses (see
                  below). DriveChicago.com does this to better understand and
                  serve its users. This collected information/research is
                  generally compiled and analyzed on an aggregated basis;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  For reasons such as improving personalization of
                  DriveChicago.com's service, DriveChicago.com might collect
                  information about its users from other sources and add it to
                  DriveChicago.com's account information; and
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com also sometimes collects updated delivery and
                  address information from its shippers or other sources so that
                  DriveChicago.com can correct its records and deliver or
                  communicate more easily.
                </p>
              </li>
            </ul>
            <p className="privacy-policy-paragraph">
              DriveChicago.com uses and/or discloses collected information in
              several ways, including, without limitation, primarily the
              following:
            </p>
            <ul className="privacy-policy-list">
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com may use electronic mail addresses or other
                  personally identifiable information to contact users who
                  directly communicate with DriveChicago.com, to, among other
                  things, fulfill prizes, track/verify compliance with
                  DriveChicago.com policies as well as federal, state, local and
                  other laws, and/or to solicit editorial comments and feedback.
                  For example, DriveChicago.com may use such information to
                  notify users that they have won a game, contest or sweepstakes
                  or to provide a requested electronic mail newsletter or
                  provide other requested information;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com may match aggregated user information with
                  third party data in order to better serve the interests of its
                  users;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com may disclose aggregated user statistics in
                  order to describe DriveChicago.com's services to prospective
                  partners, advertisers and third parties and for other lawful
                  purposes, in order to, among other things, make better
                  alliances and provide a better user experience on the Web
                  Site;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com may use a user's personally identifiable
                  information for editorial purposes. For example,
                  DriveChicago.com may use information provided by a user to
                  DriveChicago.com as part of an online survey conducted by
                  DriveChicago.com;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  Unless a user tells DriveChicago.com that he/she would prefer
                  not to receive electronic mail from DriveChicago.com,
                  DriveChicago.com may use collected personal information to
                  send you electronic mail about DriveChicago.com's and/or other
                  companies' products, promotions or services. A user may choose
                  not to provide certain information, but then that user might
                  not be able to take advantage of many of DriveChicago.com's
                  features;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  In some instances, collected personal information may also be
                  used by DriveChicago.com for additional marketing and
                  promotional purposes relating to the Web Site or other
                  properties;
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com may use cookies and IP addresses as set forth
                  in more detail below; and
                </p>
              </li>
              <li>
                <p className="privacy-policy-paragraph">
                  DriveChicago.com may disclose user information to third
                  parties when DriveChicago.com has reason to believe that
                  disclosing this information is necessary to identify, contact
                  or bring legal action against someone who may be causing
                  injury to or interference with (either intentionally or
                  unintentionally) DriveChicago.com's rights or property, other
                  Web Site users, or anyone else that could be harmed by such
                  activities. DriveChicago.com may disclose user information
                  when DriveChicago.com believes in good faith that the law
                  requires it.
                </p>
              </li>
            </ul>
            <p className="privacy-policy-paragraph">
              DriveChicago.com may use agents to carry out its activities.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com may employ other companies and individuals to
              perform functions on its behalf. Examples include, without
              limitation, fulfilling orders, sending postal mail and electronic
              mail, removing repetitive information from customer lists,
              analyzing data, providing marketing assistance, delivering
              packages and providing customer service. They may have access to
              personal information needed to perform their functions, but may
              not use it for other purposes.
            </p>
            <p className="privacy-policy-paragraph">
              Other than as set forth above, it is DriveChicago.com's current
              policy not to share any personally identifiable information
              provided by users with other third parties, unless specified at
              the time of collection or with the user's consent.
            </p>
            <h3 className="privacy-policy-section-title">Opting Out</h3>
            <p className="privacy-policy-paragraph">
              In the event that a user changes his or her mind and no longer
              wishes to share his or her personal information with
              DriveChicago.com, or if some personal information changes,
              DriveChicago.com will endeavor to provide a way to correct,
              update, or remove the personal data provided to DriveChicago.com.
              For instance, DriveChicago.com provides users with the option to
              unsubscribe from future email newsletters.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com bears no responsibility for any action or
              policies of any third parties who collect any information users
              may disclose on the bulletin boards, chat areas or other public
              forums on this Web Site.
            </p>
            <p className="privacy-policy-paragraph">
              To opt out or to change your status on this Web Site contact
              DriveChicago.com by either electronic mail at
              support@drivechicago.com or via the following number:
              1-630-424-6080.
            </p>
            <h3 className="privacy-policy-section-title">Links</h3>
            <p className="privacy-policy-paragraph">
              Users should be aware that when they are on any portion of the Web
              Site, they could be directed to other Web sites and/or Online
              materials that are beyond DriveChicago.com's control. There are
              links to other Web sites from this Web Site that take users
              outside DriveChicago.com's service. For example, if users "click"
              on a banner advertisement, the "click" takes users off the Web
              Site. This includes links from advertisers, sponsors, and partners
              that may include DriveChicago.com's logo as part of a co-branding
              agreement. These other Web sites may send their own cookies to
              users, collect data, or solicit personal information and have
              their own privacy policies. To ensure the protection of its users'
              privacy while on the Web Site, DriveChicago.com will make an
              effort to provide a notice and a link to this privacy policy on
              all pages where personally identifying information is collected.
            </p>
            <p className="privacy-policy-paragraph">
              Users should keep in mind that whenever they give out personal
              information Online – for example, via message boards or chat rooms
              – that information could be collected and used by people that
              users do not know. While DriveChicago.com strives to protect
              users' personal information and privacy, DriveChicago.com cannot
              guarantee the security of any information users disclose Online,
              and users do so at their own risk.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com's policy does not extend to anything that is
              inherent in the operation of the Internet or any Online
              technology, and therefore beyond DriveChicago.com's control, and
              is not to be applied in any manner contrary to applicable law or
              governmental regulation
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com DOES NOT KNOWINGLY COLLECT INFORMATION FROM
              CHILDREN THIRTEEN (13) YEARS OF AGE OR YOUNGER.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com does not knowingly collect information from
              children thirteen (13) years of age or younger. If you are under
              thirteen (13), do not send any information about yourself to
              DriveChicago.com, including, information like your name, address
              and/or electronic mail address. DriveChicago.com encourages
              parents and guardians to spend time online with their children and
              to supervise their children's activities on DriveChicago.com's
              sites. DriveChicago.com alerts parents that this Web Site features
              content exploring mature themes not appropriate for children. This
              Web Site is not a Web site directed to children under the age of
              13. DriveChicago.com suggests that parents consider using parental
              control tools available from Online services and software
              manufacturers that may help ensure a child friendly Online
              environment and help direct their children to suitable,
              child-oriented Web sites. Further, DriveChicago.com request that
              all users to the Web Site that are under the age of 13 not
              disclose or provide any personal information on this Web Site. In
              the event that DriveChicago.com discovers that a child under the
              age of 13 has provided DriveChicago.com with his or her personal
              information, DriveChicago.com will immediately delete the child's
              personal information from its system.
            </p>
            <p className="privacy-policy-paragraph">
              Because DriveChicago.com does not knowingly collect such
              information, DriveChicago.com does not knowingly provide any
              personally identifying information from its users under 13 years
              of age, regardless of its source, to any third party for any
              purpose whatsoever. DriveChicago.com also does not knowingly allow
              users under 13 years of age to be listed in any member directory
              or to receive direct marketing communications from
              DriveChicago.com or to be sent third-party offers.
            </p>
            <h3 className="privacy-policy-section-title">Use of Cookies</h3>
            <p className="privacy-policy-paragraph">
              Cookies are pieces of information that a Web site transfers to an
              individual's hard drive for record-keeping purposes. Cookies make
              Web-surfing easier for the user by saving the user's preferences
              while the user is at the Web Site. DriveChicago.com never saves
              passwords or credit card information in cookies.
            </p>
            <p className="privacy-policy-paragraph">
              By showing how and when users use a Web site, cookies help
              DriveChicago.com see which areas are popular and which are not.
              Many improvements and updates to this Web Site are based on such
              data as total number of users and pages viewed. This information
              is most easily tracked with cookies. DriveChicago.com uses the
              information from cookies to provide services better tailored to
              this Web Site's users.
            </p>
            <p className="privacy-policy-paragraph">
              Most browsers are initially set up to accept cookies. You can
              reset your browser to refuse all cookies or indicate when a cookie
              is being sent.
            </p>
            <h3 className="privacy-policy-section-title">
              Use of IP Addresses
            </h3>
            <p className="privacy-policy-paragraph">
              An IP address is a number that's automatically assigned to your
              computer whenever you're surfing the Web. Web servers – the big
              computers that "serve up" Web pages – automatically identify your
              computer by its IP address.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com may collect IP addresses for the purposes of
              system administration, to report aggregate information to our
              advertisers, and to audit the use of our site. When users request
              pages from this Web Site, our servers log the users' IP addresses.
              DriveChicago.com does not normally link IP addresses to anything
              personally identifiable, which means that a user's session will be
              logged but the user remains anonymous to us. DriveChicago.com can
              and will use IP addresses to identify a user when DriveChicago.com
              feels it is necessary to enforce compliance with our house rules,
              terms of service, any law or regulation or to protect our service,
              Web Site, customers, or others.
            </p>
            <p className="privacy-policy-paragraph">
              Some services within the Web Site, such as certain message boards,
              may display IP addresses along with the message poster's name and
              message. Please review each service prior to use and only use
              those that disclose information you are comfortable with sharing.
            </p>
            <h3 className="privacy-policy-section-title">Security</h3>
            <p className="privacy-policy-paragraph">
              The importance of privacy and security for all personally
              identifiable information associated with users is of utmost
              concern to DriveChicago.com. DriveChicago.com exercises great care
              in providing secure transmission of users' information from the
              users' personal computer to DriveChicago.com's servers.
              Unfortunately, no data transmission over the Internet can be
              guaranteed to be 100% secure. As a result, while DriveChicago.com
              strives to protect users personal information, DriveChicago.com
              cannot ensure or warrant the security of any information users
              transmit to DriveChicago.com or from DriveChicago.com's Online
              products or services, and users do so at their own risk. Once
              DriveChicago.com receives users' transmission, DriveChicago.com
              makes its best effort to ensure the transmission's security on
              DriveChicago.com's systems. If credit card information is
              transmitted, DriveChicago.com uses industry standard, SSL (secure
              socket layer) encryption.
            </p>
            <h3 className="privacy-policy-section-title">
              Acceptance of Terms
            </h3>
            <p className="privacy-policy-paragraph">
              By using this Web Site, users assent to this privacy policy. If
              users do not agree to this privacy policy, users must not use this
              or any of DriveChicago.com's Web sites. DriveChicago.com reserves
              the right to modify, alter or otherwise update this privacy policy
              at any time, so users are encouraged to review this policy from
              time to time. Users' continued use of this Web Site following the
              posting of changes to these terms will mean users' acceptance of
              those changes.
            </p>
            <h3 className="privacy-policy-section-title">
              Vehicle Availability and Price
            </h3>
            <p className="privacy-policy-paragraph">
              We may also provide Your Information to a third party in
              connection with the sale, assignment, or other transfer of the
              business of this website to which the information relates, in
              which case we will require any such buyer to agree to treat Your
              Information in accordance with this Privacy Policy.
            </p>
            <p className="privacy-policy-paragraph">
              We display listings of new and pre-owned vehicles for sale by
              listing dealers and content of our website, including but not
              limited to the vehicle descriptions and prices listed are
              electronically posted to our website either directly or through a
              third party and/or by the listing dealer who owns the vehicle. The
              transmission of vehicle listings from the listing dealer for
              posting to our website necessarily involves the passage of time
              and the possibility that unintentional errors can occur. We do not
              guarantee or make any representations regarding the accuracy of
              any content on this website, including, but not limited to vehicle
              prices or availability. All vehicle descriptions and prices
              provided to you either on our website or via separate
              communication following your contact of a listing dealer are made
              by the listing dealer and not by us. All content, including but
              not limited to vehicle prices and descriptions listed as available
              on our website are established and electronically placed there by
              the listing dealer who owns the vehicle and/or other third parties
              and not by us. All vehicles are subject to prior sale and may not
              be available when you contact the listing dealer. All vehicle
              content, including, but not limited to, prices and terms are
              believed to be accurate on the date of publication only and may be
              changed by us or the listing dealer without notice. All vehicles
              are subject to availability and final pricing from the listing
              dealer and not us. Any discrepancies or mistakes made regarding
              website content, including, but not limited to vehicle
              availability, condition or pricing are not our responsibility and
              should be directed to the listing dealer who is solely responsible
              for providing the information. We do not guarantee either
              expressly or by implication that we will find a vehicle that meets
              your specifications. You should assume that all prices shown by
              listing dealers exclude state and local taxes, as well as any
              state and local governmental charges, including without
              limitation, registration, license and title fees, documentary
              fees, emissions certification fees and added accessories you may
              choose to place on the vehicle. None of the vehicles listed on our
              website are offered by us and we make no representations with
              respect to their condition. All listings and website content are
              subject to the terms, conditions and warranty disclaimers of these
              Terms and Conditions of Use. Unless stated otherwise, all vehicles
              should be assumed to be sold "as-is", with all faults and without
              warranty, express or implied. All express or implied
              representations regarding a vehicle are that of the listing dealer
              and not us. The listing dealer is solely responsible for ensuring
              each vehicle meets minimum state and federal standards applicable
              for the model and year of vehicle prior to its sale, including all
              local, state and federal emissions and safety standards applicable
              for the model and year of vehicle.
            </p>
            <h3 className="privacy-policy-section-title">Third Parties</h3>
            <p className="privacy-policy-paragraph">
              The Site contains links to web sites of third parties.
              DriveChicago.com is not responsible for the actions of these third
              parties, including their privacy practices and any content posted
              on their web sites. We encourage you to review their privacy
              policies to learn more about what, why and how they collect and
              use personal information. DriveChicago.com adheres to industry
              recognized standards to secure any personal information in our
              possession, and to secure it from unauthorized access and
              tampering. However, as is true with all online actions, it is
              possible that third parties may unlawfully intercept transmissions
              of personal information, or other users of the Site may misuse or
              abuse your personal information that they may collect from the
              Site.
            </p>
            <p className="privacy-policy-paragraph">
              DriveChicago.com uses third-party advertising companies to serve
              our ads on the Site. These third-party advertising companies
              employ cookie and 1x1 pixel .gifs or web beacons to measure and
              improve the effectiveness of ads for their clients. To do so,
              these companies may use anonymous information about your visits to
              our website and other websites, but will not collect any
              information which can personally identify you or can be linked to
              you. This information can include: date/time of banner ad shown,
              the banner ad that was shown, their cookie, and the IP address.
              This information can also be used for online preference marketing
              purposes.
            </p>
            <p className="privacy-policy-paragraph">
              If you want to prevent a third-party advertiser from collecting
              data, currently you may either visit each ad network's web site
              individually and opt out or visit the NAI gateway opt-out site to
              opt-out of all network advertising cookies. Click here for the NAI
              gateway opt-out site.{" "}
              <Link
                className="privacy-policy-link"
                to="https://optout.networkadvertising.org/?c=1"
              >
                https://optout.networkadvertising.org/?c=1.
              </Link>
              This site will also allow you to review the third-party
              advertising companies' privacy policies.{" "}
            </p>
            <p className="privacy-policy-paragraph">
              This site is being monitored by one or more third-party monitoring
              software(s), and may capture information about your visit that
              will help us improve the quality of our service. You may opt-out
              from the data that{" "}
              <Link className="privacy-policy-link" to="https://smart-pixl.com">
                https://smart-pixl.com{" "}
              </Link>{" "}
              is collecting on your visit through a universal consumer options
              page located at
              <Link
                className="privacy-policy-link"
                to="https://smart-pixl.com/Unsub/unsub.html"
              >
                https://smart-pixl.com/Unsub/unsub.html
              </Link>
            </p>
          </div>
          <div className="privacy-policy-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
          </div>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={FordBanner}
              alt="placeholder"
            />
          </Link>
        </div>
      </>
    );
}