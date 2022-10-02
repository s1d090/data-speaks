import pandas as pd
import json

data = pd.read_csv('./public/use_energy_source.csv')
data = data.drop(data.columns[62], axis=1).set_index("state")
index = data.index
final = []

# iloc
for i in data.index:
    add = {}
    add["state"] = i
    value = {}
    d = data.loc[i]
    for j in range(0, 2021-1960):
       value[str(1960+j)] = d.iloc[j]
    add["value"] = value
    final.append(add)

    # final[i] = [j for j in data.loc[i]]
final = final[0:len(final) - 1]
json_string = json.dumps(final)
print(json_string)

# for i in data[data["state"] == "AZ"]:
    # print(data[data["state"] == "AZ"][i])
