// Helper function to get project image path
const getProjectImage = (imageName: string | null, fallbackUrl: string) => {
  if (imageName) {
    return `/project-images/${imageName}`;
  }
  return fallbackUrl;
};

export const projects = [
  {
    id: 'muybridge-gait-estimation',
    title: 'MuyBridge: Quantized 2.5D Network Fusion for On-Device Gait Estimation',
    description: 'Edge-native quantized 2.5D fusion pipeline for real-time center of mass estimation from single RGB camera.',
    fullDescription: `At ETH Zurich’s Integrated Systems Laboratory, I developed MuyBridge, an edge-native pipeline for real-time gait analysis. The system fuses 2D keypoints with monocular depth and constructs a 2.5D latent axis to estimate the body’s center of mass. Using quantization, pruning, and Core ML export, I compressed a diffusion model of over a billion parameters to run on iPhone hardware at sub-300ms latency. The pipeline was evaluated with motion-capture data from Qualisys and supports applications ranging from sports biomechanics to Parkinson’s rehabilitation, enabling accurate, private, and scalable analysis outside the lab.`,
    technologies: ['PyTorch', 'MMPose', 'CoreML', 'ONNX', 'Diffusers', 'NumPy', 'SwiftUI', 'AVFoundation', 'Xcode', 'Accelerate'],
    link: 'https://github.com/Abradshaw1/Muybridge',
    image: getProjectImage('muyrbridge.png', 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'muyrbridge.png'
  },
  {
    id: 'cohort-analysis-dashboard',
    title: 'Cohort Analysis Dashboard',
    description: 'Interactive clinical EDA dashboard for visualizing patient cohorts and individual outcomes from medical data.',
    fullDescription: `This work-in-progress project is an interactive visualization dashboard designed for clinical exploratory data analysis. Built with React, D3.js, and Vite, the dashboard enables researchers to compare individual patient outcomes across cohorts derived from medical datasets. The system is intended to evolve into a general-purpose intervention-visualization tool for cohort-based studies, providing intuitive, interactive visualizations that support hypothesis generation and outcome analysis in clinical research settings.`,
    technologies: ['D3.js', 'React', 'JavaScript', 'Vite.js', 'CSS'],
    link: 'https://github.com/Abradshaw1/Cohort_Analysis_Dashboard',
    demoLink: 'https://abradshaw1.github.io/Cohort_Analysis_Dashboard/',
    image: getProjectImage('Cohort_Anlaysis.png', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'Cohort_Anlaysis.png'
  },
  {
    id: 'bee-buzz-classification',
    title: 'Bee Buzz Classification',
    description: 'Tiny ML model for bee species classification.',
    fullDescription: `During my time as a Visiting Researcher at the MIT Media Lab in the Responsive Environments group, I worked on building TinyML models for invasive and native bee species classification. Using field recordings collected in Patagonia, Argentina, I ported existing audio frameworks and designed custom residual architectures optimized for small memory footprints. Hyperparameter tuning and visualization in Weights & Biases guided improvements, while pruning and quantization enabled deployment on MAX7800-class microcontrollers. The result was a lightweight yet accurate real-time classifier for buzz/no-buzz detection, developed in collaboration with researchers from MIT, ETH Zurich, and Kioxia R&D.`,
    technologies: ['Quantization', 'Analog devices toolchain', 'MAX7800 featherboard', 'Pytorch', 'W&B/TensorBoard', 'ESC-50 dataset', 'Spectograms', 'Sparse attention', 'Layer pruning',],
    link: 'https://github.com/Abradshaw1/AS2.0_REPO',
    image: getProjectImage('buzzdetection.png', 'https://images.unsplash.com/photo-1440985890253-d024718e8e44?q=80&w=1200&h=800&auto=format&fit=crop'),
    customImage: 'buzzdetection.png'
  },
  {
    id: 'flight-delay-prediction',
    title: 'Flight Delay Prediction – Pittsburgh International Airport',
    description: 'Built a supervised pipeline to predict departure delays using pre-departure metadata.',
    fullDescription: `I shipped a supervised pipeline that predicts ≥15-minute departure delays using only pre-departure signals (schedule, route, weather, turnaround). With targeted feature engineering (aircraft delay history, precipitation, wind) and class-imbalance handling, an XGBoost model reached AUC 0.839 on 2024 PIT data. The system is designed for easy retraining and interpretable diagnostics so ops teams can track drift and keep decisions explainable.`,
    technologies: ['Python', 'XGBoost', 'Feature Engineering', 'Airline On-Time Performance Data', 'Pandas', 'NumPy', 'Scikit-learn'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&h=800',
    detailImage: getProjectImage('flight_prediction.png', 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&h=800'),
    customImage: null,
    detailCustomImage: 'flight_prediction.png'
  },
  {
    id: 'satellite-thermal-power',
    title: 'Forecasting Satellite Thermal Power – ESA Mars Express',
    description: 'Modeled thermal power across 7,000+ orbits using STL+ARIMA and Time Series Regression.',
    fullDescription: `I modeled spacecraft thermal power across 7,000+ orbits to inform energy-aware scheduling. An STL+ARIMA baseline captured seasonal structure, while a Time Series Regression model with exogenous telemetry (solar heating, eclipse duration, transmitter load) cut error further (MAPE 12.9% → 4.3%). The approach balances interpretability and accuracy, giving operators transparent levers for planning under changing orbital conditions.`,
    technologies: ['R', 'ARIMA/SARIMA', 'Time Series Regression', 'Space Telemetry Analysis', 'STL decomposition'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&h=800',
    detailImage: getProjectImage('esapower.png', 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&h=800'),
    customImage: null,
    detailCustomImage: 'esapower.png'
  },
  {
    id: 'multilayer-python',
    title: 'Multi-Language Integration',
    description: 'Python framework integrating multiple programming languages for image processing.',
    fullDescription: `This project evaluated how different programming languages handle runtime, memory, and image-processing tasks. I designed a Python framework that called external routines in Prolog, Matlab, C, Haskell, and Java to perform rotation and manipulation of images. By benchmarking performance across languages, I highlighted trade-offs in speed, efficiency, and cross-language compatibility. The work underscores the value of language interoperability for applied computing.`,
    technologies: ['Python Scripting', 'Prolog', 'Matlab', 'C', 'Haskell', 'Java', 'Image Processing'],
    link: 'https://github.com/Abradshaw1/Multi-layered-Python-scripting',
    image: getProjectImage('multilanguage.jpg', 'https://i.imghippo.com/files/dKsI4998XY.png'),
    customImage: 'multilanguage.jpg'
  },
  {
    id: 'chicago-crime-prediction',
    title: 'Chicago Crime Prediction Model',
    description: 'Crime prediction using demographic and spatial data.',
    fullDescription: `I developed a predictive framework for analyzing narcotics-related crime in Chicago. Using a Negative Binomial Generalized Linear Model, the system integrated spatial, temporal, and socioeconomic variables, including lagged crime counts and census data. Stepwise regression improved model interpretability and accuracy, revealing clear seasonal cycles and spatial clustering effects.`,
    technologies: ['Negative Binomial GLM', 'Stepwise Regression', 'Spatial Data Analysis', 'Python', 'NumPy', 'Matplotlib'],
    link: '#',
    image: getProjectImage('chicago crime.png', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'chicago crime.png'
  },
  {
    id: 'raynaud-research',
    title: 'Raynaud\'s Disease Research',
    description: 'Multi-modal ML and HCI tools for healthcare.',
    fullDescription: `As a Human-Centered Computing Researcher in the Computer Architecture and Systems Laboratory at San Diego State University, I led the development of a cross-platform medical application for patients with Raynaud’s disease. The system integrated wearable health and physiological data into multi-modal machine learning models for symptom prediction, while a fine-tuned React Native speech-to-text engine supported doctor–patient interactions. On the backend, I created a full-stack framework with AWS autoscaling, PostgreSQL, and REST APIs to ensure reliable deployment across iOS and Android. This project was carried out in collaboration with the Chair of Computer Science at SDSU, Yale School of Medicine, and Rollins College (UK).`,
    technologies: ['React Native', 'AWS Auto-scaling', 'JavaScript', 'PostgreSQL', 'RESTAPI', 'Xcode', 'Android studio', 'mHealth Applications',],
    link: 'https://github.com/Abradshaw1/HealthApp',
    image: getProjectImage('healthapp.png', 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'healthapp.png'
  },
  {
    id: 'health-audit-gpt',
    title: 'Health Audit-GPT',
    description: 'Auditing transformers for healthcare diagnostics reliability.',
    fullDescription: `This project audited the reliability of small generative transformers in medical diagnostics. Using Flan-T5-Small, GPT-Neo, and DistilGPT-2, I tested model outputs on MedQA and PubMed datasets, applying red-teaming prompts in domains such as sepsis, cardiology, and radiology. PyTorch-based experiments combined error analysis with token-level attribution to uncover unsafe or biased generations. The study surfaced concrete risks of low-parameter models in clinical contexts and suggested mitigation strategies for safer deployment in healthcare.`,
    technologies: ['Hugging Face Transformers (Flan-T5-Small, GPT-Neo, DistilGPT-2)', 'Medical QA datasets (MedQA, PubMed abstracts)', 'Python', 'PyTorch'],
    link: 'https://github.com/Abradshaw1/HealthAudit-GPT',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'bayesian-alzheimers',
    title: 'Bayesian Hierarchical Models for Alzheimer\'s Disease Pseudotime',
    description: 'Analyzed Allen Institute SEA-AD brain dataset with simulation-based inference.',
    fullDescription: `This project explored the progression of Alzheimer’s disease using the Allen Institute’s SEA-AD brain dataset. I implemented hierarchical Bayesian models in Stan to capture gene–pathology associations, comparing Poisson and Negative Binomial likelihoods while incorporating APOE genotype as a covariate. The modeling framework combined permutation tests, bootstrapping, and simulation-based inference to assess robustness. The Negative Binomial approach provided superior fit, yielding interpretable pseudotime structures that highlight how genetic variation shapes disease progression.`,
    technologies: ['R', 'tidyverse', 'ggplot2', 'Stan', 'Bayesian Inference', 'Bootstrapping', 'Negative Binomial Modeling', 'Gene–Pathology Analysis'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&h=800',
    detailImage: getProjectImage('alzheimers.png', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&h=800'),
    customImage: null,
    detailCustomImage: 'alzheimers.png'
  },
  {
    id: 'health-obesity-analysis',
    title: 'Health and Obesity Analysis',
    description: 'Analysis of global obesity and caloric intake trends.',
    fullDescription: `This project examined the relationship between global caloric intake trends and obesity prevalence. Drawing on cross-country health datasets, I applied statistical models in Python to study correlations between dietary supply and BMI-related mortality. Data visualization played a central role: with Matplotlib, Plotly, and Seaborn, I created dashboards and infographics that communicated disparities across regions and genders.`,
    technologies: ['R', 'Matplotlib', 'Plotly', 'Seaborn'],
    link: '#',
    image: getProjectImage('obesity.png', 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'obesity.png'
  },
  {
    id: 'mcmc-decryption',
    title: 'MCMC Text Decryption Algorithm',
    description: 'Markov Chain Monte Carlo-based text decryption for substitution ciphers.',
    fullDescription: `I built a Markov Chain Monte Carlo algorithm to decrypt substitution ciphers by leveraging statistical properties of natural language. The approach used bigram frequency models to score candidate decryptions, with NumPy optimizations to handle large search spaces efficiently. Profiling tools such as cProfile, line_profiler, and SnakeViz guided performance tuning. Experiments showed how iterations, text length, and scaling impact decryption accuracy, demonstrating the usefulness of probabilistic methods for classical cryptography problems.`,
    technologies: ['Python', 'NumPy', 'cProfile', 'Line Profiler', 'SnakeViz'],
    link: 'https://github.com/Abradshaw1/decryption-Abradshaw1',
    image: getProjectImage('mcmc.png', 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'mcmc.png'
  },
  {
    id: 'parallel-factorization',
    title: 'Parallel Prime Factorization',
    description: 'Parallelized algorithms for efficient prime factorization.',
    fullDescription: `This project explored parallel computing approaches to integer factorization. I designed sequential, multiprocessing, and map-based implementations in Python to compare runtime efficiency across varying core counts. Benchmarking experiments revealed theoretical versus observed speedups, which I visualized with Matplotlib.`,
    technologies: ['Python', 'Multiprocessing', 'Matplotlib', 'Sorting Algorithms'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'mobile-game',
    title: 'C++ Mobile Game',
    description: 'Single-player clicker game with dynamic difficulty scaling.',
    fullDescription: `This project focused on designing a single-player clicker game with adaptive challenge. Implemented in C++, the system used a dynamic difficulty adjustment mechanism and an evolving in-game environment to keep players engaged. The work served both as an exercise in applying object-oriented programming concepts and as a proof of concept for lightweight mobile game mechanics.`,
    technologies: ['C++', 'Game Development', 'Mobile Development'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'genai-ct',
    title: 'Generative AI for CT Scans',
    description: 'Generative AI text-to-image models for medical imaging.',
    fullDescription: `As part of my master’s research at Carnegie Mellon’s Human–Computer Interaction Institute, in collaboration with Boston University EECS and UPMC, I investigated how generative AI could be operationalized in medical imaging. I developed a diffusion-based text-to-image pipeline to synthesize CT scans from clinical prompts, with cross-attention attribution and sparse attention to visualize how anatomy was influenced by text conditions. By profiling, pruning, and benchmarking models, the project balanced interpretability with runtime feasibility.`,
    technologies: ['Diffusion models (U-Net backbone, latent consistency)', 'DPPM, DDPM sampling', 'PyTorch', 'sparse attention', 'Python', 'DICOM preprocessing'],
    link: 'https://github.com/cmudig/GenAIxRad-Viewer',
    image: getProjectImage('genaict.png', 'https://i.imghippo.com/files/wFHc9914FhQ.png'),
    customImage: 'genaict.png'
  },
  {
    id: 'parsons-prompt-classification',
    title: 'Automating Malicious Prompt Detection',
    description: 'Domain-specific malicious-prompt classifier with synthetic data + RLHF and department routing.',
    fullDescription: `While consulting as an AI specialist for Parsons Corporation, I built a policy-aware pipeline to detect and route harmful prompts submitted to the company’s internal language models. The project combined synthetic dataset generation from policy documents with an RLHF loop that fine-tuned a Microsoft Phi-2 model to better reflect employee usage. I trained and deployed a LoRA-tuned deBERTa-v3-small classifier, achieving over 90% accuracy in routing prompts across HR, Legal, and Security categories. A web-based interface supported distributed fine-tuning and review, resulting in a lightweight safety layer ready for enterprise deployment.`,
    technologies: [
      'Python','Hugging Face','deBERTa-v3-small','LoRA/PEFT','RLHF',
      'FLAN-T5','SBERT','Legal-BERT','MPNet','UMAP','Streamlit','PyMuPDF'
    ],
    link: '/project/src/data/Parsons_Prompt_Classification_Write_up.pdf',
    image: getProjectImage('Parsons_RLHF.png', 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'Parsons_RLHF.png'
  },
  {
    id: 'college-scorecard',
    title: 'College Scorecard Analysis',
    description: 'Python-based educational data analysis tool with API integration.',
    fullDescription: `I implemented a Python–PostgreSQL pipeline to analyze U.S. higher education data via the Department of Education’s IPEDS API. Streamlit provided a lightweight interface for interactive dashboards, while Psycopg handled SQL queries for institutional performance metrics. Users could explore trends in admissions, graduation rates, and student debt through dynamic visualizations.`,
    technologies: ['Python', 'PostgreSQL', 'Streamlit', 'Psycopg', 'SQL'],
    link: 'https://github.com/Abradshaw1/CollegeScoreCard',
    image: getProjectImage('scoreavrd.png', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'scoreavrd.png'
  },
  {
    id: 'salary-prediction',
    title: 'SE Salary Prediction',
    description: 'RNN-LSTM model for software engineer salary predictions.',
    fullDescription: `I built a recurrent neural network with an LSTM backbone to predict software engineer salaries from open Kaggle datasets. Features included demographic, environmental, and geographic factors, which were preprocessed in Python with Pandas and NumPy. Model training in PyTorch applied advanced regression techniques, producing interpretable outputs alongside predictive accuracy. This project illustrates the potential of deep sequence models for real-world economic forecasting tasks.`,
    technologies: ['Machine Learning', 'Recurrent Neural Networks(RNN)', 'Long-Short Term Memory(LSTM)', 'Python'],
    link: 'https://github.com/Abradshaw1/Software-engineer-salary-predction',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'accident-prediction',
    title: 'Accident Prediction Model',
    description: 'Teen car accident prediction model using advanced data analysis.',
    fullDescription: `I developed a predictive system to analyze risk factors for teenage car accidents. Using Python, I applied linear regression, principal component analysis, and k-means clustering to explore links between demographics, environmental factors, and outcomes. The analysis surfaced key latent dimensions that contributed to accident likelihood, offering insight into prevention strategies through statistical modeling.`,
    technologies: ['Python', 'NumPy', 'Pandas'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'vacuum-agent',
    title: 'Vacuum Agent AI',
    description: 'Intelligent vacuum cleaning agent with pathfinding algorithms.',
    fullDescription: `This project explored artificial intelligence for household robotics. I implemented a simulated vacuum-cleaning agent that used pathfinding algorithms such as A* and Dijkstra to plan efficient routes. A decision-making layer introduced adaptability to different room layouts and obstacles. Built in Python with Scikit-learn for baseline learning models, the system demonstrates how classical AI methods can be applied to everyday robotics tasks.`,
    technologies: ['Python', 'Scikit-learn'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  }
]