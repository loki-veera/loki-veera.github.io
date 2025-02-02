export const bio = [
  "Hi! I'm Federico, a 27-year-old PhD candidate at the Computer Vision Group of \
  <a href=\"https://pages.iai.uni-bonn.de/gall_juergen/\">Prof. Gall</a> at the University of Bonn. \
  I'm passionate about technology and progress, with a strong interest in Artificial Intelligence, particularly its application to <b>Computer Vision</b> tasks.\
  Currently, my research focuses on <b>video understanding</b>, with an emphasis on <b>action segmentation</b>. \
  I'm also collaborating with neuroscientists from the <a href=\"https://ibehave.nrw/\">iBehave network</a>, where I work alongside brilliant researchers such as \
  <a href=\"https://ibehave.nrw/our-team/bach-group/\">Prof. Bach</a>, <a href=\"https://ibehave.nrw/our-team/group-musall/\">Prof. Musall</a> \
  and <a href=\"https://ibehave.nrw/our-team/kruger-group/\">Prof. Krüger</a>.",
  "I started approaching the tech world in my childhood, with my family's Windows 95 PC.\
  Since I didn't own a gaming console, I started tinkering with the computer to make every game work.",
  "Outside of programming, I love music - I used to play saxophone and clarinet for many years - and playing Volleyball. \
  I've played at a competitive level, and I was a proud team captain for three years.",
];

export const skills = [
  {
    title: "Main Languages",
    skillName: "Computer Vision, Deep Learning, Pytorch",
    color: "1",
    percentage: "90",
  },
  {
    title: "Main Languages",
    skillName: "Java, C#, C, JavaScript",
    color: "6",
    percentage: "75",
  },
  {
    title: "Video Editing",
    skillName: "Photoshop, After Effects, VEGAS",
    color: "2",
    percentage: "50",
  },
  {
    title: "Version Control",
    skillName: "C++, CSS, SQL, Scala, Z3, MiniZinc",
    color: "4",
    percentage: "40",
  },
  {
    title: "Average knownledge",
    skillName: "Java Servlet, JSP, Xamarine",
    color: "5",
    percentage: "60",
  },  
  
//   {
//     title: "Analytics",
//     skillName: "CleverTap, Countly",
//     color: "5",
//     percentage: "50",
//   },
//   {
//     title: "IDE",
//     skillName: "VS Code",
//     color: "6",
//     percentage: "70",
//   },
];

export const pubblications = [
  {
    image: "images/Teaser.jpg",
    title : "Hierarchical Vector Quantization for Unsupervised Action Segmentation",
    content: "In this work, we address unsupervised temporal action segmentation, \
    which segments a set of long, untrimmed videos into semantically meaningful segments \
    that are consistent across videos. While recent approaches combine representation learning \
    and clustering in a single step for this task, they do not cope with large variations \
    within temporal segments of the same class. To address this limitation, we propose a novel method,\
    termed Hierarchical Vector Quantization (HVQ), that consists of two subsequent vector quantization modules.\
    This results in a hierarchical clustering where the additional subclusters cover the variations within a cluster. \
    We demonstrate that our approach captures the distribution of segment lengths much better than the state of the art. \
    To this end, we introduce a new metric based on the Jensen-Shannon Distance (JSD) for unsupervised temporal action segmentation. \
    We evaluate our approach on three public datasets, namely Breakfast, YouTube Instructional and IKEA ASM. \
    Our approach outperforms the state of the art in terms of F1 score, recall and JSD.",
    link: "https://arxiv.org/abs/2412.17640v1",
    pubDate: "To be published in AAAI2025",
    categories: ["AAAI25", "Temporal Action Segmentation", "Unsupervised Learning",
      "Vector Quantization"
    ],
  }
];

export const projects = {
  publicationProjects: [
    {
      projectName: "Hierarchical Vector Quantization for Unsupervised Action Segmentation",
      image: "images/Teaser.jpg",
      summary:
        "Official implementation of the paper: \
        'Hierarchical Vector Quantization for Unsupervised Action Segmentation'.\
        The network tackles the problem of unsupervised action segmentation, \
        using a hierarchical stack of vector quantization modules, that leverage the natural compositionality of actions ",
      preview: "https://github.com/FedeSpu/HVQ",
      techStack: ["Action Segmentation", "Unsupervised Learning", "Deep Learning", "Pytorch"],
    }
  ],
  nlpProjects: [
    {
      projectName: "Chatbot with Argumentation Mining",
      image: "images/chatbot.png",
      summary:
        "The project exploits techniques of argumentation mining\
        and reinforcement learning to present a chatbot that, given an argumentative\
        sentence as input, produce a list of related evidences in output.",
      preview: "https://github.com/FedeSpu/argumentative-chatbot",
      techStack: ["NLP", "Chatbot", "Argumentation Mining", "Reinforcement Learning"],
    },
    // {
    //   projectName: "Part-of-speech (POS) tagging",
    //   image: "images/github-logo.png",
    //   summary:
    //     "Use recurrent neural architectures (RNN like Bi-LSTM, Bi-GRU,...) to accomplish the post tagging on a corpus.",
    //   preview: "https://github.com/FedeSpu/POS-tagging",
    //   techStack: ["Dailogflow", "Firebase"],
    // },
    // {
    //   projectName: "Fact checking",
    //   image: "images/github-logo.png",
    //   summary:
    //     "Use a neural network with different sentence embedding strategies (bag of vector, last state of a RNN...) and different merging strategies\
    //     (concatenation, sum and mean), to determine whether a given statement (fact)\
    //     conveys a trustworthy information or not.",
    //   preview: "https://github.com/FedeSpu/fact-checking",
    //   techStack: ["Selenium", "Chrome Webdriver", "Python"],
    // },
    {
      projectName: "Dante Syllabification",
      image: "images/dante.jpg",
      summary:
        "Given poetic verses, the network produces the syllabification of the input. \
        It's also able to generate verses in Dante style, by making use of Transformers.",
      preview: "https://github.com/FedeSpu/DanteSyllabification",
      techStack: ["Transformer", "TensorFlow", "Python"],
    },
  ],
  cdmoProjects: [
    {
      projectName: "Modelling and solving the VLSI problem",
      image: "images/vlsi.JPG",
      summary:
        "Solve the VLSI problem, minimizing the height of a given silicon chip \
        with fixed width and given the number and \
        the sizes of the components to integrate. The problem is solved with MiniZinc\
        SAT solver and SMT",
      preview: "https://github.com/FedeSpu/VLSI",
      techStack: ["VLSI", "MiniZinc", "SAT", "SMT", "CDMO"],
    },
    {
      projectName: "Neutrino Oscillations",
      image: "images/neutrino.png",
      summary:
        "This project aims to reproduce, in a simplified manner, the data underlying the discovery of \
        neutrino oscillation. Neutrino oscillation is the phenomenon where neutrinos change their flavor as they propagate through space. \
        By analyzing and minimizing the oscillation probability, it was determined that a certain fraction of μ (mu) neutrinos \
        transform into τ (tau) neutrinos. This project models this phenomenon by minimizing the oscillation probability function \
        using variations of gradient descent algorithms",
      preview: "",
      techStack: ["SGD", "CDMO", "Neutrinos", "Physics"],
    },
  ],
  challengesProjects: [
    {
      projectName: "Tablut challenge",
      image: "images/tablut.jpg",
      summary:
        "The 'Tablut Challenge' is a challenge held in University of \
        Bologna. The goal is to developed an Artificial Intelligence able to play the\
        game of Tablut, an ancient board game, and win against the other teams. My\
        team ended in second place. We based our work on the Game Theory and\
        used the 'Min-Max algorithm' with alpha-beta cuts. Most of the work was\
        addressed on how to compute the heuristic to associate to each state of the game.",
      preview: "https://github.com/FedeSpu/TablutCompetition",
      techStack: ["Game Theory", "Min-Max Algorithm", "Heuristic"],
    },
  ],
};

export const experience = [
  {
    title: "R&D Machine Vision Intern (DataLogic S.p.A.)",
    duration: "May 2022 - July 2022",
    subtitle: "Software Engineer",
    details: ["Detect anomalies of packages on cross-belt conveyor, developing a deep learning vision architecture for template matching"],
    tags: ["Python", "Pytorch", "Deep Learning", "Template Matching", "Team Working"],
    icon: "cogs ",
  },
  {
    title: "Trainee Computer Engineer (MeXage S.r.l.)",
    duration: "December 2019 - May 2020",
    subtitle: "Software Engineer",
    details: [
      "Design and development of a desktop CAD application, using mainly C# as programming language and Xamarin as Framework. The application is built following the principles of MVVM pattern."
    ],
    tags: ["C#", "Xamarin", "MVVM", "Team Working"],
    icon: "desktop",
  },
];

export const education = [
  {
    title: "PhD at Computer Vision Group",
    duration: "2023-on going",
    subtitle: "University of Bonn, Germany",
    details: ["Thopic: Video action and human behaviour segmentation applied to Neuroscience, under supervision of Prof. Jürgen Gall"],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "M.Sc. in Artificial Intelligence (110/110 Cum Laude)",
    duration: "2020-2022",
    subtitle: "University of Bologna, Italy",
    details: ["Thesis: Convolutional Neural Network Approaches for Template Matching, under supervision of Prof. Samuele Salti"],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "B.Sc. in Computer Engineering (110/110 Cum Laude)",
    duration: "2017 - 2020",
    subtitle: "University of Bologna, Italy",
    details: ["Thesis: Sviluppo di un chatbot in linguaggio Python con l'integrazione di Argumentation Mining, under supervision of Prof. Paolo Torroni"],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  // {
  //   title: "Class 12th in Science and Mathematics",
  //   duration: "",
  //   subtitle: "Board of Secondary Education, Rajasthan",
  //   details: [],
  //   tags: ["Physics", "Chemistry", "Mathematics"],
  //   icon: "book",
  // },
];

export const footer = [
  // {
  //   label: "Dev Profiles",
  //   data: [
  //     {
  //       text: "GitHub",
  //       link: "https://github.com/FedeSpu",
  //     },
  //   ],
  // },
  {
    label: "Resources",
    data: [
      {
        text: "Enable Dark/Light Mode",
        func: "enableDarkMode()",
      },
      {
        text: "Print this page",
        func: "window.print()",
      },
    ],
  },
  {
    label: "Links",
    data: [
      {
        text: "Linkedin",
        link: "https://www.linkedin.com/in/federico-spurio-3a929b195/",
      },
      {
        text: "Google Scholar",
        link: "https://scholar.google.com/citations?user=PVmuamwAAAAJ&hl=en",
      },
      {
        text: "Github",
        link: "https://github.com/FedeSpu",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Template inspired from <a href=\"https://vinaysomawat.github.io/\">Vinay Somawat</a>."
    ],
  },
];
