import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaChevronDown,
  FaTimes,
  FaShoppingCart,

} from "react-icons/fa";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinkItem from "./NavLinkItems";
import AccountMenu from "./AccountMenu";
import { useCart } from "../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Education", path: "/education" },
  { name: "About", path: "/about" },
  { name: "Contacts", path: "/contacts" },
    { name: "NilB2B", path: "/b2b" },
];

const exploreItems = [
  {
    title: "Digital Software Services",
    items: [
      { name: "Nilstore", path: "/products" },
      { name: "NilB2B", path: "/b2b" },
      {
        name: "CapitaScope",
        path: "https://boljames.github.io/CapitaScope/",
        external: true,
      },
    ],
  },



  {
    title: "Tech Products",
    items: [
      {
        name: "Stationery",
        path: "/products#stationery",
      },
      {
        name: "Computers",
        path: "/products#computers",
      },
      {
        name: "Electronics",
        path: "/products#electronics",
      },
      {
        name: "Networking Devices",
        path: "/products#networking",
      },
    ],
  },

  {
    title: "Education",
    items: [
      {
        name: "Nil2Academy",
        path: "/Education",
      },
      {
        name: "Courses",
        path: "/Education",
      },
      {
        name: "Internships",
        path: "/Education",
      },
    ],
  },

  {
    title: "Media & Insights",
    items: [
      {
        name: "Tech News",
        path: "/TechNews",
      },
      {
        name: "Blogs",
        path: "/Blogs",
      },
    
    ],
  },

  {
    title: "Opportunities",
    items: [
      {
        name: "Careers",
        path: "/opportunities/careers",
      },
      
      {
        name: "Global Opportunities",
        path: "/opportunities/global",
      },
    ],
  },
];
// =========================================================
// NAVBAR COMPONENT
// =========================================================

// Define the NavBar React component.
// Everything inside this function controls the Navbar.
function NavBar() {

  // -------------------------------------------------------
  // MOBILE MENU STATE
  // -------------------------------------------------------

  // Create a state variable called "isOpen".
  //
  // isOpen = current state
  // setIsOpen = function used to change the state
  //
  // false means the mobile menu is currently closed.
  const [isOpen, setIsOpen] = useState(false);


  // -------------------------------------------------------
  // EXPLORE DROPDOWN STATE
  // -------------------------------------------------------

  // Keeps track of whether the Explore dropdown is open.
  //
  // false = dropdown closed
  // true  = dropdown open
  const [isExploreOpen, setIsExploreOpen] =
    useState(false);


  // -------------------------------------------------------
  // EXPLORE SEARCH STATE
  // ------------------------------------------------------
  // Stores whatever the user types into the Explore input.
  // Example:
  // User types "academy"
  // exploreSearch becomes:
  // "academy"
  //
  const [exploreSearch, setExploreSearch] = useState("");
  // -------------------------------------------------------
  // CREATE A REF FOR THE EXPLORE SECTION
  // -------------------------------------------------------

  // useRef creates a reference to a DOM element.
  //
  // We will attach this reference to the Explore container.
  //
  // This allows us to later ask:
  //
  // "Did the user click inside or outside Explore?"
  //
  const exploreRef = useRef(null);


  // -------------------------------------------------------
  // REACT ROUTER NAVIGATION
  // -------------------------------------------------------

  // useNavigate gives us a function called "navigate".
  //
  // We can use:
  //
  // navigate("/products")
  //
  // to move the user to another React route without
  // refreshing the entire webpage.
  const navigate = useNavigate();


  // -------------------------------------------------------
  // SHOPPING CART
  // -------------------------------------------------------

  // Get "itemCount" from our CartContext.
  //
  // itemCount tells us how many items are currently
  // in the user's shopping cart.
  //
  // This can be used to display something like:
  //
  // 🛒 3
  //
  const { itemCount } = useCart();


  // =========================================================
  // CLOSE EXPLORE WHEN CLICKING OUTSIDE
  // =========================================================

  // useEffect allows us to perform a side effect.
  //
  // In this case, we want to listen for mouse clicks
  // anywhere on the webpage.
  useEffect(() => {


    // -------------------------------------------------------
    // CREATE CLICK HANDLER
    // -------------------------------------------------------

    // This function runs whenever the user clicks somewhere
    // on the webpage.
    const handleClickOutside = (event) => {


      // -----------------------------------------------------
      // CHECK WHETHER CLICK WAS OUTSIDE EXPLORE
      // -----------------------------------------------------

      // exploreRef.current contains the actual DOM element
      // that we attached the ref to.
      //
      // contains(event.target) asks:
      //
      // "Does the Explore element contain the thing
      //  that the user clicked?"
      //
      // If it does NOT contain the clicked element,
      // then the user clicked outside Explore.
      if (
        exploreRef.current &&
        !exploreRef.current.contains(event.target)
      ) {


        // Close the Explore dropdown.
        //
        // false means:
        //
        // isExploreOpen = false
        //
        setIsExploreOpen(false);
      }
    };


    // -------------------------------------------------------
    // LISTEN FOR MOUSE CLICKS
    // -------------------------------------------------------

    // Add the handleClickOutside function to the document.
    //
    // "mousedown" fires when the mouse button is pressed.
    //
    // Because we attach it to "document", it can detect
    // clicks anywhere on the webpage.
    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    // -------------------------------------------------------
    // CLEANUP
    // -------------------------------------------------------

    // React runs this function when the component is removed
    // from the page.
    //
    // It is VERY important to remove the event listener.
    //
    // Otherwise, every time the component is mounted,
    // another event listener could be added.
    return () => {

      // Remove the event listener that we previously added.
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };


  // ---------------------------------------------------------
  // DEPENDENCY ARRAY
  // ---------------------------------------------------------

  // [] means this effect runs when the component mounts,
  // and the cleanup runs when the component unmounts.
  }, []);


  // =========================================================
  // FILTER EXPLORE ITEMS
  // =========================================================

  // Start with the complete exploreItems array.
  //
  // .map() goes through every section.
  //
  // Example:
  //
  // Software Section
  // AI & Innovations
  // Products
  // Education
  // Media & Studios
  // Opportunities
  //
  const filteredExploreItems =
    exploreItems

      // -----------------------------------------------------
      // CREATE A COPY OF EACH SECTION
      // -----------------------------------------------------

      // map() creates a NEW array.
      //
      // "...section" copies everything from the original
      // section.
      //
      // Then we replace its "items" with filtered items.
      .map((section) => ({

        // Copy the original section properties.
        //
        // Example:
        //
        // title: "Education"
        //
        ...section,


        // ---------------------------------------------------
        // FILTER ITEMS INSIDE THE SECTION
        // ---------------------------------------------------

        // section.items contains the individual links.
        //
        // .filter() keeps only the items that match
        // the user's search.
        items: section.items.filter((item) => (


          // -------------------------------------------------
          // CREATE SEARCHABLE TEXT
          // -------------------------------------------------

          // Combine the item name and section title.
          //
          // Example:
          //
          // item.name = "Nil2Academy"
          // section.title = "Education"
          //
          // Result:
          //
          // "Nil2Academy Education"
          //
          `${item.name} ${section.title}`


            // Convert everything to lowercase.
            //
            // This makes the search case-insensitive.
            //
            // "Academy"
            // "academy"
            // "ACADEMY"
            //
            // will all be treated similarly.
            .toLowerCase()


            // Check whether the searchable text contains
            // whatever the user typed.
            //
            // includes() returns:
            //
            // true  = match found
            // false = no match
            //
            .includes(
              exploreSearch.toLowerCase()
            )
        )),
      }))


      // -----------------------------------------------------
      // REMOVE EMPTY SECTIONS
      // -----------------------------------------------------

      // After filtering the items, some sections might
      // contain zero matching items.
      //
      // This removes those empty sections.
      //
      // Example:
      //
      // If the user searches "academy",
      //
      // Education → remains
      //
      // Products → removed
      // Media → removed
      // Software → removed
      //
      .filter(
        (section) => section.items.length > 0
      );


  // =========================================================
  // HANDLE EXPLORE LINK
  // =========================================================

  // This function runs when the user clicks an item
  // inside the Explore dropdown.
  //
  // "item" represents the clicked object.
  //
  // Example:
  //
  // {
  //   name: "Nil2Academy",
  //   path: "/academy"
  // }
  //
  const handleExploreClick = (item) => {


    // -------------------------------------------------------
    // CLOSE THE DROPDOWN
    // -------------------------------------------------------

    // After clicking an item, close Explore.
    setIsExploreOpen(false);


    // -------------------------------------------------------
    // CLEAR SEARCH
    // -------------------------------------------------------

    // Remove whatever the user typed.
    //
    // Example:
    //
    // "academy"
    //
    // becomes:
    //
    // ""
    //
    setExploreSearch("");


    // -------------------------------------------------------
    // CHECK WHETHER THE LINK IS EXTERNAL
    // -------------------------------------------------------

    // Some Explore links point to another website.
    //
    // Example:
    //
    // Nil2Go:
    //
    // https://boljames.github.io/CapitaScope/
    //
    // Those links have:
    //
    // external: true
    //
    if (item.external) {


      // Open the external website in a new browser tab.
      window.open(
        item.path,

        // "_blank" means open in a new tab/window.
        "_blank",

        // Security settings for the new window.
        //
        // noopener prevents the new page from accessing
        // the original window through window.opener.
        //
        // noreferrer prevents the browser from sending
        // referrer information.
        "noopener,noreferrer"
      );


      // Stop executing the function.
      //
      // We don't want navigate() below to run for an
      // external URL.
      return;
    }


    // -------------------------------------------------------
    // INTERNAL REACT ROUTE
    // -------------------------------------------------------

    // If the link is NOT external, use React Router.
    //
    // Example:
    //
    // navigate("/products")
    //
    // or:
    //
    // navigate("/academy")
    //
    navigate(item.path);
  };
  return (
    <nav
      className="
        relative
        z-50
        bg-[#04113a]
        shadow-lg
        shadow-slate-950/30
      "
    >

      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <div
        className="
          max-w-8xl
          mx-auto
          min-h-20
          px-3
          sm:px-5
          lg:px-6
          flex
          items-center
          gap-3
        "
      >

        {/* ===================================================
            SEARCHABLE EXPLORE
        ==================================================== */}

        <div
          ref={exploreRef}
          className="
            relative
            flex-shrink-0
            w-[130px]
            sm:w-[170px]
            lg:w-[190px]
          "
        >

          {/* Explore Input */}

          <div
            className="
              relative
              flex
              items-center
              rounded-xl
              border
              border-cyan-400/40
              bg-white/10
              backdrop-blur-md
              transition-all
              duration-200
              focus-within:border-cyan-300
              focus-within:bg-white/15
              focus-within:shadow-[0_0_20px_rgba(34,211,238,.15)]
            "
          >

        

            <input
              type="text"
              value={exploreSearch}
              onFocus={() =>
                setIsExploreOpen(true)
              }
              onChange={(e) => {
                setExploreSearch(e.target.value);
                setIsExploreOpen(true);
              }}
              placeholder="Explore..."
              className="
                w-full
                bg-transparent
                py-2.5
                pl-8
                pr-8
                text-xs
                sm:text-sm
                text-white
                placeholder:text-white/60
                outline-none
              "
            />

            <FaChevronDown
              className={`
                absolute
                right-3
                text-[10px]
                text-white/70
                transition-transform
                duration-200

                ${
                  isExploreOpen
                    ? "rotate-180"
                    : ""
                }
              `}
            />

          </div>

         {/* =========================================================
    EXPLORE DROPDOWN
    ---------------------------------------------------------
    This dropdown:
    - Opens when the Explore input is focused
    - Displays all Explore categories
    - Filters items when the user types
    - Can be scrolled using the mouse wheel
    - Has a visible scrollbar
========================================================= */}

<AnimatePresence>

  {isExploreOpen && (

    <motion.div

      
      initial={{
        opacity: 0,
        y: -8,
        scale: 0.98,
      }}

      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}

      exit={{
        opacity: 0,
        y: -8,
        scale: 0.98,
      }}

      transition={{
        duration: 0.2,
      }}

      

      onWheel={(e) => {
        e.stopPropagation();
      }}

      className="
        /* Position dropdown directly below Explore */
        absolute
        left-0
        top-full
        mt-2

        /* Dropdown width */
        w-[280px]
        sm:w-[330px]

        /* -------------------------------------------------
           HEIGHT

           This limits the dropdown height so that when the
           content becomes larger than this height, a vertical
           scrollbar automatically appears.
        ------------------------------------------------- */

        h-[80vh]
        max-h-[600px]

        /* -------------------------------------------------
           SCROLLING

           overflow-y-auto allows vertical scrolling.

           Users can:
           - Scroll with mouse wheel
           - Drag the scrollbar
           - Use keyboard scrolling
           - Use touchpad scrolling
        ------------------------------------------------- */

        overflow-y-auto
        overscroll-contain

        /* -------------------------------------------------
           VISIBLE SCROLLBAR

           IMPORTANT:
           Do NOT use:

           [scrollbar-width:none]
           [&::-webkit-scrollbar]:hidden

           because those hide the scrollbar.
        ------------------------------------------------- */

        scrollbar-thin
        scrollbar-thumb-cyan-400
        scrollbar-track-white/10

        /* Appearance */
        rounded-2xl
        border
        border-cyan-400/30

        bg-[#010535]/98
        backdrop-blur-xl

        shadow-[0_0_40px_rgba(59,130,246,.35)]

        p-4
        sm:p-5
      "
    >

      {/* =====================================================
          SEARCH STATUS
      ===================================================== */}

      {exploreSearch && (

        <div
          className="
            mb-4
            border-b
            border-white/10
            pb-3
            text-xs
            text-white/50
          "
        >

          Results for{" "}

          <span className="text-cyan-300">
            "{exploreSearch}"
          </span>

        </div>

      )}

      {/* =====================================================
          EXPLORE CATEGORIES
      ===================================================== */}

      <div className="flex flex-col gap-5">

        {filteredExploreItems.length > 0 ? (

          filteredExploreItems.map(
            (section) => (

              <div
                key={section.title}
              >

                {/* ---------------------------------------------
                    CATEGORY TITLE
                --------------------------------------------- */}

                <h3
                  className="
                    mb-2
                    text-xs
                    sm:text-sm
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#FBFC13]
                  "
                >
                  {section.title}
                </h3>

                {/* ---------------------------------------------
                    CATEGORY ITEMS
                --------------------------------------------- */}

                <div className="flex flex-col gap-1">

                  {section.items.map(
                    (item) => (

                      <button
                        key={item.name}

                        onClick={() =>
                          handleExploreClick(item)
                        }

                        className="
                          w-full
                          rounded-lg
                          px-3
                          py-2
                          text-left
                          text-sm
                          text-white/80

                          transition-all
                          duration-200

                          hover:bg-cyan-400/10
                          hover:text-cyan-300
                          hover:translate-x-1
                        "
                      >
                        {item.name}
                      </button>

                    )
                  )}

                </div>

              </div>

            )
          )

        ) : (

          /* ===================================================
             NO SEARCH RESULTS
          ==================================================== */

          <div
            className="
              py-6
              text-center
              text-sm
              text-white/50
            "
          >
            No results found.
          </div>

        )}

      </div>

    </motion.div>

  )}

</AnimatePresence>
        </div>

        {/* =====================================================
            LOGO
        ====================================================== */}

        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* =====================================================
            DESKTOP SEARCH
        ====================================================== */}

      <div
  className="
    hidden
    lg:flex
    flex-1
    min-w-0
    px-4
    xl:px-8
  "
>
  <div className="w-full max-w-5xl">
    <SearchBar />
  </div>
</div>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <ul
          className="
            hidden
            lg:flex
            items-center
            gap-6
            ml-auto
          "
        >
          {navLinks.map((link) => (
            <NavLinkItem
              key={link.name}
              link={link}
            />
          ))}
        </ul>

        {/* =====================================================
            DESKTOP CART
        ====================================================== */}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            navigate("/products/cart")
          }
          className="
            relative
            hidden
            lg:inline-flex
            items-center
            justify-center
            text-white
            text-2xl
            hover:text-cyan-300
            transition-colors
            ml-3
          "
        >
          <FaShoppingCart />

          {itemCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="
                absolute
                -top-2
                -right-2
                w-6
                h-6
                rounded-full
                bg-gradient-to-r
                from-[#FBFC13]
                to-yellow-500
                text-black
                font-bold
                text-xs
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              {itemCount > 99
                ? "99+"
                : itemCount}
            </motion.span>
          )}
        </motion.button>

        <div className="hidden lg:block">
          <AccountMenu />
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        <button
          onClick={() =>
            setIsOpen(!isOpen)
          }
          className="
            lg:hidden
            ml-auto
            flex-shrink-0
            rounded-lg
            p-2
            text-xl
            text-white
            transition
            hover:bg-white/10
            hover:text-[#FBFC13]
          "
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>

        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              lg:hidden
              border-t
              border-white/10
              bg-[#04113a]
            "
          >

            <div className="p-5">

              {/* Mobile Search */}

              <SearchBar />

              {/* Mobile Navigation */}

              <ul
                className="
                  flex
                  flex-col
                  mt-7
                  gap-5
                "
              >
                {navLinks.map(
                  (link) => (
                    <NavLinkItem
                      key={link.name}
                      link={link}
                    />
                  )
                )}
              </ul>

              {/* Mobile Cart */}

              <div className="mt-6">

                <motion.button
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() => {
                    navigate(
                      "/products/cart"
                    );
                    setIsOpen(false);
                  }}
                  className="
                    relative
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-cyan-400/30
                    bg-cyan-500/10
                    py-3
                    font-semibold
                    text-cyan-300
                  "
                >
                  <FaShoppingCart />

                  Cart

                  {itemCount > 0 && (
                    <span
                      className="
                        w-5
                        h-5
                        rounded-full
                        bg-gradient-to-r
                        from-[#FBFC13]
                        to-yellow-500
                        text-black
                        text-xs
                        font-bold
                        flex
                        items-center
                        justify-center
                      "
                    >
                      {itemCount}
                    </span>
                  )}

                </motion.button>

              </div>

              <div className="mt-4 flex justify-end">
                <AccountMenu onNavigate={() => setIsOpen(false)} />
              </div>

            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </nav>
  );
}

export default NavBar;