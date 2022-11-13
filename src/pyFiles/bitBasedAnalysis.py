import pandas as pd
import numpy as np

bits_info = pd.DataFrame({
    "DRILL_BIT_NAME":["Buzz Drilldrin", "AstroBit", "Apollo", "ChallengDriller"],
    "CPR": [5000,3000,1000,10000],
    "CPF": [1.5,1,4,0],
    "CPH":[0,1500,2500,0]
})
for i in range(1,21):
 filename = "/Users/prathmeshbhatt/Desktop/hackathon/hackathon-eog-2023/src/DataFiles/Asteroid" + str(i) + "clean.csv"
 csv = pd.read_csv(filename)
 numeric_cols = csv.loc[:, csv.columns != 'DRILL_BIT_NAME']
 numeric_cols.loc[:][numeric_cols < 0] = np.NAN                         
 numeric_cols["DRILL_BIT_NAME"] = csv["DRILL_BIT_NAME"]
 data = numeric_cols.dropna()

 aggregated = (
    data
 )

 aggregated = aggregated.merge(bits_info)

 aggregated["NEXT_DEPTH"] = aggregated["BIT_DEPTH"].shift(-1)
 aggregated["NEXT_RATE"] = aggregated["RATE_OF_PENETRATION"].shift(-1)
 aggregated["PREV_ID"] = aggregated["DRILL_BIT_ID"].shift(1)
 aggregated["DEPTH_INTERVAL"] = aggregated["NEXT_DEPTH"] - aggregated["BIT_DEPTH"]


 def interval(x):
    #print(x["DEPTH_INTERVAL"])
    #print(x["BIT_DEPTH"])

     if x["BIT_DEPTH"] == x["NEXT_DEPTH"]:
        return 0

     if x["PREV_ID"] == x["DRILL_BIT_ID"] and (x["RATE_OF_PENETRATION"] / x["DEPTH_INTERVAL"]) != 0:
        return pow(x["RATE_OF_PENETRATION"] / x["DEPTH_INTERVAL"], -1) 
     elif (x["RATE_OF_PENETRATION"] / x["DEPTH_INTERVAL"]) != 0:
         return pow(x["RATE_OF_PENETRATION"] / x["DEPTH_INTERVAL"], -1) + (x["BIT_DEPTH"]/6000)
     else: 
         return 0

 aggregated["TIME_INTERVAL"] = aggregated.apply(interval, axis=1)

 def cpr_add(x):
     if x["PREV_ID"] == x["DRILL_BIT_ID"]:
         return (x["DEPTH_INTERVAL"] * x['CPF']) + (x["TIME_INTERVAL"] * x['CPH'])
     else:
         return x['CPR'] + (x["DEPTH_INTERVAL"] * x['CPF']) + (x["TIME_INTERVAL"] * x['CPH'])

 aggregated["cost"] = aggregated.apply(cpr_add, axis=1)

 aggregated
 df = aggregated
 filename2 = "/Users/prathmeshbhatt/Desktop/hackathon/hackathon-eog-2023/src/WriteFiles2/Asteroid" + str(i) + ".csv"
 df.to_csv(filename2)


#return total sum => aggregated['cost'].sum()