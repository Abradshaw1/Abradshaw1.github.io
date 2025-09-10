// Helper function to get project image path
const getProjectImage = (imageName: string | null, fallbackUrl: string, detailImageName?: string | null) => {
  if (imageName) {
    return `/project-images/${imageName}`;
  }
  return fallbackUrl;
};

// Helper function to get project detail image path (for project detail pages)
const getProjectDetailImage = (detailImageName: string | null, cardImageName: string | null, fallbackUrl: string) => {
  if (detailImageName) {
    return `/project-images/${detailImageName}`;
  }
  return getProjectImage(cardImageName, fallbackUrl);
};

export const projects = [
  {
    id: 'parsons-prompt-classification',
    title: 'Parsons Prompt Classification: Automating Malicious Prompt Detection',
    description: 'Domain-specific malicious-prompt classifier with synthetic data + RLHF and department routing.',
    fullDescription: `Built a policy-aware pipeline for ParsonsGPT: cleaned policy docs, generated and filtered synthetic prompts, and added a lightweight RLHF loop to refine generations. Fine-tuned a deBERTa-v3-small classifier (LoRA/PEFT) to flag and route prompts (HR/Legal/Security) with large gains over baseline and production-friendly latency.`,
    technologies: [
      'Python','Hugging Face','deBERTa-v3-small','LoRA/PEFT','RLHF',
      'FLAN-T5','SBERT','Legal-BERT','MPNet','UMAP','Streamlit','PyMuPDF'
    ],
    link: '/project/src/data/Parsons_Prompt_Classification_Write_up.pdf',
    image: getProjectImage('Parsons_RLHF.png', 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'Parsons_RLHF.png'
  },
  {
    id: 'bayesian-alzheimers',
    title: 'Bayesian Hierarchical Models for Alzheimer\'s Disease Pseudotime',
    description: 'Analyzed Allen Institute SEA-AD brain dataset with simulation-based inference.',
    fullDescription: `Analyzed Allen Institute SEA-AD brain dataset with simulation-based inference. 
    Implemented bootstrapping, permutation tests, and Bayesian inference in Stan to study gene–pathology associations. 
    Compared Poisson vs. Negative Binomial hierarchical pseudotime models, incorporating APOE genotype as covariate.`,
    technologies: ['R', 'Stan', 'Bayesian Inference', 'Bootstrapping', 'Negative Binomial Modeling', 'Gene–Pathology Analysis'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&h=800',
    detailImage: getProjectImage('alzheimers.png', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&h=800'),
    customImage: null,
    detailCustomImage: 'alzheimers.png'
  },
  {
    id: 'flight-delay-prediction',
    title: 'Flight Delay Prediction – Pittsburgh International Airport',
    description: 'Built a supervised pipeline to predict departure delays using pre-departure metadata.',
    fullDescription: `Built a supervised pipeline to predict departure delays (≥15 min) using only pre-departure metadata (schedules, routes, weather, turnaround). 
    Engineered features (aircraft delay history, precipitation, wind speed) and trained an XGBoost classifier with class imbalance handling, achieving AUC 0.839 on 2024 PIT data.`,
    technologies: ['Python', 'XGBoost', 'Feature Engineering', 'Airline On-Time Performance Data'],
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
    fullDescription: `Modeled thermal power across 7,000+ orbits using STL+ARIMA and Time Series Regression (TSR) with exogenous telemetry (solar heating, eclipse duration, transmitter load). 
    Achieved MAPE 12.9% with STL+ARIMA and 4.3% with TSR, enabling interpretable, energy-aware scheduling for spacecraft operations.`,
    technologies: ['R', 'ARIMA/SARIMA', 'Time Series Regression', 'Space Telemetry Analysis'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&h=800',
    detailImage: getProjectImage('thermal_forecasting.png', 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&h=800'),
    customImage: null,
    detailCustomImage: 'thermal_forecasting.png'
  },
  {
    id: 'genai-ct',
    title: 'Generative AI for CT Scans',
    description: 'Generative AI text-to-image models for medical imaging.',
    fullDescription: `Explained(XAI) and operationalized text-to-image models to generate conditioned CT scans from prompts, helping patients and doctors understand anatomical diseases. 
    Collaborated with Boston University EECS and UPMC to explain diffusion models using cross-attention maps and implemented sparse attention for efficiency.`,
    technologies: ['Generative AI', 'Medical Imaging', 'Text-to-Image Models', 'Python', 'Machine Learning'],
    link: '#',
    image: getProjectImage('genaict.png', 'https://i.imghippo.com/files/wFHc9914FhQ.png'),
    customImage: 'genaict.png'
  },
  {
    id: 'bee-buzz-classification',
    title: 'Bee Buzz Classification',
    description: 'Tiny ML model for bee species classification.',
    fullDescription: `Architected and optimized ML models for classifying invasive and native bee species based on audio data. 
    Enhanced frameworks for higher accuracy and compressed models for real-time classification on microcontrollers. Collaborated with researchers from MIT, Kioxia R&D, and ETH Zurich.`,
    technologies: ['Machine Learning', 'Audio Classification', 'Microcontrollers', 'Python', 'TinyML'],
    link: '#',
    image: getProjectImage('bee_buzz.gif', 'https://images.unsplash.com/photo-1440985890253-d024718e8e44?q=80&w=1200&h=800&auto=format&fit=crop'),
    customImage: 'bee_buzz.gif'
  },
  {
    id: 'raynaud-research',
    title: 'Raynaud\'s Disease Research',
    description: 'Multi-modal ML and HCI tools for healthcare.',
    fullDescription: `Designed cross-platform applications to analyze and predict symptoms for patients with Raynaud's disease. 
    Developed full-stack frameworks with React Native and AWS, integrating multi-modal ML models for wearable health data. Collaborated with SDSU, Yale, and Rollins College experts.`,
    technologies: ['HCI', 'Multi-modal ML', 'Healthcare Applications', 'React Native', 'AWS'],
    link: '#',
    image: getProjectImage('healthapp.png', 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'healthapp.png'
  },
  {
    id: 'health-audit-gpt',
    title: 'Health Audit-GPT',
    description: 'Auditing transformers for healthcare diagnostics reliability.',
    fullDescription: `Conducted comprehensive auditing of low-parameter generative transformers: Flan-T5-Small (80M), GPT-Neo (125M), DistilGPT-2 (82M), 
    for healthcare diagnostics applications. Focused on red-teaming their reliability in zero-shot prompt diagnosis, 
    ensuring safe and accurate medical assessments.`,
    technologies: ['Machine Learning', 'Healthcare AI', 'Natural Language Processing', 'Python', 'PyTorch'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'chicago-crime-prediction',
    title: 'Chicago Crime Prediction Model',
    description: 'Crime prediction using demographic and spatial data.',
    fullDescription: `Developed a predictive model for narcotics-related crime patterns in Chicago using a Negative Binomial Generalized Linear Model (GLM). 
    Incorporated spatial, temporal, and demographic factors, including lagged crime counts and socioeconomic variables. Refined predictors through stepwise regression 
    to achieve high accuracy, capturing seasonal trends and spatial clustering of crime.`,
    technologies: ['Negative Binomial GLM', 'Stepwise Regression', 'Spatial Data Analysis', 'Python', 'Statistical Modeling'],
    link: '#',
    image: getProjectImage('chicago crime.png', 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'chicago crime.png'
  },
  {
    id: 'health-obesity-analysis',
    title: 'Health and Obesity Analysis',
    description: 'Analysis of global obesity and caloric intake trends.',
    fullDescription: `Investigated obesity prevalence and caloric intake disparities across countries and genders using advanced statistical analyses. 
    Visualized correlations between daily caloric supply and high BMI-related deaths, emphasizing regional dietary patterns and health risks. 
    Developed infographics to communicate findings on obesity trends and their societal impacts.`,
    technologies: ['Data Visualization', 'Statistical Analysis', 'Health Data Analysis', 'Python', 'Infographic Design'],
    link: '#',
    image: getProjectImage('obesity.png', 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'obesity.png'
  },
  {
    id: 'mcmc-decryption',
    title: 'MCMC Text Decryption Algorithm',
    description: 'Markov Chain Monte Carlo-based text decryption for substitution ciphers.',
    fullDescription: `Developed a Markov Chain Monte Carlo (MCMC) algorithm to decrypt substitution ciphers by leveraging bigram frequency analysis of reference texts. 
    Implemented optimized text preprocessing and scoring functions to handle large datasets efficiently. Conducted comprehensive analysis of algorithm parameters, including iterations, text length, and scaling, and their impact on decryption accuracy.`,
    technologies: ['Python', 'NumPy', 'cProfile', 'Line Profiler', 'SnakeViz'],
    link: '#',
    image: getProjectImage('mcmc.png', 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'mcmc.png'
  },
  {
    id: 'parallel-factorization',
    title: 'Parallel Prime Factorization',
    description: 'Parallelized algorithms for efficient prime factorization.',
    fullDescription: `Designed and implemented parallel algorithms for prime factorization of large datasets using Python's multiprocessing capabilities. 
    Benchmarked runtime improvements by comparing sequential, map(), and multiprocessing implementations. Analyzed speedup and efficiency across varying core counts, achieving significant reductions in runtime and exploring theoretical versus observed speedup.`,
    technologies: ['Python', 'Multiprocessing', 'Matplotlib', 'Sorting Algorithms'],
    link: '#',
    image: 'https://i.imghippo.com/files/dql4991sxI.png',
    customImage: null
  },
  {
    id: 'college-scorecard',
    title: 'College Scorecard Analysis',
    description: 'Python-based educational data analysis tool with API integration.',
    fullDescription: `Developed a comprehensive Python, PostgreSQL tool to collect and analyze educational data through IPED's API. 
    Using streamlit, I created an interactive dashboard for viewing, tracking and evaluating institutional performance and changes.`,
    technologies: ['Python', 'PostgreSQL', 'Streamlit', 'Psycopg', 'SQL'],
    link: '#',
    image: getProjectImage('scoreavrd.png', 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&h=800'),
    customImage: 'scoreavrd.png'
  },
  {
    id: 'multilayer-python',
    title: 'Multi-Language Integration',
    description: 'Python framework integrating multiple programming languages for image processing.',
    fullDescription: `Created Python scripts to interact with five programming languages 
    to visualize the effects different languages have on run time, memory consumption and image rotation capabilities, demonstrating cross-language 
    compatibility and performance comparison.`,
    technologies: ['Python Scripting', 'Prolog', 'Matlab', 'C', 'Haskell', 'Java', 'Image Processing'],
    link: '#',
    image: getProjectImage('multilanguage.jpg', 'https://i.imghippo.com/files/dKsI4998XY.png'),
    customImage: 'multilanguage.jpg'
  },
  {
    id: 'salary-prediction',
    title: 'SE Salary Prediction',
    description: 'RNN-LSTM model for software engineer salary predictions.',
    fullDescription: `Built a Recurrent Neural Network (RNN) with Long Short-Term Memory with (LSTM) Backbone
    architecture to predict software engineer salaries based on open source kaggle data set with different environmental, age, and location factors. Applied advanced regression techniques, statistical analysis, 
    and visualization to industry datasets for accurate predictions.`,
    technologies: ['Machine Learning', 'Recurrent Neural Networks(RNN)', 'Long-Short Term Memory(LSTM)', 'Statistical Analysis', 'Python'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'mobile-game',
    title: 'C++ Mobile Game',
    description: 'Single-player clicker game with dynamic difficulty scaling.',
    fullDescription: `Developed an engaging single-player clicker game in C++ featuring dynamic environment changes 
    and adjustable difficulty levels. The game demonstrates advanced C++ programming concepts and game development 
    principles.`,
    technologies: ['C++', 'Game Development', 'Mobile Development'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'accident-prediction',
    title: 'Accident Prediction Model',
    description: 'Teen car accident prediction model using advanced data analysis.',
    fullDescription: `Developed a predictive model analyzing teen car accidents using various data analysis techniques. 
    Implemented linear regression and principal component analysis, along with k-means clustering using NumPy and pandas 
    libraries for comprehensive insights.`,
    technologies: ['Python', 'Machine Learning', 'Data Analysis', 'NumPy', 'Pandas'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  },
  {
    id: 'vacuum-agent',
    title: 'Vacuum Agent AI',
    description: 'Intelligent vacuum cleaning agent with pathfinding algorithms.',
    fullDescription: `Developed an intelligent vacuum cleaning agent using artificial intelligence techniques. 
    Implemented pathfinding algorithms and decision-making systems for efficient cleaning patterns.`,
    technologies: ['Python', 'Artificial Intelligence', 'Scikit-learn', 'Robotics'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&h=800',
    customImage: null
  }
]