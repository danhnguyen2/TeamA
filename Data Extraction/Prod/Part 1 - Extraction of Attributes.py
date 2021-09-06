import os
import csv
os.chdir('C:\\Users\\Danh\\Desktop\\CSE3PRA & CSE3PRB')

with open('Part 1 - Extract.txt') as plates:
    text = plates.read()
	
entries = []
attributes = ['T.', 'Ht.', 'ht.', 'Actual', 'PLATE', 'Diam.', 'diam.', 'Max.']
lines = ''
rEntry = text.splitlines()

with open('attributes.csv', 'a', newline = '') as csvfile:
        fieldnames = ['Entry Number', 'Location', 'Height', 'Diameter', 'Plate', 'Reference', 'Description']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writeheader()

for line in rEntry:
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
    fHeight = ''
    diameter = ''
    fDiameter = ''
    plate = ''
    description = ''
    reference = ''
    last_attribute_number = 0
    offset = 0
    for token in sEntry:
        location = location + token + ' '
        try:
            if sEntry[sEntry.index(token)+1] in attributes:
                break
        except IndexError:
            pass
    if 'Ht.' in sEntry:
        height = sEntry[sEntry.index('Ht.')+1]
        fHeight = height.replace(".","")
        fHeight = height.replace(",","")
    if 'ht.' in sEntry:
        height = sEntry[sEntry.index('ht.')+1]
        fHeight = height.replace(".","")
        fHeight = height.replace(",","")
    if 'Diam.' in sEntry:
        diameter = sEntry[sEntry.index('Diam.')+1]
        fDiameter = diameter.replace(".","")
        fDiameter = diameter.replace(",","")
    if 'diam.' in sEntry:
        diameter = sEntry[sEntry.index('diam.')+1]
        fDiameter = diameter.replace(".","")
        fDiameter = diameter.replace(",","")
    for line in rEntry:
        if line.startswith(eNum) and 'PLATE' in line:
            plate = line[line.index('PLATE'):]
        elif line.startswith(eNum) and 'PLATE' in rEntry[rEntry.index(line)+1]:
            plate = rEntry[rEntry.index(line)+1][rEntry[rEntry.index(line)+1].index('PLATE'):]
    if '(a)' in sEntry:
        description = ' '.join(sEntry[sEntry.index('(a)'):])
        if plate != '':
            for token in sEntry[sEntry.index('PLATE')+ len(plate.split()):]:
                reference = reference + token + ' '
                try:
                    if sEntry[sEntry.index(token)+1] == '(a)':
                        break
                except IndexError:
                    pass
        elif diameter != '':
            if 'diam.' in sEntry:
                for token in sEntry[sEntry.index('diam.')+ len(diameter.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '(a)':
                            break
                    except IndexError:
                        pass
            elif 'Diam.' in sEntry:
                for token in sEntry[sEntry.index('Diam.')+ len(diameter.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '(a)':
                            break
                    except IndexError:
                        pass
        elif height != '':
            if 'ht.' in sEntry:
                for token in sEntry[sEntry.index('ht.')+ len(height.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '(a)':
                            break
                    except IndexError:
                        pass
            elif 'Ht.' in sEntry:
                for token in sEntry[sEntry.index('Ht.')+ len(height.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '(a)':
                            break
                    except IndexError:
                        pass
    if '[a)' in sEntry:
        description = ' '.join(sEntry[sEntry.index('[a)'):])
        if plate != '':
            for token in sEntry[sEntry.index('PLATE')+ len(plate.split()):]:
                reference = reference + token + ' '
                try:
                    if sEntry[sEntry.index(token)+1] == '[a)':
                        break
                except IndexError:
                    pass
        elif diameter != '':
            if 'diam.' in sEntry:
                for token in sEntry[sEntry.index('diam.')+ len(diameter.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '[a)':
                            break
                    except IndexError:
                        pass
            elif 'Diam.' in sEntry:
                for token in sEntry[sEntry.index('Diam.')+ len(diameter.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '[a)':
                            break
                    except IndexError:
                        pass
        elif height != '':
            if 'ht.' in sEntry:
                for token in sEntry[sEntry.index('ht.')+ len(height.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '[a)':
                            break
                    except IndexError:
                        pass
            elif 'Ht.' in sEntry:
                for token in sEntry[sEntry.index('Ht.')+ len(height.split()) + 1:]:
                    reference = reference + token + ' '
                    try:
                        if sEntry[sEntry.index(token)+1] == '[a)':
                            break
                    except IndexError:
                        pass
    with open('attributes.csv', 'a', newline = '') as csvfile:
        fieldnames = ['Entry Number', 'Location', 'Height', 'Diameter', 'Plate', 'Reference', 'Description']
        writer = csv.DictWriter(csvfile, fieldnames = fieldnames)
        writer.writerow({'Entry Number' : eNum, 'Location' : location , 'Height' : fHeight, 'Diameter' : fDiameter, 'Plate' : plate, 'Reference' : reference, 'Description' : description})