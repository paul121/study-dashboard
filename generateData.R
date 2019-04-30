library("simstudy")
library("jsonlite")

#
# Generate list of hens separated into coops
#

# simstudy data definition table
def <- defData(varname="alive", dist = "binary", formula = 1, id="id")

# Generate list of hens
numHens <- 90
hens <- genData(numHens, def)

# Create treatment 'coops'
hens_separated <- trtAssign(hens, n = 9, balanced = TRUE, grpName = "coopID")

# Save to file
filename = "src/data/hens.json"
write(toJSON(hens_separated, pretty=TRUE), filename)
