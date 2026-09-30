// ============================================================
// IMPORTS
// ============================================================

import { motion } from "framer-motion"; 
// Imports Framer Motion's motion component.
// It allows us to animate normal HTML elements such as div, h1, p, button, etc.

import { FaArrowRight, FaPlayCircle } from "react-icons/fa";
// Imports two Font Awesome icons:
// FaArrowRight -> arrow icon for the "Getting Started" button.
// FaPlayCircle -> play icon for the "Watch Demo" button.

import heroImage from "../assets/office.png";
// Imports the Hero image from the assets folder.
// Vite will process this image and provide its correct URL.

import { FaRocket } from "react-icons/fa";
// Imports the rocket icon used in the flying rocket animation.

import { useNavigate } from "react-router-dom";
// ============================================================
// HERO COMPONENT
// ============================================================

const Hero = () => {
// Creates a React functional component called Hero.
// Everything returned from this function becomes the Hero section.
 const navigate = useNavigate();

  return (
  // return() tells React what should appear on the screen.


    // ========================================================
    // HERO SECTION CONTAINER
    // ========================================================


    <motion.section
      className="
        relative
        sm: w-auto
        overflow-hidden
        border
        border-cyan-400/30
        bg-[#010535]/40
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(59,130,246,.4)]
        transition-all
        duration-500

        hover:shadow-[0_0_50px_rgba(251,252,19,.5)]
        pt-20
        pb-24
      "
    >
    {/* 
      relative -> allows absolutely positioned elements inside this section.
      overflow-hidden -> prevents animations from escaping the section.
      rounded-[24px] -> gives the section rounded corners.
      border -> adds a border.
      border-cyan-400/30 -> cyan border with 30% opacity.
      bg-[#010535]/40 -> dark NilNovaz blue background with 40% opacity.
      backdrop-blur-xl -> blurs whatever is behind the section.
      shadow -> creates a blue glowing shadow.
      transition-all -> smoothly animates property changes.
      duration-500 -> makes transitions last 500 milliseconds.
      hover:border -> changes the border color when the mouse enters.
      hover:shadow -> increases the glow when hovered.
      pt-20 -> adds padding to the top.
      pb-24 -> adds padding to the bottom.
    */}


      {/* ======================================================
          HERO HEADING AREA
          ====================================================== */}
<div className="max-w-[1600px] mx-auto px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        // Initial state:
        // opacity 0 -> invisible.
        // y -80 -> positioned 80px above its normal position.

        animate={{ opacity: 1, y: 0 }}
        // Final state:
        // opacity 1 -> completely visible.
        // y 0 -> returns to its normal position.

        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        // Animation lasts 1 second.
        // The custom easing curve makes the movement feel smooth.

        className="relative text-center mb-20"
        // relative -> allows the rocket to be positioned relative to this container.
        // text-center -> centers the text.
        // mb-20 -> creates space below the heading area.
      >

        {/* ====================================================
            FLYING ROCKET
            ==================================================== */}

        <motion.div
          initial={{
            x: -500,// The rocket starts 500px to the left.
            y: 250,// The rocket starts 250px downward.
            rotate: -40,// The rocket starts rotated -40 degrees.
            opacity: 0,// The rocket starts completely invisible.
          }}
          
          animate={{
            x: 900,// The rocket moves 900px to the right.
            y: -250,// The rocket moves 250px upward.
            rotate: 20,// The rocket rotates to 20 degrees.
            opacity: [0, 1, 1, 0],// The rocket fades in, stays visible, then fades out.
          }}
        

          transition={{
            duration: 5,// The rocket takes 5 seconds to cross the screen.
            ease: "easeInOut",// easeInOut makes the movement smoother.
            repeat: Infinity,// repeat: Infinity makes the animation repeat forever.
            repeatDelay: 3,// repeatDelay: 3 adds a 3-second pause before launching again.
          }}
          
          className="absolute left-0 top-10 text-[#FBFC13] text-5xl z-20"
          // absolute -> allows the rocket to move freely.
          // left-0 -> starts at the left side.
          // top-10 -> places it near the top.
          // text-[#FBFC13] -> NilNovaz yellow color.
          // text-5xl -> makes the rocket large.
          // z-20 -> places it above other elements.
        >
          <FaRocket />
          {/* Displays the rocket icon. */}
        </motion.div>


        {/* ====================================================
            COMPANY NAME
            ==================================================== */}

        <motion.h1
          animate={{
            y: [0, -8, 0],
          }}
          // Continuously moves the company name:
          // normal position -> 8px upward -> normal position.

          transition={{
            duration: 4, // Takes 4 seconds for one floating cycle.
            repeat: Infinity,// Repeats forever.
            ease: "easeInOut",// easeInOut makes the floating motion smooth.
          }}
          style={{ color: "#010535" }}
          // Inline CSS setting the text color.
          // NOTE: "DarkBlue" is not a standard CSS color name.
          // Use "#010535" if you want the NilNovaz dark blue.

          className="
            text-3xl 
            font-extrabold
            tracking-wider
            bg-gradient-to-r
            from-cyan-400
            via-blue-500
            to-[#FBFC13]
            drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]
          "
          // text-5xl -> large text on small screens.
          // md:text-6xl -> larger text on medium screens.
          // lg:text-7xl -> very large text on large screens.
          // font-extrabold -> very thick font.
          // tracking-wider -> increases spacing between letters.
          // bg-gradient-to-r -> creates a left-to-right gradient.
          // from-cyan-400 -> gradient starts with cyan.
          // via-blue-500 -> blue appears in the middle.
          // to-[#FBFC13] -> gradient ends with NilNovaz yellow.
          // drop-shadow -> creates a blue glow around the heading.
        >
          NILNOVAZ TECHNOLOGIES
          {/* Displays the company name. */}
        </motion.h1>


        {/* ====================================================
            TAGLINE
            ==================================================== */}

        <motion.p
          animate={{
            opacity: [1, 0.6, 1],
          }}
          // Makes the tagline continuously fade slightly and return.

          transition={{
            duration: 2,  // One fade cycle takes 2 seconds.
            repeat: Infinity, // Repeats forever.
          }}
        
          style={{ color: "#FBFC13" }}
          // Sets the tagline color to NilNovaz yellow.

          className="mt-5 text-2xl lg:text-3xl font-extrabold"
          // mt-5 -> creates space above the tagline.
          // text-2xl -> large text on smaller screens.
          // lg:text-3xl -> even larger text on large screens.
          // font-extrabold -> makes the tagline bold.
        >
          From Zero to Stars
          {/* Displays the NilNovaz tagline. */}
        </motion.p>


        {/* ====================================================
            MAIN STATEMENT
            ==================================================== */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
            letterSpacing: "0.5em",
          }}
          // Initially:
          // invisible.
          // 40px below its normal position.
          // letters have very large spacing.

          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.05em",
          }}
          // Final state:
          // completely visible.
          // moves into its normal position.
          // letter spacing becomes normal.

          transition={{
            duration: 1.5,
            delay: 0.6,
          }}
          // Animation lasts 1.5 seconds.
          // Starts 0.6 seconds after the Hero heading animation.

          style={{ color: "red" }}
          // Makes this heading red.
          // Inline CSS is being used here intentionally.

          className="mt-8 text-2xl lg:text-4xl font-extrabold"
          // mt-8 -> adds space above the statement.
          // text-2xl -> large text on smaller screens.
          // lg:text-4xl -> larger text on large screens.
          // font-extrabold -> makes the statement very bold.
        >
          🚀 Empowering Africa Through Technology and Innovation
          {/* Main NilNovaz mission statement. */}
        </motion.h2>


        {/* ====================================================
            ANIMATED LINE
            ==================================================== */}

        <motion.div
          initial={{ width: 0 }}
          // Starts with zero width.

          animate={{ width: "260px" }}
          // Expands to 260px.

          transition={{
            duration: 1,
            delay: 1,
          }}
          // Takes 1 second to expand.
          // Starts after a 1-second delay.

          className="h-1 bg-[#FBFC13] rounded-full mx-auto mt-8"
          // h-1 -> makes the line 4px high.
          // bg-[#FBFC13] -> NilNovaz yellow.
          // rounded-full -> gives the line rounded ends.
          // mx-auto -> horizontally centers the line.
          // mt-8 -> adds space above the line.
        />

      </motion.div>


      {/* ======================================================
          MAIN HERO CONTENT
          ====================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full">
        {/*
          max-w-7xl -> limits the content width.
          mx-auto -> centers the content horizontally.
          px-6 -> horizontal padding on small screens.
          lg:px-16 -> larger horizontal padding on large screens.
          py-20 -> vertical spacing above and below.
          w-full -> uses the available width.
        */}


        {/* ====================================================
            TWO-COLUMN HERO LAYOUT
            ==================================================== */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/*
            grid -> creates a CSS Grid layout.
            lg:grid-cols-2 -> creates two columns on large screens.
            gap-14 -> creates space between the columns.
            items-center -> vertically centers both columns.
          */}


          {/* ==================================================
              LEFT CONTENT
              ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            // Starts invisible and 80px to the left.

            animate={{
              opacity: 1,
              x: 0,
            }}
            // Moves into normal position and becomes visible.

            transition={{
              duration: 0.8,
            }}
            // Animation takes 0.8 seconds.
          >


            <div className="flex flex-wrap gap-5 ">
              {/*
                flex -> creates a flexible layout.
                flex-wrap -> allows content to wrap if necessary.
                gap-5 -> adds spacing between children.
                mt-4 -> adds space above.
              */}


              <p className="text-xl font-extrabold leading-9 max-w-2xl">
                {/*
                  text-xl -> makes the paragraph large.
                  font-extrabold -> makes the text bold.
                  leading-9 -> increases line spacing.
                  max-w-2xl -> prevents the paragraph from becoming too wide.
                */}

                We transform businesses and empower the next generation of
                innovators through software development, AI-powered solutions,
                technology education, and digital innovation—ensuring that no
                talent is left behind.

                {/* Hero description. */}
              </p>

            </div>


            {/* ==================================================
                HERO BUTTONS
                ================================================== */}

            <div className="flex flex-wrap gap-5 mt-10">
              {/*
                flex -> places buttons horizontally.
                flex-wrap -> allows buttons to move to a new line on small screens.
                gap-5 -> creates space between buttons.
                mt-10 -> creates space above the buttons.
              */}


              {/* ==================================================
                  GETTING STARTED BUTTON
                  ================================================== */}

              <motion.button
              onClick={() => navigate("/register")}
                whileHover={{ scale: 1.05 }}
                // Makes the button 5% larger when hovered.

                whileTap={{ scale: 0.95 }}
                // Makes the button slightly smaller when clicked.

                className="
                  flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  bg-[#FBFC13]
                  text-black
                  font-bold
                  shadow-lg
                  hover:bg-yellow-300
                  transition
                "
                // flex -> places text and icon next to each other.
                // items-center -> vertically centers them.
                // gap-3 -> creates space between text and icon.
                // px-8 -> horizontal button padding.
                // py-4 -> vertical button padding.
                // rounded-xl -> rounded corners.
                // bg-[#FBFC13] -> NilNovaz yellow background.
                // text-black -> black text.
                // font-bold -> bold text.
                // shadow-lg -> large shadow.
                // hover:bg-yellow-300 -> lighter yellow when hovered.
                // transition -> smoothly animates the hover effect.
              >
                Getting Started
                {/* Button text. */}

                <FaArrowRight />
                {/* Arrow icon. */}
              </motion.button>


              {/* ==================================================
                  WATCH DEMO BUTTON
                  ================================================== */}

              <motion.button
              
                whileHover={{ scale: 1.05 }}
                // Enlarges the button slightly when hovered.

                whileTap={{ scale: 0.95 }}
                // Shrinks the button slightly when clicked.

                className="
                  flex
                  items-center
                  gap-3
                  px-8
                  py-4
                  rounded-xl
                  border
                  border-white/20
                  bg-white/5
                  backdrop-blur-lg
                  text-white
                  hover:border-blue-400
                  transition
                "
                // Creates a modern glass-style button.
              >
                <FaPlayCircle />
                {/* Play icon. */}

                Watch Demo
                {/* Button text. */}
              </motion.button>

            </div>

          </motion.div>


          {/* ==================================================
              RIGHT IMAGE
              ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            // Starts invisible and 80px to the right.

            animate={{
              opacity: 1,
              x: 0,
            }}
            // Moves into its normal position and becomes visible.

            transition={{
              duration: 0.8,
            }}
            // Image animation lasts 0.8 seconds.

            className="relative flex justify-center"
            // relative -> allows the glow to be positioned relative to this container.
            // flex -> creates a flexible layout.
            // justify-center -> centers the image horizontally.
          >

            {/* ==================================================
                HERO IMAGE
                ================================================== */}

            <motion.img
              src={heroImage}
              // Uses the office.png image imported at the top.

              alt="NilNovaz Technologies Team"
              // Alternative text for accessibility and SEO.

              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              // Image starts slightly smaller and invisible.

              animate={{
                scale: 1,
                opacity: 1,
              }}
              // Image grows to normal size and becomes visible.

              transition={{
                duration: 1,
                delay: 0.3,
              }}
              // Image animation takes 1 second and starts after 0.3 seconds.

              whileHover={{
                scale: 1.03,
              }}
              // Slightly enlarges the image when the user hovers over it.

              className="
                w-full
                max-w-2xl
                rounded-[30px]
                object-cover
                border
                border-blue-400/20
                shadow-2xl
                transition-all
                duration-500
                drop-shadow-[0_0_80px_rgba(59,130,246,.5)]
              "
              // w-full -> image uses available width.
              // max-w-2xl -> prevents it from becoming too large.
              // rounded-[30px] -> strongly rounded corners.
              // object-cover -> keeps image proportions while filling its box.
              // border -> adds a border.
              // border-blue-400/20 -> subtle blue border.
              // shadow-2xl -> large shadow.
              // transition-all -> smooth hover transitions.
              // duration-500 -> transition lasts 500ms.
              // drop-shadow -> creates a blue futuristic glow.
            />


            {/* ==================================================
                IMAGE GLOW
                ================================================== */}

            <div
              className="
                absolute
                -z-10
                w-[500px]
                h-[500px]
                bg-blue-600/20
                blur-[140px]
                rounded-full
              "
            >
              {/*
                absolute -> positions the glow freely.
                -z-10 -> places the glow behind the image.
                w-[500px] -> glow width.
                h-[500px] -> glow height.
                bg-blue-600/20 -> blue with 20% opacity.
                blur-[140px] -> creates a very soft glow.
                rounded-full -> makes the glow circular.
              */}
            </div>

          </motion.div>

        </div>

      </div>
</div>
    </motion.section>

    

  );
};


// ============================================================
// EXPORT
// ============================================================

export default Hero;
// Makes the Hero component available to other files,
// such as Home.jsx.

