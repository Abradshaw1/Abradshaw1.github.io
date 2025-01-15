import raynaudsimage from '../data/raynaudsimage.jpg';
import scorecard from '../data/scorecard.png';
import infographic from '../data/infographic.png';
import chicagocrime from '../data/chicagocrime.png';
import fcnn from '../data/fcnn.png';
import apred from '../data/apred.png';
export const projects = [
  {
    id: 'genai-ct',
    title: 'Generative AI for CT Scans',
    description: 'Generative AI text-to-image models for medical imaging.',
    fullDescription: `Explained(XAI) and operationalized text-to-image models to generate conditioned CT scans from prompts, helping patients and doctors understand anatomical diseases. 
    Collaborated with Boston University EECS and UPMC to explain diffusion models using cross-attention maps and implemented sparse attention for efficiency.`,
    technologies: ['Generative AI', 'Medical Imaging', 'Text-to-Image Models', 'Python', 'Machine Learning'],
    link: '#',
    image: 'https://i.imghippo.com/files/wFHc9914FhQ.png'
  },
  {
    id: 'bee-buzz-classification',
    title: 'Bee Buzz Classification',
    description: 'Tiny ML model for bee species classification.',
    fullDescription: `Architected and optimized ML models for classifying invasive and native bee species based on audio data. 
    Enhanced frameworks for higher accuracy and compressed models for real-time classification on microcontrollers. Collaborated with researchers from MIT, Kioxia R&D, and ETH Zurich.`,
    technologies: ['Machine Learning', 'Audio Classification', 'Microcontrollers', 'Python', 'TinyML'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1440985890253-d024718e8e44?q=80&w=1200&h=800&auto=format&fit=crop' // Bee image
  },
  {
    id: 'raynaud-research',
    title: 'Raynaud’s Disease Research',
    description: 'Multi-modal ML and HCI tools for healthcare.',
    fullDescription: `Designed cross-platform applications to analyze and predict symptoms for patients with Raynaud’s disease. 
    Developed full-stack frameworks with React Native and AWS, integrating multi-modal ML models for wearable health data. Collaborated with SDSU, Yale, and Rollins College experts.`,
    technologies: ['HCI', 'Multi-modal ML', 'Healthcare Applications', 'React Native', 'AWS'],
    link: '#',
    image: raynaudsimage
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
    image: fcnn  // Medical AI visualization
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
    image: chicagocrime // Crime data visualization
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
    image: infographic // Health and obesity image
  },
  {
    id: 'mcmc-decryption',
    title: 'MCMC Text Decryption Algorithm',
    description: 'Markov Chain Monte Carlo-based text decryption for substitution ciphers.',
    fullDescription: `Developed a Markov Chain Monte Carlo (MCMC) algorithm to decrypt substitution ciphers by leveraging bigram frequency analysis of reference texts. 
    Implemented optimized text preprocessing and scoring functions to handle large datasets efficiently. Conducted comprehensive analysis of algorithm parameters, including iterations, text length, and scaling, and their impact on decryption accuracy.`,
    technologies: ['Python', 'NumPy', 'cProfile', 'Line Profiler', 'SnakeViz'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&h=800' // Encryption-themed image
  },
  {
    id: 'parallel-factorization',
    title: 'Parallel Prime Factorization',
    description: 'Parallelized algorithms for efficient prime factorization.',
    fullDescription: `Designed and implemented parallel algorithms for prime factorization of large datasets using Python's multiprocessing capabilities. 
    Benchmarked runtime improvements by comparing sequential, map(), and multiprocessing implementations. Analyzed speedup and efficiency across varying core counts, achieving significant reductions in runtime and exploring theoretical versus observed speedup.`,
    technologies: ['Python', 'Multiprocessing', 'Matplotlib', 'Sorting Algorithms'],
    link: '#',
    image: 'https://i.imghippo.com/files/dql4991sxI.png' // Abstract geometric design for parallelism
  },
  {
    id: 'college-scorecard',
    title: 'College Scorecard Analysis',
    description: 'Python-based educational data analysis tool with API integration.',
    fullDescription: `Developed a comprehensive Python, PostgreSQL tool to collect and analyze educational data through IPED's API. 
    Using streamlit, I created an interactive dashboard for viewing, tracking and evaluating institutional performance and changes.`,
    technologies: ['Python', 'PostgreSQL', 'Streamlit', 'Psycopg', 'SQL'],
    link: '#',
    image: scorecard  // Data dashboard
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
    image: 'https://i.imghippo.com/files/dKsI4998XY.png'  // Code on multiple screens
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&h=800'  // Data visualization graphs
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
    image: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200&h=800'
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
    image: apred // Data prediction/analysis
  },
  {
    id: 'vacuum-agent',
    title: 'AI Vacuum Agent',
    description: 'Self-learning AI vacuum cleaner simulation.',
    fullDescription: `Built an artificial intelligence learning program modeling a self-sustained vacuum with predictive 
    cleaning patterns. The project demonstrates practical applications of AI in robotics and autonomous systems using 
    Python and Scikit-learn.`,
    technologies: ['Python', 'Artificial Intelligence', 'Scikit-learn', 'Robotics'],
    link: '#',
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&h=800' // Modern robotics/automation
  }
];