---
title: "Canonical Convolutional Neural Networks"
collection: publications
category: conferences
permalink: /publication/2022-Canonical-convolutional-neural-networks
excerpt: 'We propose a novel canonical weight normalization, a method for convolutional networks that represents weights as scaled sums of vector products, enabling efficient training and model compression. Experiments show competitive performance on MNIST, CIFAR10, and SVHN with simplified initialization and compression.'
date: 2022-10-27
venue: '2022 International Joint Conference on Neural Networks (IJCNN)'
paperurl: 'https://arxiv.org/pdf/2206.01509'
codeurl: 'https://github.com/Fraunhofer-SCAI/canonical-cnn'
---

## Abstract
We introduce canonical weight normalization for convolutional neural networks. Inspired by the canonical tensor decomposition, we express the weight tensors in so-called canonical networks as scaled sums of outer vector products. In particular, we train network weights in the decomposed
form, where scale weights are optimized separately for each mode. Additionally, similarly to weight normalization, we include a global scaling parameter. We study the initialization of the canonical form by running the power method and by drawing randomly from Gaussian or uniform distributions. Our
results indicate that we can replace the power method with cheaper initializations drawn from standard distributions. The canonical re-parametrization leads to competitive normalization performance on the MNIST, CIFAR10, and SVHN data sets. Moreover, the formulation simplifies network compression. Once training has converged, the canonical form allows convenient model-compression by truncating the parameter sums.


Code is available [here](https://github.com/Fraunhofer-SCAI/canonical-cnn).



## Citation
@inproceedings{veeramacheneni2022canonical,\\
  &emsp;title={Canonical convolutional neural networks},\\
  &emsp;author={Veeramacheneni, Lokesh and Wolter, Moritz and Klein, Reinhard and Garcke, Jochen},\\
  &emsp;booktitle={2022 International Joint Conference on Neural Networks (IJCNN)},\\
  &emsp;pages={1--8},\\
  &emsp;year={2022},\\
  &emsp;organization={IEEE}\\
}