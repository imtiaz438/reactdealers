import { getCars } from "src/store/carsSlice";
import { SkeletonTheme } from "react-loading-skeleton";
import store from "src/store/store";
import PathConstants from "./PathConstants";
import Home from "../pages/Home";
import CarSearch from "../pages/CarSearch";
import CarShows from "../pages/CarShows";
import ListingsCarShows from "../pages/ListingsCarShows";
import ReviewsPage from "../pages/ReviewsPage";
import SellCar from "../pages/SellCar";
import ListingsDealer from "../pages/ListingsDealer";
import Calculator from "../pages/Calculator";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import ForgotPassword from "src/pages/ForgotPassword";
import About from "../pages/About";
import ListingsCity from "../pages/ListingsCity";
import ListingsMake from "../pages/ListingsMake";
import Article from "../pages/Article";
import Vehicle from "../pages/Vehicle";
import Results from "../pages/Results";
import AccountSettings from "../pages/AccountSettings";
import SavedCars from "../pages/SavedCars";
// import SavedSearches from "src/pages/SavedSearches";
// import Garage from "src/pages/Garage";
import EmailNotifications from "../pages/EmailNotifications";
// import ListingStepOne from "src/pages/ListingStepOne";
// import ListingStepTwo from "src/pages/ListingStepTwo";
// import ListingStepThree from "src/pages/ListingStepThree";
// import ListingStepFour from "src/pages/ListingStepFour";
// import ListingStepFive from "src/pages/ListingStepFive";
// import ListingStepSix from "src/pages/ListingStepSix";
// import ListingConfirmation from "src/pages/ListingConfirmation";
import Faq from "../pages/Faq";
import Contact from "../pages/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "src/pages/TermsOfUse";
import NotFound from "../pages/NotFound";
import TestLogin from "src/pages/TestLogin";

export const paths = [
  {
    path: PathConstants.HOME,
    element: (
      <SkeletonTheme baseColor="#fff" highlightColor="#525252">
          <Home />
      </SkeletonTheme>
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.CAR_SEARCH,
    element: (
      <CarSearch />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.CAR_SHOWS,
    element: (
      <CarShows />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.LISTINGS_CAR_SHOWS,
    element: (
      <ListingsCarShows />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.REVIEWS,
    element: (
      <ReviewsPage />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.SELL_CAR,
    element: (
      <SellCar />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.LISTINGS_DEALER,
    element: (
      <ListingsDealer />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.CALCULATOR,
    element: (
      <Calculator />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.SIGNUP,
    element: (
      <SignUp />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.LOGIN,
    element: (
      <LogIn />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.FORGOT_PASSWORD,
    element: (
      <ForgotPassword />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.ABOUT,
    element: (
      <About />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.LISTINGS_CITY,
    element: (
      <ListingsCity />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.LISTINGS_MAKE,
    element: (
      <ListingsMake />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.ARTICLE,
    element: (
      <Article />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.VEHICLE,
    element: (
      <SkeletonTheme baseColor="#fff" highlightColor="#525252">
        <Vehicle />
      </SkeletonTheme>
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.RESULTS,
    element: (
      <SkeletonTheme baseColor="#fff" highlightColor="#525252">
        <Results />
      </SkeletonTheme>
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.ACCOUNT_SETTINGS,
    element: (
      <AccountSettings />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.SAVED_CARS,
    element: (
      <SavedCars />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {/*
    path: PathConstants.SAVED_SEARCHES,
    element: (
      <SavedSearches />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.GARAGE,
    element: (
      <Garage />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  */},
  {
    path: PathConstants.EMAIL_NOTIFICATIONS,
    element: (
      <EmailNotifications />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {/*
    path: PathConstants.LISTING_STEP_ONE,
    element: (
      <ListingStepOne />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.LISTING_STEP_TWO,
    element: (
      <ListingStepTwo />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.LISTING_STEP_THREE,
    element: (
      <ListingStepThree />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.LISTING_STEP_FOUR,
    element: (
      <ListingStepFour />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.LISTING_STEP_FIVE,
    element: (
      <ListingStepFive />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.LISTING_STEP_SIX,
    element: (
      <ListingStepSix />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {/*
    path: PathConstants.LISTING_CONFIRMATION,
    element: (
      <ListingConfirmation />
    ),
    loader: ({ params }) => {
      store.dispatch(getCars());
      return { params };
    },
  */},
  {
    path: PathConstants.FAQ,
    element: (
      <Faq />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.CONTACT,
    element: (
      <Contact />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.PRIVACY_POLICY,
    element: (
      <PrivacyPolicy />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.TERMS_OF_USE,
    element: (
      <TermsOfUse />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: PathConstants.NOT_FOUND,
    element: (
      <NotFound />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
  {
    path: "/test-login",
    element: (
      <TestLogin />
    ),
    loader: async ({ params }) => {
      await store.dispatch(getCars());
      return { params };
    },
  },
];