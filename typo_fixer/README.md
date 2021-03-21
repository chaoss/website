# Automated Typo Fixer

This folder contains scripts that are used for finding typos in a repository recursively & fixing them automatically
after manual approval/check.

Make sure to add this folder to the root of your repository, this is a strict requirement.

## Why

Manually hunting typos & fixing them on a large set of files is a tedious job,
instead we let the scripts do all the work.
The scripts are not limited to this particular
repository & can be used anywhere.

## Requirements

Pyspellchecker : `pip3 install pyspellchecker`

## Explanation + Usage

**The below explanation is in the order with the usage of the program :**

* `blacklisted_words.txt` : This file contains words that are to be skipped for spell check, like names or some other reserved/special words. Append/edit this file with each line containing 1 word.

* `spellcheck.py` : This is the main script, used for traversing the repository recursively
& scanning all the files with the specified extensions for typos. It then saves all the typos along
with some metadata \(explained below)

    The user need to set the below mentioned parameters in the file before running it:
    * Github username
    * Repository name
    * Extension of the files to be checked \(can be left blank to scan all files)
    * Path to files that are to be skipped \(eg - files dedicated for names that can generate false positives, can be left blank to skip none)
    * Output file name \(.csv)

    Run the file after setting the parameters : `python3 spellcheck.py` <br>
    This file will generate a `output.csv` file which is the default name (can be changed as parameter as explained above)

* `output.csv` : This is the output file generated from `spellcheck.py` which contains
all the typos along with some metadata. The format of the CSV is - <br>
    `hyperlink to that file`, `filename`, `line number`, `actual word`, `possible substitutes` <br>
    Now the user needs to edit this file & replace `possible substitutes` with a single
    word for replacement for typo, without the brackets

* `replace_typo.sh` : This is the final script used for replacing correct words with typos.
The script takes the output CSV file as command line argument. Make sure you have replaced the substitutes correctly & without brackets! <br>
Replace the typos : `./replace_typos.sh output.csv`

## Sample

The sample folder in this repository contains screenshots of a test run for the above scripts
