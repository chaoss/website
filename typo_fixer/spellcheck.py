from spellchecker import SpellChecker
import os
import re
# from pprint import pprint

########################## USER PARAMETERS ##########################

username = 'chaoss'                                                     # replace username with your github username
repo_name = 'website'                                                   # replace repo_name with your repository name
file_ext = '.md'                                                        # replace with file ext that need to be scanned [if scan all files then leave it empty]
skip_files = ['../release/contributors.md',\
              '../Community/alumni.md',\
              '../release/202001/contributors.md',\
              '../release/202008/contributors.md',\
              '../release/201908/contributors.md',\
              '../release/202102/contributors.md']                      # list of files to be skipped [if none, then leave the list empty]
output_file = 'output.csv'                                              # name of output CSV file

#####################################################################

spell = SpellChecker()
repo_link = 'https://github.com/'+username+'/'+repo_name+'/blob/master'

# output file
output = open(output_file,'a')
output.write('Hyperlink, File-Name, Line-Number, Word,Substitutes')
output.write('\n')

print('Loading Blacklisted words...')

# make a list of blacklisted words
with open('blacklisted_words.txt') as f:
    b_words = f.readlines()
b_words = [x.strip() for x in b_words] 

spell.word_frequency.load_words(b_words)

files = []

print('Finding all files with the specified extension...')

# make list of files for scanning
for root, dirs, f in os.walk("../"):
    for file in f:
        if file.endswith(".md"):
            files.append(os.path.join(root, file))

print('Removing skip_files (if any)')

# remove files with names
for i in skip_files:
    files.remove(i)

total = len(files)  # use in iteration
print('Done\nTotal number of files found -',total)
print('Now checking for typos :\n')
count = 1
# pprint(files)

# read file content line by line
for file in files:

    print("#[{}/{}] -> Filename : {}".format(count,total,file))
    count+=1

    with open(file) as f:
        content = f.readlines()
    content = [x.strip() for x in content] 

    # pprint(content)

    # now traverse line by line
    # strip & split them
    # then again remove punctuations & strip split
    # Dont check for hyperlinks
    # use spell checker
    # keep index using line number
    # append to output file

    for i in range(len(content)):
        if 'http' not in content[i]:
            for j in content[i].strip().split():
                for k in re.sub(r"[,[\].;|'`@:\-*‘…³°%#+?“”’_=\\<>/(){}\"!&$]+\ *", " ", j).strip().split():
                    # print(i,k)
                    if len(k) > 2:
                        alt = spell.candidates(k)

                        if k not in alt:
                            print(i,', ',k,', ',alt)

                            text = repo_link + file[2:] + ', ' + file + ', ' + str(i) + ', ' + k + ',' + str(alt) + '\n'
                            output.write(text)

print('\nDone\nCheckout {} for typos'.format(output_file))
