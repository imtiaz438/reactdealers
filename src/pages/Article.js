import React from "react";
import { Link } from "react-router-dom";
import ToyotaBanner from "../images/Banner-Ad-Toyota.jpg";
import FordBanner from "../images/Banner-Ad-Ford.jpg";
import FordVertical from "../images/Ford-Vertical-Ad.jpg";
import ToyotaVertical from "../images/Toyota-Vertical-Ad.jpg";
import SubaruOne from "../images/Subaru-Crosstrek-1200-1.jpg";
import SubaruTwo from "../images/Subaru-Crosstrek-1200-2.jpg";
import SubaruThree from "../images/Subaru-Crosstrek-1200-3.jpg";
import SubaruFour from "../images/Subaru-Crosstrek-1200-4.jpg";
import Headshot from "../images/mark-bilek.jpg";
import "./Article.css";

export default function Article() {
    return (
      <>
        <div className="article-banner-ad-wrapper">
          <Link className="article-banner-ad" to="/">
            <img
              className="article-banner-ad-image"
              src={ToyotaBanner}
              alt="placeholder"
            />
          </Link>
        </div>
        <h1 className="article-title">2024 Subaru Crosstrek Review</h1>
        <h3 className="article-subtitle">
          Refined More Than Refreshed, A Compelling Choice in 2024
        </h3>
        <p className="article-author">by: Mark Bilek</p>
        <div className="article-content-wrapper">
          <div className="article-vertical-ad-wrapper">
            <Link>
              <img src={ToyotaVertical} alt="ad" />
            </Link>
          </div>
          <div className="article-content">
            <p className="article-paragraph">
              Though you might not notice, the Subaru Crosstrek is all-new for
              2024. Crosstrek is a subcompact crossover/wagon that seats five.
              It's based on Subaru Impreza mechanicals and, like almost all
              Subaru vehicles, comes only with all-wheel drive. Competitors
              include the Chevrolet Trax, Honda HR-V, Hyundai Kona, Kia Seltos,
              Nissan Kicks and Toyota C-HR. Changes for 2024 include updated
              styling, freshened interior, and additional features. The
              Crosstrek Hybrid model is discontinued for 2024.{" "}
            </p>
            <p className="article-paragraph">
              Four trim levels are offered: Base, Premium, Sport, Limited and
              new Wilderness. Prices start at $26,000 and climb to $33,000. A
              2.0-liter 4-cylinder engine that makes 152 horsepower is standard
              on the Base and Premium. Sport, Limited and Wilderness get a
              2.5-liter 4-cylinder engine that makes 182 horsepower. Unlike most
              four-cylinder engines that have the pistons arranged in a vertical
              manner, the Subaru engine places its cylinders in horizontal
              opposition. Called a "boxer", this design is lower and shorter
              than a more conventional design. Both engines are paired with a
              CVT automatic transmission.{" "}
            </p>
            <p className="article-paragraph">
              The all-wheel-drive system includes active-torque vectoring and
              hill-descent control. Ground clearance is 8.7-inches and maximum
              towing capacity is 1500 pounds.{" "}
            </p>
            <div className="article-features-section">
              <div className="article-features-text-wrapper">
                <h5 className="article-features-title">Features</h5>
                <ul className="article-features-list">
                  <li className="article-features-list-item">
                    Blind-spot Alert
                  </li>
                  <li className="article-features-list-item">
                    Leather Upholstery
                  </li>
                  <li className="article-features-list-item">
                    Adaptive LED Headlights
                  </li>
                  <li className="article-features-list-item">
                    Adaptive Cruise Control
                  </li>
                </ul>
              </div>
              <img
                className="article-paragraph-image"
                src={SubaruOne}
                alt="Subaru"
              />
            </div>
            <p className="article-paragraph">
              Available features include blind-spot alert, leather upholstery,
              Harman Kardon audio system and adaptive LED headlights. Subaru's
              EyeSight Driver Assist Technology Package is standard on all
              models and adds adaptive cruise control, automatic pre-collision
              warning and braking, lane-departure warning and lane-keeping
              assist.
            </p>
            <p className="article-paragraph">
              With just one passenger aboard, the 2.0-liter engine provides
              adequate acceleration from a stop and decent passing response.
              It's somewhat dulled by the slushy continuously variable
              transmission that slips between ratios with less authority than
              most. Add a few adults or a hundred pounds of cargo and
              acceleration is blunted, to the point where drivers will be
              wishing for a few more ponies under the hood.
            </p>
            <div className="article-text-wrapper">
              <img
                className="article-paragraph-image"
                src={SubaruTwo}
                alt="Subaru"
              />
              <p className="article-paragraph">
                Sport, Limited and Wilderness buyers get a 2.5-liter four.
                Though no powerhouse, the engine lowers the 0-60 MPH time to a
                middling 8.5 seconds. More importantly it adds mid-range punch
                that's felt when pulling away from stoplights and in highway
                passing situations. It seems to work a little better with the
                CVT automatic, but still lacks the refinement of a traditional
                automatic in passing situations.
              </p>
            </div>
            <p className="article-paragraph">
              The 2.0-liter-powered Crosstrek is EPA rated at 27 MPG city and 34
              MPG highway. The 2.5-liter Crosstrek nets out at 26/33 MPG. In
              either case, those numbers match or beat most competitors.
              Real-world fuel economy is impressive, with the Crosstrek
              averaging an easy 30 MPG in an even mix of suburban commuting and
              highway driving. The 16.6-gallon fuel tank is quite large for the
              class and easily facilitates 400 miles of driving between
              fill-ups.
            </p>
            <p className="article-paragraph">
              Subaru's all-wheel-drive system does not have a low range, so that
              limits the Crosstrek's ultimate off-road ability. Still, ground
              clearance is a plus and the suspension has lots of travel. Plus,
              active-torque vectoring transfers engine power front-to-rear and
              side-to-side to send thrust to the wheels with the most traction.
              That translates into a vehicle that more than capable on Chicago's
              snow-covered roads and the occasional mountain trail. It is worth
              noting that Wilderness models slightly better ground clearance,
              which should improve off-road ability.
            </p>
            <div className="article-text-wrapper">
              <p className="article-paragraph">
                Behind the wheel, Crosstrek feels very much like other Subaru
                models. The absorbent suspension does an excellent job of
                soaking up pavement imperfections and maintaining a comfortable
                cabin. However, there's a sponginess to the ride that's almost
                rubbery. That same feeling transfers into the sloppy steering
                and numb brake pedal. It's not that the Crosstrek isn't
                athletic, it's just not a sporty as some competitors -- and
                that's by design, as the vehicle is quite capable off road and
                also comfortable on road.
              </p>
              <img
                className="article-paragraph-image"
                src={SubaruThree}
                alt="Subaru"
              />
            </div>
            <p className="article-paragraph">
              Unfortunately, both engines are a bit buzzy and there's only
              minimal sound insulation. Together, this creates a somewhat noisy
              cabin -- especially at highway speeds. This gets particularly
              annoying on long highway trips on concrete pavement, where the
              tires add a constant hum.
            </p>
            <p className="article-paragraph">
              Driver's face a traditional twin-dial setup through a beefy
              steering wheel that sports buttons for cruise control, audio
              system and information display. The center stack features a
              high-mounted information screen, large touch-screen display that's
              augmented by clearly marked menu buttons and simple rotary dials
              for climate control. Materials are appropriate for the class with
              top trim levels adding more than a few nice touches like a
              leather-wrapped dashtop and chrome accents throughout.
            </p>
            <p className="article-paragraph">
              Subaru's infotainment system is fairly straightforward and
              includes support for Android Auto and Apple Car Play.{" "}
            </p>
            <div className="article-text-wrapper">
              <img
                className="article-paragraph-image"
                src={SubaruFour}
                alt="Subaru"
              />
              <p className="article-paragraph">
                The front seats are nicely bolstered -- if a bit upright -- and
                provide ample adjustment fore and aft. Head room is generous. On
                many compact crossovers, the rear seats are penalty boxes. Not
                so on the Crosstrek, which offers good room for large adults on
                nicely padded seat cushions. Entry/exit is a snap through
                wide-opening doors. Another bonus is excellent outward
                visibility thanks to thin roof pillars and a low beltline.
              </p>
            </div>
            <p className="article-paragraph">
              At 19.9 cubic feet, cargo capacity is on par with others in the
              class. In addition, folding the rear seats extends capacity to
              54.7 cubic feet. The cargo floor is extremely low and hatch
              opening quite large, making it easy to load and unload bulky
              items. Interior storage is good with several open and covered bins
              throughout and large front-door map pockets.
            </p>
            <h4 className="article-paragraph-title">Bottom Line</h4>
            <p className="article-paragraph">
              Subaru would like you to think the Crosstrek is a crossover, it's
              not. It's a high-built wagon. That said, it's eminently more
              useful that most in the class in many ways. It offers ample room
              for four adults, has generous cargo capacity, provides good fuel
              economy, offers the go anywhere ability of all-wheel drive and is
              available with a complete suite of safety and technology features.
              When shopping comparably equipped competitors, prices are
              reasonable as well. Downsides include a somewhat sloppy ride,
              milquetoast acceleration and higher-than-expected interior noise
              levels. Overall, the Crosstrek makes a great city vehicle that can
              double as a weekend getaway car for that trip to the country.
            </p>
          </div>
          <div className="article-vertical-ad-wrapper">
            <Link>
              <img src={FordVertical} alt="ad" />
            </Link>
          </div>
        </div>
        <div className="article-author-box">
          <div className="article-headshot-wrapper">
            <img
              className="article-headshot-image"
              src={Headshot}
              alt="headshot"
            />
            <h5 className="article-headshot-title">Mark Bilek</h5>
          </div>
          <div className="article-author-paragraph-wrapper">
          <p className="article-author-paragraph">
            Mark Bilek is the Senior Director of Communications and Technology
            for the Chicago Auto Trade Association and the General Manager for
            DriveChicago.com. He is also responsible for developing and
            maintaining the <Link className="article-author-link">Chicago Auto Show</Link> Web site.
          </p>
          <p className="article-author-paragraph">
            Mark has been reviewing vehicles for more than two decades.
            Previously, he was associate publisher at Consumer Guide, where he
            oversaw publication of Consumer Guide Car & Truck Test, Consumer
            Guide's Used Car Book, and ConsumerGuide.com. He was also
            responsible for publication of "Collectible Automobile" and various
            hardcover automotive titles. In 2001 and 2002 he served as president
            of a Midwest Automotive Media Association. Mark has appeared on NBC
            TV, ABC TV, Fox News, WGN and MotorTrend TV as an automotive
            consultant. He hosts the Drive Chicago radio show on WLS 890 AM and
            was a regular guest on WGN Radio's Steve & Johnnie show. Mark lives
            in the northwest suburbs with his wife and three sons.
          </p>
          </div>
        </div>
        <div className="article-banner-ad-wrapper">
          <Link className="article-banner-ad" to="/">
            <img
              className="article-banner-ad-image"
              src={FordBanner}
              alt="placeholder"
            />
          </Link>
        </div>
      </>
    );
}