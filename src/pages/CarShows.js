import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "src/routes/PathConstants";
import HeroImage from "../images/Car-Shows-Hero-Image.png";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import "./CarShows.css";

export default function CarShows() {
    return (
      <>
        <div className="car-shows-hero-section">
          <img className="car-shows-hero-image" src={HeroImage} alt="freeway" />
          <div className="car-shows-title-wrapper">
            <h1 className="car-shows-title">Car Shows and Cruise Nights</h1>
          </div>
        </div>
        <div className="banner-ad-wrapper">
          <Link className="banner-ad" to="/">
            <img
              className="banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <div className="car-shows-content-wrapper">
          <div className="car-shows-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="car-shows-middle-section">
            <h2 className="car-shows-middle-title">Featured Car Show</h2>
            <div className="car-shows-feature-wrapper">
              <div className="car-shows-feature-card">
                <h3 className="car-shows-feature-section-title">
                  Saturday, October 21, 2023 in Chicago, IL
                </h3>
                <p className="car-shows-feature-section-text">
                  6144 W. Irving Park Rd. Annual Halloween Themed Car Show in
                  conjunction with St. Pascal Family Fest 10am - 2:30pm.
                  Registration opens at 9am; $15 per car. Dash plaques for the
                  first 40 vehicles registered. Door prizes, 50/50 raffle,
                  entertainment by Crusin Music Radio. For more information,
                  call (224) 587-6803.{" "}
                </p>
              </div>
              <div className="car-shows-submit-listing">
                <h3 className="car-shows-feature-section-title">
                  Submit Your Event!
                </h3>
                <p className="car-shows-feature-section-text">
                  Not only is DriveChicago.com a great place to shop for a new
                  or used vehicle, it's Chicago's summertime home for a complete
                  listing of car shows and cruise nights. Click the link below
                  to submit your car show or cruise night for listing on
                  DriveChicago.com.
                </p>
                <div className="car-shows-submit-listing-link-wrapper">
                  <Link
                    className="car-shows-submit-listing-link"
                    to={PathConstants.LISTINGS_CAR_SHOWS}
                  >
                    Enter Info »
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="car-shows-middle-title">Car Shows</h2>
            <ul className="car-shows-list">
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Oct 21 in Chicago, IL
                </h4>
                <p className="car-shows-item-text">
                  6144 W. Irving Park Rd. Annual Halloween Themed Car Show in
                  conjunction with St. Pascal Family Fest 10am - 2:30pm.
                  Registration opens at 9am; $15 per car. Dash plaques for the
                  first 40 vehicles registered. Door prizes, 50/50 raffle,
                  entertainment by Crusin Music Radio. For more information,
                  call (224) 587-6803.{" "}
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Oct 21 in Fox Lake, IL
                </h4>
                <p className="car-shows-item-text">
                  100 S. US 12. Fox Lake Culvers Halloween Car Show 9am - 2pm.
                  Twenty dollar car registration begins at 8am. Trophies awarded
                  for best Halloween car and best costumes, adult and child.
                  Great music, cool cars and 50/50 raffle.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Oct 21 in Montgomery, IL
                </h4>
                <p className="car-shows-item-text">
                  121 N. River St. Forgotten Teens Car Show 2pm - 6pm at the
                  Montgomery VFW. Cash awards, truck or treat, giveaways, prizes
                  and more. Donation: $10. All proceeds help homeless teens this
                  holiday season. For more information, contact Mark: (630)
                  997-6982.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Oct 21 in Wheaton, IL
                </h4>
                <p className="car-shows-item-text">
                  0N731 Papworth St. Truck or Treat Car Show 11am - 4pm
                  presented by Wheaton VFW post 2164. Open to the public, family
                  friendly. Trophies, live music, inflatables, raffles and
                  games. Car Show 11am - 2pm, $20 per vehicle; all makes and
                  models welcome. Truck or Treat 2pm - 4pm. Prize for the best
                  truck theme, Please bring candy for the Truck or Treaters. Car
                  show registration begins at 9am. For more information, visit:
                  www.vfw2164@comcast.net
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sat, Oct 28 in Lake Villa, IL
                </h4>
                <p className="car-shows-item-text">
                  850 Tower Dr. Fourth Annual Halloween Car Truck and Bike Show
                  9am - 2pm at the Lake House. Live DJ, 50/50 raffles and great
                  food. Registration starts at 8:30 am until lot is full, fee:
                  $20 per ride. Rain date: Sunday, October 29.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Oct 29 in Dundee, IL
                </h4>
                <p className="car-shows-item-text">
                  551 S. Rt. 31. 10th Annual Day of The Dead Car Show 10 am -
                  3pm at Cali BBQ. Open to all makes. Fundraiser for the
                  Prostate Awareness Cancer Foundation. Themed awards and door
                  prizes. Music starts at noon featuring DJ Rudy the K Cruisin
                  Music Radio. For more information, call: 224-587-6803.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">
                  Sun, Oct 29 in River Grove, IL
                </h4>
                <p className="car-shows-item-text">
                  8601 W. Fullerton Ave. Halloween Car Show and Truck and Treats
                  at River Forest Moose Lodge. Registration 11am - 2pm, Judging
                  starts at 2pm, trophies awarded at 3pm. Food, live DJ and kids
                  playground. Entry fee: $20.
                </p>
              </li>
            </ul>
            <h2 className="car-shows-middle-title">Cruise Nights</h2>
            <ul className="car-shows-list">
              <h4 className="car-shows-day">Monday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">South Barrington, IL</h4>
                <p className="car-shows-item-text">
                  67 E. Algonquin Rd. (Algonquin Rd and Barrington Rd) Cruise
                  Nights at Willow Creek Community Church the fourth Monday of
                  the month from 5pm - 8pm in parking lot F beginning May 22.
                  Free event open to vintage muscle and antique cars and trucks.
                  Food and music provided. Contributions to offset costs are
                  appreciated. The event is sponsored by CARS Ministry of Willow
                  Creek Church. For more information, call: 224-512-2074 or
                  e-mail:{" "}
                  <Link className="car-shows-item-link">
                    jgingerich@willowcreek.org
                  </Link>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Worth, IL</h4>
                <p className="car-shows-item-text">
                  115th and Harlem. Worth Cruise Nights 5pm - 8:30pm May 1st
                  through the end of October at Waters Edge Golf Course. Food
                  and drinks available. Rock N' Roll music and Club Choice
                  awards.
                </p>
              </li>
              <h4 className="car-shows-day">Tuesday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Sandwich, IL</h4>
                <p className="car-shows-item-text">
                  125 Duvick Ave. Johnny K's 2023 Cruise Night 5pm - 9pm every
                  other Tuesday through Oct. 17. Discounts given to drivers of
                  show cars. Dates include: July 25, Aug. 8, Aug. 22, Sept. 5,
                  Sept. 19, Oct. 3, Oct. 17.
                </p>
              </li>
              <h4 className="car-shows-day">Wednesday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Addison, IL</h4>
                <p className="car-shows-item-text">
                  520 W. Lake St. Cruise Night with Elio's Pizza in the Caputo's
                  Shopping Center 5pm - 8pm starting May 10 with DJ Tony.
                  Twenty-five percent off whole pizzas for anyone bringing a
                  classic car. Parking for 200 cars. For Show information, call
                  (630) 675-7872.{" "}
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Joliet, IL</h4>
                <p className="car-shows-item-text">
                  24 Stone City Dr. Wednesday Night Cruise Night 6pm - 9pm from
                  May through September hosted by the Stone City VFW Post 2199.
                  Cold beer, DJ, great food.{" "}
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">New Lenox, IL</h4>
                <p className="car-shows-item-text">
                  14414 W. Ford Drive. Cars and Stripes Cruise Night 5pm - dusk
                  weather permitting during the second Wednesday of the month
                  from May 10 through October 11 at American Legion Post 1977.
                  Food available, 50/50 raffle drawing, DJ by Chad. Free
                  Admission. Featured marques at each event. Rain date: third
                  Wednesday of the month. For more information, e-mail:
                  <Link className="car-shows-item-link">
                    shadowlap@icloud.com
                  </Link>{" "}
                  or visit:{" "}
                  <Link className="car-shows-item-link">
                    www.americanlegionnewlenox.com
                  </Link>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Whiting, IN</h4>
                <p className="car-shows-item-text">
                  119th St. Cruise Nights in downtown Whiting from 5pm - 9pm
                  during select Wednesdays in 2023. Dates include May 17, June
                  21, July 19th, Aug. 16 (Elvis Night), Sept. 20 and Oct. 18.
                  Free registration for cars and trucks 1999 and older. Enjoy
                  music, door prizes and raffles.
                </p>
              </li>
              <h4 className="car-shows-day">Thursday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Chicago, IL</h4>
                <p className="car-shows-item-text">
                  7250 W Foster Ave. City Wide Classics Cruise Night at O'Reilly
                  Auto Parts near the intersection of Harlem and Foster from 6pm
                  - 9pm. Shows start May 18 and continue through November 2.For
                  more information, visit:
                  <Link className="car-shows-item-link">
                    https://www.facebook.com/profile.php?id=100009707551894
                  </Link>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Glendale Heights, IL</h4>
                <p className="car-shows-item-text">
                  North Ave. and Glen Ellyn Rd. Thursday Cruise Nights 5pm - 9pm
                  through mid October hosted by the Chicago Rod Fathers Car Club
                  near the Wendy's parking lot. All makes are welcome.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Lombard, IL</h4>
                <p className="car-shows-item-text">
                  Route 53 and North Ave. Tire Swarm Car and Bike Show 4pm - 9pm
                  at Brauerhouse. Enjoy live bands. No entry fee.
                </p>
              </li>
              <h4 className="car-shows-day">Friday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Joliet, IL</h4>
                <p className="car-shows-item-text">
                  2625 Ingalls Ave. Friday Cruise Nights at American Legion Post
                  1080 4pm - 8pm first and third Fridays of the month starting
                  May 6. Live music, food specials.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Villa Park, IL</h4>
                <p className="car-shows-item-text">
                  231 E. North Ave. Friday Cruise Night starts mid March and
                  continues through the Fall at Strat's Diner from 4:30pm to
                  8pm. Entertainment by Cruising Music Radio Host DJ/VJ Rudy
                  "K". For more information, call (224) 587-6803.
                </p>
              </li>
              <h4 className="car-shows-day">Saturday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Morris, IL</h4>
                <p className="car-shows-item-text">
                  Liberty St. Downtown Morris. Cruise Night Downtown Morris 6pm
                  - 9pm. June 10, July 8, August 12, September 9, October 14
                  (hours 4pm - 7pm). All vehicles welcome. $10 entry per
                  vehicle.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Mt. Prospect, IL</h4>
                <p className="car-shows-item-text">
                  Northwest Hwy. and Rt. 83 Metra Parking Lot. Bluesmobile
                  Cruise Nights 2023 sponsored by the Mt. Prospect Lions Club
                  starts May 13 and continues through the end of September from
                  3pm - 9pm weather permitting. Music provided by D.J. Jose. For
                  more information, visit:{" "}
                  <Link className="car-shows-item-link">
                    www:mplions.org/cruise-nights
                  </Link>
                </p>
              </li>
              <h4 className="car-shows-day">Sunday</h4>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Addison, IL</h4>
                <p className="car-shows-item-text">
                  48 W. Lake St. Sunday Cruise Night starts May 21 through
                  October weather permitting in the Green Meadows Shopping
                  Center by Flavor Frenzy from 5pm - 8pm. Open to all cars with
                  parking for 200. For more information, call (630) 675-7872.
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Elgin, IL</h4>
                <p className="car-shows-item-text">
                  2486 Bushwood Dr. Rookies Cruise Nights from 5 pm - 8pm start
                  the first Sunday in June and continues through the end of
                  September. This marks the 16th year. All cruisers, rods,
                  customs and vintage vehicles welcome and enjoy half-priced
                  pizzas. No entry fee. Koolest Kar Award issued each night.
                  Presented by Double K Car Shows. For more information, visit:
                  <Link className="car-shows-item-link">
                    www.doublekproductions.com
                  </Link>
                </p>
              </li>
              <li className="car-shows-list-item">
                <h4 className="car-shows-item-title">Island Lake, IL</h4>
                <p className="car-shows-item-text">
                  4018 Roberts Rd. Cars & Coffee (Bikes and Trucks invited too)
                  starting at 9am through September at Sideouts Sports Tavern in
                  Island Lake. Brunch served 8:30am - 2pm. Complimentary coffee
                  at 9am. Stay for the NASCAR viewing party. For more
                  information, visit:{" "}
                  <Link className="car-shows-item-link">
                    www.3dsideouts.com/events
                  </Link>
                </p>
              </li>
            </ul>
          </div>
          <div className="car-shows-vertical-ad-wrapper">
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