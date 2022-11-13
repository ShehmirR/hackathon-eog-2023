import pandas as pd
import numpy as np
import csv
import sys


bits_info = pd.DataFrame({
    "DRILL_BIT_NAME":["Buzz Drilldrin", "AstroBit", "Apollo", "ChallengDriller"],
    "CPR": [5000,3000,1000,10000],
    "CPF": [1.5,1,4,0],
    "CPH":[0,1500,2500,0]
})
for i in range(1, 21):
    #Asteroid 1 - clean.csv"
 filename = "/Users/prathmeshbhatt/Desktop/hackathon/hackathon-eog-2023/src/DataFiles/Asteroid" + str(i)  + "clean.csv" 
 csv = pd.read_csv(filename)
 numeric_cols = csv.loc[:, csv.columns != 'DRILL_BIT_NAME']
 numeric_cols.loc[:][numeric_cols < 0] = np.NAN                         
 numeric_cols["DRILL_BIT_NAME"] = csv["DRILL_BIT_NAME"]
 data = numeric_cols.dropna()

 aggregated = (
    data
    .groupby(['DRILL_BIT_ID','DRILL_BIT_NAME'])
    .agg({'BIT_DEPTH': ['min', 'max'], 'RATE_OF_PENETRATION' : ['mean']})
    .pipe(lambda x: x.set_axis(x.columns.map('_'.join), axis=1))
 )

 aggregated.reset_index(inplace=True)

 aggregated["total_depth"] = aggregated["BIT_DEPTH_max"] - aggregated["BIT_DEPTH_min"]
 aggregated["total_hours"] = aggregated["total_depth"] / aggregated["RATE_OF_PENETRATION_mean"]
 aggregated = aggregated.merge(bits_info)

# Do your computation
 aggregated["cost"] = aggregated['CPR'] + aggregated["total_depth"] * aggregated['CPF'] + aggregated["total_hours"] * aggregated['CPH']

 print(aggregated)
 df = aggregated
 filename2 = "/Users/prathmeshbhatt/Desktop/hackathon/hackathon-eog-2023/src/WriteFiles/Asteroid" + str(i) + ".csv"
 df.to_csv(filename2)



#total sum => aggregated['cost'].sum()