library("simstudy")
library("jsonlite")

# generate simstudy data reference table
def <- defData(varname="alive", dist = "binary", formula = 1, id="id")

# Generate data
numHens <- 90
hens <- genData(numHens, def)

# Create treatment 'coops'
hens_sorted <- trtAssign(hens, n = 9, balanced = TRUE, grpName = "coopID")

# Save to file
filename = "src/data/hens.json"
write(toJSON(hens_sorted, pretty=TRUE), filename)
