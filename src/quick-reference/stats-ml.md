---
theme: [deep-space, wide]
title: Quick Reference
toc: true,
---

<body>

# Statistical & Machine Learning Reference Guide

---

## Descriptive Statistics

### Central Tendency Measures

#### Mean (Arithmetic Average)

```tex
\bar{x} = \frac{1}{n}\sum_{i=1}^n x_i
```

**When to use**: 
- For normally distributed data
- When outliers are not a concern
- When you need a measure sensitive to all values

**Example**: Average daily sales, average temperature

#### Median
The middle value when data is ordered

**When to use**:
- When data is skewed
- When outliers are present
- For ordinal data

**Example**: House prices, income distributions

#### Mode
Most frequently occurring value

**When to use**:
- For categorical data
- When looking for most common occurrences
- In multimodal distributions

### Dispersion Measures

#### Standard Deviation

```tex
s = \sqrt{\frac{\sum_{i=1}^n (x_i - \bar{x})^2}{n-1}}
```

**When to use**:
- To measure spread around the mean
- When data is approximately normal
- When units matter

#### Interquartile Range (IQR)

```tex
IQR = Q_3 - Q_1
```
**When to use**:
- When data is skewed
- To identify outliers
- When median is preferred over mean

---

## Statistical Tests

### Parametric Tests

#### T-Test (Student's t-test)
For comparing means:

```tex
t = \frac{\bar{x} - \mu_0}{s/\sqrt{n}}
```

**When to use**:
- Comparing sample mean to population mean
- Comparing means of two groups
- When data is normally distributed

**Example**: 
- Testing if a new drug treatment is effective
- Comparing test scores between two classes

#### ANOVA (Analysis of Variance)
F-statistic calculation:

```tex
F = \frac{\text{Between-group variability}}{\text{Within-group variability}}
```

**When to use**:
- Comparing means of 3+ groups
- Testing effects of categorical variables
- When assumptions of normality and equal variance hold

### Non-parametric Tests

#### Mann-Whitney U Test
Alternative to t-test when normality cannot be assumed

**When to use**:
- Comparing two independent groups
- When data is ordinal or continuous but not normal
- Small sample sizes

#### Kruskal-Wallis Test
Non-parametric alternative to ANOVA

**When to use**:
- Comparing 3+ independent groups
- When normality cannot be assumed
- When dealing with ordinal data

---

## Regression Analysis

### Linear Regression

```tex
y = \beta_0 + \beta_1x + \epsilon
```

**When to use**:
- Predicting continuous outcomes
- When relationship appears linear
- When assumptions of linearity, independence, homoscedasticity are met

**Key Metrics**:
- R-squared (coefficient of determination)
- RMSE (Root Mean Square Error)
- p-values for coefficients

### Multiple Linear Regression

```tex
y = \beta_0 + \beta_1x_1 + \beta_2x_2 + ... + \beta_nx_n + \epsilon
```

**When to use**:
- Multiple predictors needed
- Continuous outcome variable
- Linear relationships assumed

### Logistic Regression

```tex
P(Y=1) = \frac{1}{1 + e^{-(\beta_0 + \beta_1x)}}
```

**When to use**:
- Binary outcome prediction
- Probability estimation
- Classification problems

---

## Classification Algorithms

### Decision Trees
Recursive partitioning using information gain or Gini impurity

**When to use**:
- Need interpretable results
- Mixed data types
- Non-linear relationships
- Hierarchical decision making

**Advantages**:
- Easy to interpret
- Handles missing values
- No data scaling needed

### Random Forest
Ensemble of decision trees with:
- Bootstrap sampling
- Random feature selection
- Majority voting

**When to use**:
- High-dimensional data
- Complex relationships
- When overfitting is a concern

### Support Vector Machines (SVM)
Finding optimal hyperplane:

```tex
f(x) = \text{sign}(\sum_{i=1}^n \alpha_i y_i K(x_i, x) + b)
```

**When to use**:
- Binary classification
- High-dimensional data
- When clear margin of separation exists

---

## Clustering Methods

### K-Means Clustering
Minimizing within-cluster sum of squares:

```tex
\min_{\{S_k\}_{k=1}^K} \sum_{k=1}^K \sum_{x_i \in S_k} ||x_i - \mu_k||^2
```

**When to use**:
- When number of clusters is known
- Spherical clusters expected
- Large datasets

### Hierarchical Clustering

**When to use**:
- Unknown number of clusters
- Need dendrogram visualization
- Smaller datasets

### DBSCAN
Density-based clustering

**When to use**:
- Arbitrary shaped clusters
- When noise/outliers present
- When cluster number unknown

---

## Dimensionality Reduction

### Principal Component Analysis (PCA)
Finding orthogonal components maximizing variance

**When to use**:
- Feature reduction needed
- Correlated features present
- Visualization of high-dim data

### t-SNE
t-Distributed Stochastic Neighbor Embedding

**When to use**:
- Visualization of high-dim data
- When local structure important
- Non-linear relationships

---

## Time Series Analysis

### Moving Average

```tex
MA(n)_t = \frac{1}{n}\sum_{i=0}^{n-1} x_{t-i}
```

**When to use**:
- Smoothing time series
- Trend identification
- Noise reduction

### Exponential Smoothing

```tex
S_t = \alpha x_t + (1-\alpha)S_{t-1}
```

**When to use**:
- Short-term forecasting
- When recent values more important
- Trend and seasonality present

### ARIMA Models
(Autoregressive Integrated Moving Average)

**When to use**:
- Complex time series
- Seasonal patterns
- Need statistical forecasting

**Components**:
- AR: Autoregression
- I: Integration (differencing)
- MA: Moving Average

---

## Selection Guidelines

1. **Data Type**:
   - Continuous → Regression, PCA
   - Categorical → Classification, Chi-square
   - Time-based → Time Series Analysis
   - Mixed → Decision Trees

2. **Sample Size**:
   - Small (n < 30) → Non-parametric tests
   - Large → Parametric tests, Deep Learning

3. **Assumptions**:
   - Normal distribution → Parametric tests
   - Non-normal → Non-parametric alternatives
   - Linear relationships → Linear regression
   - Non-linear → Decision trees, SVM

4. **Goal**:
   - Prediction → Regression, Classification
   - Pattern Discovery → Clustering
   - Dimension Reduction → PCA, t-SNE
   - Time Forecasting → ARIMA, Exponential Smoothing

---


</body>

<style>

a[href] {
  color: #7fc8b6;
}

</style>