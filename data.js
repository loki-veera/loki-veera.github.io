export const bio = [
  "I am Lokesh Veeramacheneni a PhD student supported by <a href=\"https://www.dice.uni-bonn.de/hpca/de\">HPC/A Lab</a> advised by <a href=\"https://pages.iai.uni-bonn.de/gall_juergen/\">Prof. Juergen Gall</a> at University of Bonn. My broader area of reserach is deep learning for computer vision. Particularly, I enjoy working with Diffusion models and efficient training of deep neural networks. I collaborate with distinguished researchers such as <a href=\"https://hildekuehne.github.io/\">Prof. Hilde Kuehne</a> and <a href=\"https://wolter.tech\">Dr. Moritz Wolter</a>. Prior to my PhD, I worked as a Junior developer at RE: GmbH and I got my M.Sc in Autonomous Systems at Hochschule Bonn-Rhein-Sieg."
];

// export const skills = [
//   {
//     title: "Main Languages",
//     skillName: "Computer Vision, Deep Learning, Pytorch",
//     color: "1",
//     percentage: "90",
//   },
//   {
//     title: "Main Languages",
//     skillName: "Java, C#, C, JavaScript",
//     color: "6",
//     percentage: "75",
//   },
//   {
//     title: "Video Editing",
//     skillName: "Photoshop, After Effects, VEGAS",
//     color: "2",
//     percentage: "50",
//   },
//   {
//     title: "Version Control",
//     skillName: "C++, CSS, SQL, Scala, Z3, MiniZinc",
//     color: "4",
//     percentage: "40",
//   },
//   {
//     title: "Average knownledge",
//     skillName: "Java Servlet, JSP, Xamarine",
//     color: "5",
//     percentage: "60",
//   },  
// 
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
// ];

export const publications = [
  {
    image: "images/fwd.jpg",
    title : "FRÉCHET WAVELET DISTANCE: A DOMAIN-AGNOSTIC METRIC FOR IMAGE GENERATION",
    content: "Modern metrics for generative learning like Fréchet Inception Distance (FID) and DINOv2-Fréchet Distance (FD-DINOv2) demonstrate impressive performance. However, they suffer from various shortcomings, like a bias towards specific generators and datasets. To address this problem, we propose the Fréchet Wavelet Distance (FWD) as a domain-agnostic metric based on the Wavelet Packet Transform (WPT). FWD provides a sight across a broad spectrum of frequencies in images with a high resolution, preserving both spatial and textural aspects.Specifically, we use WPT to project generated and real images to the packet coefficient space. We then compute the Fréchet distance with the resultant coefficients to evaluate the quality of a generator. This metric is general-purpose and dataset-domain agnostic, as it does not rely on any pre-trained network while being more interpretable due to its ability to compute Fréchet distance per packet, enhancing transparency. We conclude with an extensive evaluation of a wide variety of generators across various datasets that the proposed FWD can generalize and improve robustness to domain shifts and various corruptions compared to other metrics.",
    link: "https://lokiv.dev/frechet_wavelet_distance/",
    pubDate: "To be published in ICLR2025",
    categories: ["ICLR25", "FWD", "FID", "Diffusion", "Image Generation"],
  },
  {
    image: "image/OOD.png",
    title: "A Benchmark for Out of Distribution Detection in Point Cloud 3D Semantic Segmentation",
    content: "Safety-critical applications like autonomous driving use Deep Neural Networks (DNNs) for object detection and segmentation. The DNNs fail to predict when they observe an Out-of-Distribution (OOD) input leading to catastrophic consequences. Existing OOD detection methods were extensively studied for image inputs but have not been explored much for LiDAR inputs. So in this study, we proposed two datasets for benchmarking OOD detection in 3D semantic segmentation. We used Maximum Softmax Probability and Entropy scores generated using Deep Ensembles and Flipout versions of RandLA-Net as OOD scores. We observed that Deep Ensembles out perform Flipout model in OOD detection with greater AUROC scores for both datasets.",
    link: "https://arxiv.org/pdf/2211.06241",
    pubDate: "NeurIPS 2022 Workshop on Robot Learning: Trustworthy Robotics",
    categories: ["NeurIPS22", "3D Semantic Segmentation", "OOD Detection"],
  },
  {
    image: "image/ccn.png",
    title: "Canonical Convolutional Neural Networks",
    content: "We introduce canonical weight normalization for convolutional neural networks. Inspired by the canonical tensor decomposition, we express the weight tensors in so-called canonical networks as scaled sums of outer vector products. In particular, we train network weights in the decomposed form, where scale weights are optimized separately for each mode. Additionally, similarly to weight normalization, we include a global scaling parameter. We study the initialization of the canonical form by running the power method and by drawing randomly from Gaussian or uniform distributions. Our results indicate that we can replace the power method with cheaper initializations drawn from standard distributions. The canonical re-parametrization leads to competitive normalization performance on the MNIST, CIFAR10, and SVHN data sets. Moreover, the formulation simplifies network compression. Once training has converged, the canonical form allows convenient model-compression by truncating the parameter sums.",
    link: "https://arxiv.org/pdf/2206.01509",
    pubDate: "IJCNN 2022",
    categories: ["IJCNN22", "CNN", "CP Decomposition", "CANDECOMP/PARAFAC"],
  }
];

// export const projects = {
//   publicationProjects: [
//     {
//       projectName: "Hierarchical Vector Quantization for Unsupervised Action Segmentation",
//       image: "images/Teaser.jpg",
//       summary:
//         "Official implementation of the paper: \
//         'Hierarchical Vector Quantization for Unsupervised Action Segmentation'.\
//         The network tackles the problem of unsupervised action segmentation, \
//         using a hierarchical stack of vector quantization modules, that leverage the natural compositionality of actions ",
//       preview: "https://github.com/FedeSpu/HVQ",
//       techStack: ["Action Segmentation", "Unsupervised Learning", "Deep Learning", "Pytorch"],
//     }
//   ],
//   nlpProjects: [
//     {
//       projectName: "Chatbot with Argumentation Mining",
//       image: "images/chatbot.png",
//       summary:
//         "The project exploits techniques of argumentation mining\
//         and reinforcement learning to present a chatbot that, given an argumentative\
//         sentence as input, produce a list of related evidences in output.",
//       preview: "https://github.com/FedeSpu/argumentative-chatbot",
//       techStack: ["NLP", "Chatbot", "Argumentation Mining", "Reinforcement Learning"],
//     },
//     // {
//     //   projectName: "Part-of-speech (POS) tagging",
//     //   image: "images/github-logo.png",
//     //   summary:
//     //     "Use recurrent neural architectures (RNN like Bi-LSTM, Bi-GRU,...) to accomplish the post tagging on a corpus.",
//     //   preview: "https://github.com/FedeSpu/POS-tagging",
//     //   techStack: ["Dailogflow", "Firebase"],
//     // },
//     // {
//     //   projectName: "Fact checking",
//     //   image: "images/github-logo.png",
//     //   summary:
//     //     "Use a neural network with different sentence embedding strategies (bag of vector, last state of a RNN...) and different merging strategies\
//     //     (concatenation, sum and mean), to determine whether a given statement (fact)\
//     //     conveys a trustworthy information or not.",
//     //   preview: "https://github.com/FedeSpu/fact-checking",
//     //   techStack: ["Selenium", "Chrome Webdriver", "Python"],
//     // },
//     {
//       projectName: "Dante Syllabification",
//       image: "images/dante.jpg",
//       summary:
//         "Given poetic verses, the network produces the syllabification of the input. \
//         It's also able to generate verses in Dante style, by making use of Transformers.",
//       preview: "https://github.com/FedeSpu/DanteSyllabification",
//       techStack: ["Transformer", "TensorFlow", "Python"],
//     },
//   ],
//   cdmoProjects: [
//     {
//       projectName: "Modelling and solving the VLSI problem",
//       image: "images/vlsi.JPG",
//       summary:
//         "Solve the VLSI problem, minimizing the height of a given silicon chip \
//         with fixed width and given the number and \
//         the sizes of the components to integrate. The problem is solved with MiniZinc\
//         SAT solver and SMT",
//       preview: "https://github.com/FedeSpu/VLSI",
//       techStack: ["VLSI", "MiniZinc", "SAT", "SMT", "CDMO"],
//     },
//     {
//       projectName: "Neutrino Oscillations",
//       image: "images/neutrino.png",
//       summary:
//         "This project aims to reproduce, in a simplified manner, the data underlying the discovery of \
//         neutrino oscillation. Neutrino oscillation is the phenomenon where neutrinos change their flavor as they propagate through space. \
//         By analyzing and minimizing the oscillation probability, it was determined that a certain fraction of μ (mu) neutrinos \
//         transform into τ (tau) neutrinos. This project models this phenomenon by minimizing the oscillation probability function \
//         using variations of gradient descent algorithms",
//       preview: "",
//       techStack: ["SGD", "CDMO", "Neutrinos", "Physics"],
//     },
//   ],
//   challengesProjects: [
//     {
//       projectName: "Tablut challenge",
//       image: "images/tablut.jpg",
//       summary:
//         "The 'Tablut Challenge' is a challenge held in University of \
//         Bologna. The goal is to developed an Artificial Intelligence able to play the\
//         game of Tablut, an ancient board game, and win against the other teams. My\
//         team ended in second place. We based our work on the Game Theory and\
//         used the 'Min-Max algorithm' with alpha-beta cuts. Most of the work was\
//         addressed on how to compute the heuristic to associate to each state of the game.",
//       preview: "https://github.com/FedeSpu/TablutCompetition",
//       techStack: ["Game Theory", "Min-Max Algorithm", "Heuristic"],
//     },
//   ],
// };

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
