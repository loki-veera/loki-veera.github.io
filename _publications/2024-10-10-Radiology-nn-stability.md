---
title: "On the Stability of Neural Segmentation in Radiology"
collection: publications
category: conferences
permalink: /publication/2024-radiology-stability
excerpt: 'Neural networks show promise for automated prostate segmentation, crucial for personalized oncology. This study trains 3D U-Net models on MRI scans, achieving a mean Intersection over Union of 0.88 on a test/re-test dataset, though larger studies are needed to confirm anatomical accuracy.'
date: 2024-10-10
venue: '2024 European Symposium on Artificial Neural Networks (ESANN), Computational Intelligence and Machine Learning'
paperurl: 'https://www.esann.org/sites/default/files/proceedings/2024/ES2024-172.pdf'
---

## Abstract
Neural networks promise automated prostate segmentation for the development of precise and quantifiable image-based biomarkers in modern personalized oncology. Before clinical translation, however, their stability must be ensured. In this study, we train  three-dimensional Ushaped convolutional neural networks to segment prostate magnetic  resonance imaging (MRI) scans and evaluate different loss formulations to improve their performance. To evaluate generalizability and reproducibility of our networks, we compare their performance in a clinically acquired test/re-test MRI data set of 26 prostate cancer patients that was previously not seen by the networks. We find our networks to be generalizable with good reproducibility with a mean Intersection over Union of 0.88. While
initial results are promising, anatomical accuracy remains to be evaluated in larger, multi-center data sets. To facilitate clinical applicability, we provide an easy to use toolbox online.

Code is available [here](https://github.com/Krebs-Busters/zone-segmentation).

## Citation
find [here](https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=On+the+Stability+of+Neural+Segmentation+in+Radiology&btnG=#d=gs_cit&t=1730716426273&u=%2Fscholar%3Fq%3Dinfo%3AjxfVzKD6lykJ%3Ascholar.google.com%2F%26output%3Dcite%26scirp%3D0%26hl%3Den)