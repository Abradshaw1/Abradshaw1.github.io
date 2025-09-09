@@ .. @@
 import apred from '../data/apred.png';
+
 export const projects = [
+  {
+    id: 'bayesian-alzheimers',
+    title: 'Bayesian Hierarchical Models for Alzheimer\'s Disease Pseudotime',
+    description: 'Analyzed Allen Institute SEA-AD brain dataset with simulation-based inference.',
+    fullDescription: `Analyzed Allen Institute SEA-AD brain dataset with simulation-based inference. 
+    Implemented bootstrapping, permutation tests, and Bayesian inference in Stan to study gene–pathology associations. 
+    Compared Poisson vs. Negative Binomial hierarchical pseudotime models, incorporating APOE genotype as covariate.`,
+    technologies: ['R', 'Stan', 'Bayesian Inference', 'Bootstrapping', 'Negative Binomial Modeling', 'Gene–Pathology Analysis'],
+    link: '#',
+    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&h=800' // Brain/neuroscience image
+  },
+  {
+    id: 'flight-delay-prediction',
+    title: 'Flight Delay Prediction – Pittsburgh International Airport',
+    description: 'Built a supervised pipeline to predict departure delays using pre-departure metadata.',
+    fullDescription: `Built a supervised pipeline to predict departure delays (≥15 min) using only pre-departure metadata (schedules, routes, weather, turnaround). 
+    Engineered features (aircraft delay history, precipitation, wind speed) and trained an XGBoost classifier with class imbalance handling, achieving AUC 0.839 on 2024 PIT data.`,
+    technologies: ['Python', 'XGBoost', 'Feature Engineering', 'Airline On-Time Performance Data'],
+    link: '#',
+    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&h=800' // Airport/airplane image
+  },
+  {
+    id: 'satellite-thermal-power',
+    title: 'Forecasting Satellite Thermal Power – ESA Mars Express',
+    description: 'Modeled thermal power across 7,000+ orbits using STL+ARIMA and Time Series Regression.',
+    fullDescription: `Modeled thermal power across 7,000+ orbits using STL+ARIMA and Time Series Regression (TSR) with exogenous telemetry (solar heating, eclipse duration, transmitter load). 
+    Achieved MAPE 12.9% with STL+ARIMA and 4.3% with TSR, enabling interpretable, energy-aware scheduling for spacecraft operations.`,
+    technologies: ['R', 'ARIMA/SARIMA', 'Time Series Regression', 'Space Telemetry Analysis'],
+    link: '#',
+    image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?auto=format&fit=crop&w=1200&h=800' // Space/satellite image
+  },
   {
     id: 'genai-ct',