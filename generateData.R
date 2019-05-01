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

#
# Generate hen weight data
#

# simstudy data definition table

# weight
def <- defData(varname = "baseWeight", dist = "normal", formula = "2", variance=1)
# measurements
numMeasurements <- 12
def <- defData(def, varname = "nCount", dist = "nonrandom", formula = numMeasurements)
# time between intervals
def <- defData(def, varname = "mInterval", dist = "nonrandom", formula = 30)

dt <- genData(numHens, def)
dtPeriod <- addPeriods(dt)

# Add observedWeights
def2 <- defDataAdd(varname = "observedWeight", dist = "normal", formula = "baseWeight + .02 * time", variance = .2)
dtPeriod <- addColumns(def2, dtPeriod)

# Rename 'id' to 'henID'
setnames(dtPeriod, old=c("id"), new=c("henID"))

weightFilename = "src/data/hen_weights.json"
write(
  toJSON( dtPeriod[, c("henID", "period", "baseWeight", "observedWeight")],
          pretty=TRUE),
  weightFilename)
