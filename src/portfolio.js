/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loader"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Zp1k_e",
  title: "Hi there! I'm Michel",
  subTitle: emoji(
    "I'm a Software Developer with a decade’s experience in building web and mobile applications. I am always interested in devising a better problem‐solving method for challenging tasks and learning new technologies and tools."
  ),
  resumeLink: true, // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/zp1ke",
  linkedin: "https://www.linkedin.com/in/zp1ke",
  leetcode: "https://leetcode.com/zp1ke",
  googledev: "https://g.dev/zp1ke",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: emoji("FULL STACK DEVELOPER 👨‍💻 WHO ENJOYS WORKING WITH (almost?) ALL TECH STACKS (in no particular order)"),
  skills: [
    emoji("📡🙌 Analytical Thinking, Team Player, Problem Solving"),
    emoji("🌐💻 Adaptability, Critical thinking, Communication, Self‑Motivation."),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      iconClassname: "nf nf-dev-java",
    },
    {
      skillName: "JavaScript",
      iconClassname: "nf nf-dev-javascript"
    },
    {
      skillName: "Dart",
      iconClassname: "nf nf-seti-dart"
    },
    {
      skillName: "html-5",
      iconClassname: "nf nf-dev-html5"
    },
    {
      skillName: "css3",
      iconClassname: "nf nf-dev-css3"
    },
    {
      skillName: "reactjs",
      iconClassname: "nf nf-dev-react"
    },
    {
      skillName: "android",
      iconClassname: "nf nf-dev-android"
    },
    {
      skillName: "springboot",
      iconClassname: "nf nf-seti-spring"
    },
    // {
    //   skillName: "flutter",
    //   iconClassname: "fab fa-flutter"
    // },
    {
      skillName: "docker",
      iconClassname: "nf nf-seti-docker"
    },
    {
      skillName: "mysql",
      iconClassname: "nf nf-dev-mysql"
    },
    {
      skillName: "postgresql",
      iconClassname: "nf nf-dev-postgresql"
    },
    {
      skillName: "mongodb",
      iconClassname: "nf nf-dev-mongodb"
    },
    {
      skillName: "kotlin",
      iconClassname: "nf nf-seti-kotlin"
    },
    {
      skillName: "maven",
      iconClassname: "nf nf-seti-maven"
    },
    {
      skillName: "gradle",
      iconClassname: "nf nf-seti-gradle"
    },
    {
      skillName: "git",
      iconClassname: "nf nf-dev-git"
    },
    {
      skillName: "aws",
      iconClassname: "nf nf-fa-aws"
    },
    {
      skillName: "firebase",
      iconClassname: "nf nf-md-firebase"
    },
    {
      skillName: "swift",
      iconClassname: "nf nf-dev-swift"
    },
    {
      skillName: "PHP",
      iconClassname: "nf nf-dev-php"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UCI (University of Computer Sciences)",
      logo: require("./assets/images/uciLogo.jpeg"),
      subHeader: "ENGiNEERiNG iN COMPUTER SCiENCE",
      duration: "September 2008 - March 2014",
      desc: "Havana, Cuba. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "CUJAE (Technological University of Havana)",
      logo: require("./assets/images/cujaeLogo.jpg"),
      subHeader: "MECHANiCAL ENGiNEERiNG",
      duration: "September 2000 - July 2005",
      desc: "Havana, Cuba. Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer & CTO",
      company: "Touwolf Technologies",
      companylogo: require("./assets/images/eqonLogo.jpeg"),
      rgbColor: [14, 118, 168], //"#0e76a8",
      date: "April 2014 – Present",
      desc: "Led the development of SaaS platforms, mobile and web apps that provided services automation, reduced costs and increased productivity.",
      descBullets: [
        "Design and deploy database infrastructures using MySQL",
        "Design, develop and deploy server backends and APIs using Java(SpringBoot) and NodeJS",
        "Design, develop and deploy mobile apps for Desktop, Android and iOS using Dart(Flutter)",
        "Integrate external payment gateways for online payments (Stripe, Braintree, EBanx, PayPal, Datafast, Payphone, Paymentez)",
        "Integrate AWS services to handle emails, storage, face recognition (s3, SNS, SES, rekognition)",
        "Develop WooCommerce plugins (PHP) to integrate company services (SRI Invoicing) and payment services (Datafast)"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
