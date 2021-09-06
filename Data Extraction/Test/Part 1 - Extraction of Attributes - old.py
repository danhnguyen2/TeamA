import os
import csv
os.chdir('C:\\Users\\Danh\\Desktop\\CSE3PRA & CSE3PRB')

with open('Part 1 - Extract.txt') as plates:
    text = plates.read()
	
entries = []
attributes = ['T.', 'Ht.', 'Actual', 'PLATE', 'Diam.', 'Max.']
lines = ''

with open('attributes.csv', 'a', newline = '') as csvfile:
        fieldnames = ['Entry Number', 'Location', 'Height', 'Diameter', 'Plate', 'Description']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()

for line in text.splitlines():
    lines = lines + line
    if line == '':
        entries.append(lines)
        lines = ''

for entry in entries:
    sEntry = entry.split()
    eNum = sEntry.pop(0)
    location = ''
    lines = ''
    height = ''
    diameter = ''
    plate = ''
    description = ''
    for token in sEntry:
        location = location + token + ' '
        try:
            if sEntry[sEntry.index(token)+1] in attributes:
                break
        except IndexError:
            pass
    if 'Ht.' in sEntry:
        height = sEntry[sEntry.index('Ht.')+1]
        height = height.replace(".","")
        height = height.replace(",","")
    if 'ht.' in sEntry:
        height = sEntry[sEntry.index('ht.')+1]
        height = height.replace(".","")
        height = height.replace(",","")
    if 'Diam.' in sEntry:
        diameter = sEntry[sEntry.index('Diam.')+1]
        diameter = diameter.replace(".","")
        diameter = diameter.replace(",","")
    if 'diam.' in sEntry:
        diameter = sEntry[sEntry.index('diam.')+1]
        diameter = diameter.replace(".","")
        diameter = diameter.replace(",","")
    if 'PLATE' in sEntry:
        plate = ' '.join(sEntry[sEntry.index('PLATE')+1:sEntry.index('PLATE')+3])
    if '(a)' in sEntry:
        description = ' '.join(sEntry[sEntry.index('(a)'):])
    if '[a)' in sEntry:
        description = ' '.join(sEntry[sEntry.index('[a)'):])
    with open('attributes.csv', 'a', newline = '') as csvfile:
        fieldnames = ['Entry Number', 'Location', 'Height', 'Diameter', 'Plate', 'Description']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writerow({'Entry Number' : eNum, 'Location' : location , 'Height' : height, 'Diameter' : diameter, 'Plate' : plate, 'Description' : description})