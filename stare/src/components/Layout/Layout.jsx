import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { Notifications } from "./Notifications";
import PropTypes from "prop-types"

const navLinks = [
  { title: "Home", to: "/", icon: "feather-home" },
  { title: "Stories", to: "/defaultstorie", icon: "feather-zap" },
  { title: "Videos", to: "/defaultvideo", icon: "feather-video" },
  { title: "Groups", to: "/defaultgroup", icon: "feather-user" },
  { title: "Shop", to: "/shop2", icon: "feather-shopping-bag" },
];

const feedElements = [
  { title: "Newsfeed", to: "/", icon: "feather-tv", color: "blue" },
  { title: "Badges", to: "/defaultbadge", icon: "feather-award", color: "red" },
  {
    title: "Explore Stories",
    to: "/defaultstorie",
    icon: "feather-globe",
    color: "gold",
  },
  {
    title: "Popular Groups",
    to: "/defaultgroup",
    icon: "feather-zap",
    color: "mini",
  },
  {
    title: "Author Profile",
    to: "/userpage",
    icon: "feather-user",
    color: "primary",
  },
];

const pagesList = [
  {
    title: "Email Box",
    to: "/defaultemailbox",
    icon: "inbox",
    count: 584,
  },
  {
    title: "Near Hotel",
    to: "/defaulthotel",
    icon: "home",
    count: 0,
  },
  {
    title: "Latest Event",
    to: "/defaultevent",
    icon: "map-pin",
    count: 12,
  },
  {
    title: "Live Stream",
    to: "/defaultlive",
    icon: "youtube",
    count: 0,
  },
];

export const Layout = ({ children }) => (
  <Fragment>
    <div className="nav-header bg-white shadow-xs border-0">
      <div className="nav-top">
        <Link to="/">
          <i className="feather-zap text-success display2-size me-3 ms-0"></i>
          <span className="d-inline-block fredoka-font ls-3 fw-600 text-current font-xxl logo-text mb-0 mr-2">
            Sociala.
          </span>
        </Link>
      </div>

      <form action="#" className="float-left header-search ms-3">
        <div className="form-group mb-0 icon-input">
          <i className="feather-search font-sm text-grey-400"></i>
          <input
            type="text"
            placeholder="Start typing to search.."
            className="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
          />
        </div>
      </form>

      {/* DRY - Don't repeat yourself */}
      {/* KISS = Keep it simple, stupid */}

      {/* Desktop Menu */}

      {navLinks.map((navLink) => (
        <NavLink
          // very important!
          key={navLink.title}
          activeClassName="active"
          to={navLink.to}
          className="p-2 text-center ms-0 menu-icon center-menu-icon"
        >
          <i
            className={`${navLink.icon} font-lg bg-greylight btn-round-lg theme-dark-bg text-grey-500`}
          />
        </NavLink>
      ))}

      {/* /Desktop Menu */}


      <Notifications />

      import { useState } from "react";

export const Notifications = () => {
  const [hasNotifications, setHasNotifications] = useState(false);

  // true lub false = boolean

  const toggleHasNotifications = () =>
    setHasNotifications((prevHasNoti) => !prevHasNoti);

  const notiClass = `${hasNotifications ? "show" : ""}`;

  const userCardNotifications = [
    {
      name: "Hendrix Stamp",
      notificationTime: "3 min",
      notificationMessage: "There are many variations of pass..",
    },
    {
      name: "Goria Coast",
      notificationTime: "2 min",
      notificationMessage: "Mobile Apps UI Designer is require..",
    },
    {
      name: "Surfiya Zakir",
      notificationTime: "1 min",
      notificationMessage: "Mobile Apps UI Designer is require..",
    },
    {
      name: "Victor Exrixon",
      notificationTime: "30 sec",
      notificationMessage: "Mobile Apps UI Designer is require..",
    },
  ];

  return (
    <>
      <span
        className={`p-2 cursor-pointer text-center ms-auto menu-icon ${notiClass}`}
        style={{ "margin-inline-start": "auto" }}
        id="dropdownMenu3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={toggleHasNotifications}
      >
        <span className="dot-count bg-warning"></span>
        <i className="feather-bell font-xl text-current"></i>
      </span>
      {/* a11ly = accessibility */}
      <div
        className={`dropdown-menu p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`}
        aria-labelledby="dropdownMenu3"
      >
        <h4 className="fw-700 font-xss mb-4">Notification</h4>
        {userCardNotifications.map((userCardNotification) => (
          <div
            key={userCardNotification.name}
            className="card bg-transparent-card w-100 border-0 ps-5 mb-3"
          >
            <img
              src="assets/images/user.png"
              alt="user"
              className="w40 position-absolute left-0"
            />
            <h5 className="font-xsss text-grey-900 mb-1 mt-0 fw-700 d-block">
              {userCardNotification.name}{" "}
              <span className="text-grey-400 font-xsssss fw-600 float-right mt-1">
                {" "}
                {userCardNotification.notificationTime}
              </span>
            </h5>
            <h6 className="text-grey-500 fw-500 font-xssss lh-4">
              {userCardNotification.notificationMessage}
            </h6>
          </div>
        ))}
      </div>
    </>
  );
};

      <Link
        to="/defaultmessage"
        className="p-2 text-center ms-3 menu-icon chat-active-btn"
      >
        <i className="feather-message-square font-xl text-current"></i>
      </Link>

      <Link to="defaultsettings" className="p-0 ms-3 menu-icon">
        <img src="assets/images/user.png" alt="user" className="w40 mt--1" />
      </Link>

      {/* Side Navigation */}
      <nav className={`navigation scroll-bar`}>
        <div className="container ps-0 pe-0">
          <div className="nav-content">
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
              <div className="nav-caption fw-600 font-xssss text-grey-500">
                <span>New </span>Feeds
                <ul className="mb-1 top-content">
                  {feedElements.map((feedElement) => (
                    <li key={feedElement.to}>
                      <Link
                        to={feedElement.to}
                        className="nav-content-bttn open-font"
                      >
                        <i
                          className={`${feedElement.icon} btn-round-md bg-${feedElement.color}-gradiant me-3`}
                        />
                        <span>{feedElement.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* More Pages */}
            <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
              <div className="nav-caption fw-600 font-xssss text-grey-500">
                <span>More </span>Pages
              </div>
              <ul className="mb-3">
                {pagesList.map((page) => (
                  <li key={page.to}>
                    <Link
                      to="/defaultemailbox"
                      className="nav-content-bttn open-font"
                    >
                      <i
                        className={`font-xl text-current ${page.icon} me-3`}
                      ></i>
                      <span>{page.title}</span>
                      {page.count !== 0 && (
                        <span className="circle-count bg-warning mt-1">
                          {page.count}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* More Pages */}
          </div>
        </div>
      </nav>
      {/* /Side Navigation */}
    </div>
    {children}
  </Fragment>
);

Layout.PropTypes = {
  children: PropTypes.node.isRequired 
};