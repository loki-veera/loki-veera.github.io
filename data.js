export const bio = [
  "I am Lokesh Veeramacheneni a PhD student supported by <a href=\"https://www.dice.uni-bonn.de/hpca/de\">HPC/A Lab</a> advised by <a href=\"https://pages.iai.uni-bonn.de/gall_juergen/\">Prof. Dr. Juergen Gall</a> at University of Bonn.\ My broader area of reserach is deep learning for computer vision.","Particularly, I enjoy working with Diffusion models and efficient training of deep neural networks. \ I collaborate with distinguished researchers such as <a href=\"https://hildekuehne.github.io/\">Prof. Dr. Hilde Kuehne</a> and <a href=\"https://wolter.tech\">Dr. Moritz Wolter</a>.","Prior to my PhD, I worked as a Junior software developer at RE: GmbH with focus in Ruby on Rails and I got my M.Sc in Autonomous Systems at Hochschule Bonn-Rhein-Sieg.",
];

export const skills = [
  {
    title: "Main Languages",
    skillName: "Computer Vision, Deep Learning, Pytorch, Python",
    color: "2",
    percentage: "90",
  },
  {
    title: "Main Languages",
    skillName: " C++, JavaScript, Ruby on Rails, JAX",
    color: "1",
    percentage: "60",
  },
  {
    title: "Version Control",
    skillName: "CSS, SQL",
    color: "4",
    percentage: "40",
  }
];

export const pubblications = [
  {
    image: "images/fwd.png",
    title : "Fréchet Wavelet Distance: A Domain-Agnostic Metric for Image Generation",
    content: "Modern metrics for generative learning like Fréchet Inception Distance (FID ) and DINOv2-Fréchet Distance (FD-DINOv2 ) demonstrate impressive performance. However, they suffer from various shortcomings, like a bias towards specific generators and datasets. To address this problem, we propose the Fréchet Wavelet Distance (FWD ) as a domain-agnostic metric based on the Wavelet Packet Transform (WPT).  FWD provides a sight across a broad spectrum of frequencies in images with a high resolution, preserving both spatial and textural aspects. Specifically, we use WPT to project generated and real images to the packet coefficient space. We then compute the Fréchet distance with the resultant coefficients to evaluate the quality of a generator. This metric is general-purpose and dataset-domain agnostic, as it does not rely on any pre-trained network while being more interpretable due to its ability to compute Fréchet distance per packet, enhancing transparency. We conclude with an extensive evaluation of a wide variety of generators across various datasets that the proposed FWD can generalize and improve robustness to domain shifts and various corruptions compared to other metrics.",
    link: "https://arxiv.org/pdf/2312.15289",
    pubDate: "To be published in ICLR2025",
    categories: ["ICLR25", "FWD", "FID", "Diffusion", "Image Generation", "FD-DINOv2"
    ],
  },
  {
    image: "images/OOD.png",
    title : "A Benchmark for Out of Distribution Detection in Point Cloud 3D Semantic Segmentation",
    content: "Safety-critical applications like autonomous driving use Deep Neural Networks (DNNs) for object detection and segmentation. The DNNs fail to predict when they observe an Out-of-Distribution (OOD) input leading to catastrophic consequences. Existing OOD detection methods were extensively studied for image inputs but have not been explored much for LiDAR inputs. So in this study, we proposed two datasets for benchmarking OOD detection in 3D semantic segmentation. We used Maximum Softmax Probability and Entropy scores generated using Deep Ensembles and Flipout versions of RandLA-Net as OOD scores. We observed that Deep Ensembles out perform Flipout model in OOD detection with greater AUROC scores for both datasets.",
    link: "https://arxiv.org/pdf/2211.06241",
    pubDate: "NeurIPS 2022 Workshop on Robot Learning: Trustworthy Robotics",
    categories: ["NeurIPS22", "3D Semantic Segmentation", "OOD", "RandLA-Net"
    ],
  },
  {
    image: "images/ccn.png",
    title : "Canonical convolutional Neural Networks",
    content: "We introduce canonical weight normalization for convolutional neural networks. Inspired by the canonical tensor decomposition, we express the weight tensors in so-called canonical networks as scaled sums of outer vector products. In particular, we train network weights in the decomposed form, where scale weights are optimized separately for each mode. Additionally, similarly to weight normalization, we include a global scaling parameter. We study the initialization of the canonical form by running the power method and by drawing randomly from Gaussian or uniform distributions. Our results indicate that we can replace the power method with cheaper initializations drawn from standard distributions. The canonical re-parametrization leads to competitive normalization performance on the MNIST, CIFAR10, and SVHN data sets. Moreover, the formulation simplifies network compression. Once training has converged, the canonical form allows convenient model-compression by truncating the parameter sums.",
    link: "https://arxiv.org/pdf/2211.06241",
    pubDate: "IJCNN 2022",
    categories: ["IJCNN22", "CNN", "CP Decomposition", "Normalisation"
    ],
  }
];

export const projects = {
  publicationProjects: [
    {}
  ],
  nlpProjects: [
    {},
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
    {},
  ],
  cdmoProjects: [
    {},
    {},
  ],
  challengesProjects: [
    {
      projectName: "Siemens eHighway Hackathon 2021 for 3D LiDAR processing",
      image: "images/siemens_hackathon.jpeg",
      summary:
        "This hackathon focuses on processing 3D LiDAR, images and geo-maps to map, quantify, and visualize features of road infrastructure for planning of future eHighways. Our team ended in second place by providing user guidance, planning dashboard and infrastructure placement suggestions. Given limited domain, we used traditional LiDAR processing techniques to determine and segment typical road objects.",
      preview: "https://www.linkedin.com/feed/update/urn:li:activity:6808753697158389761/",
      techStack: ["LiDAR Processing", "Automated Planning", "Siemens eHighway"],
    },
    {
      projectName: "Helmholtz HiDA Datathon",
      image: "",
      summary:
        "This datathon organised by Helmholtz focuses on local climate zone classification and segmentation usign the So2SatLCZ42 satellite dataset. Eventhough limited to participation, this datathon provided us with an unqiue opportunity to use and understand large-scale systems at Juelich Supercomputing Center (JSC).",
      preview: "https://drive.google.com/file/d/1yJ8pd_w2ktLwrCCHUSmtnVImgkoPa_OB/view",
      techStack: ["Satellite data", "Tensorflow", "Helmholtz"],
    },
  ],
};

export const experience = [
  {
    title: "Junior Developer (RE: GmbH, Germany)",
    duration: "October 2022 - March 2023",
    subtitle: "Software Engineer",
    details: ["Develop full stack application with Ruby on Rails, PostgreSQL, and Javascript."],
    tags: ["Ruby on Rails", "Full stack", "Team Working"],
    icon: "desktop",
  },
  {
    title: "Research Assistant(Fraunhofer SCAI, Germany)",
    duration: "June 2020 - April 2022",
    subtitle: "Student Research Assistant",
    details: [
      "Develop a novel normalisation technqiue for convolutional neural networks using CanonicalPolyadic Decomposition."
    ],
    tags: ["Python", "Tensor Mathematics", "PyTorch", "Numpy"],
    icon: "desktop",
  },
  {
    title: "Systems Engineer(Infosys, India)",
    duration: "June 2017 - December 2018",
    subtitle: "Software Developer",
    details: [
      "Develop and maintain software for Airbus Resource and Planning (ARP) using SAP-ABAP."
    ],
    tags: ["ABAP", "Webdynpros", "Agile", "ERP"],
    icon: "desktop",
  },
];

export const education = [
  {
    title: "PhD",
    duration: "2023-on going",
    subtitle: "University of Bonn, Germany",
    details: ["Ongoing, under supervision of Prof. Jürgen Gall"],
    tags: [
      "",
    ],
    icon: "graduation-cap",
  },
  {
    title: "M.Sc. in Autonomous Systems (Grade: 1.5)",
    duration: "2019-2022",
    subtitle: "Hochschule Bonn-Rhein-Sieg, Germany",
    details: ["Thesis: Out-of-distribution detection in 3D semantic segmentation, under supervision of Prof. Dr. Matias Valdenegro Toro"],
    tags: [
      "",
    ],
    icon: "graduation-cap",
  },
  {
    title: "B.Tech. in Electronics & Communications Engineering (Grade: 8.58/10)",
    duration: "2013 - 2017",
    subtitle: "KL University, India",
    details: ["Thesis: Design of band-gap voltage reference circuits"],
    tags: [
      "",
    ],
    icon: "graduation-cap",
  },
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
        link: "https://www.linkedin.com/in/lokeshveeramacheneni/",
      },
      {
        text: "Google Scholar",
        link: "https://scholar.google.com/citations?user=OfadDxkAAAAJ&hl=en",
      },
      {
        text: "Github",
        link: "https://github.com/loki-veera",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Template from <a href=\"https://fedespu.github.io\">Federico Spurio</a>."
    ],
  },
];
