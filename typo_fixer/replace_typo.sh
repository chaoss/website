### This script is used to replace typos from the output file generate from spellcheck.py
### Usage - pass the output file as command line argument : $ ./replace_typo.sh output.csv
### Make sure that the last column of output CSV is a single word to be replaced, without brackets

#!/bin/bash

# make 3 arrays -> filename, words, subs
filename=($(awk -F ',' '{ print $2 }' $1))
word=($(awk -F ',' '{ print $4 }' $1))
subs=($(awk -F ',' '{ print $5 }' $1))

# remove 1st word of each array [CSV header]
filename=("${filename[@]:1}")
word=("${word[@]:1}")
subs=("${subs[@]:1}")

# loop over length of array & replace
for ((i=0 ; i < ${#subs[@]} ; i++))
do 
    echo "Replacing \"${word[$i]}\" with \"${subs[$i]}\" in \"${filename[$i]}\""
    sed -i s/${word[$i]}/${subs[$i]}/ ${filename[$i]}
done
