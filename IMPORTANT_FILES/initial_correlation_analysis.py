# -*- coding: utf-8 -*-
"""Initial correlation analysis.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1Lwh2C7oyB13EakKRjCRCvgcr1tIT6xHG
"""



# Commented out IPython magic to ensure Python compatibility.
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
# %matplotlib inline
asteroid1= pd.read_csv("./Asteroid 16 - clean.csv")

sns.pairplot(asteroid1)