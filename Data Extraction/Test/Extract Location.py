import os
os.chdir('C:\\Users\\Danh\\Desktop\\CSE3PRA & CSE3PRB')

with open('test.txt') as plates:
    text = plates.readlines()
	
plate =[]

lPlate = 6

location = []

for r_Num in range(1,lPlate):
	for row_Num in range(0,len(text)):
		if text[row_Num].startswith('*' + str(r_Num) + ' '):
			for p_rows in range(row_Num,len(text)):
				plate.append(text[p_rows])
				if text[p_rows+1].startswith('*') == True or text[p_rows+1].startswith(str(r_Num+1) + ' ') == True:
					fPlate = ' '.join(plate)
					sPlate = fPlate.split()
					for token in range(1, len(sPlate)):
						location.append(sPlate[token])
						if sPlate[token+1] == 'T.' or sPlate[token+1] == 'Ht.' or sPlate[token+1] == 'Actual' or sPlate[token+1] == 'PLATE' or sPlate[token+1] == 'Diam.' or sPlate[token+1] == 'Max.':
							fLocation = ' '.join(location)
							file1 = open("Location.txt","a")
							file1.writelines(fLocation + '\n')
							file1.close()
							plate = []
							location = []
							break				
		if text[row_Num].startswith(str(r_Num) + ' '):
			for p_rows in range(row_Num,len(text)):
				plate.append(text[p_rows])
				if text[p_rows+1].startswith('*') == True or text[p_rows+1].startswith(str(r_Num+1) + ' ') == True:
					fPlate = ' '.join(plate)
					sPlate = fPlate.split()
					for token in range(1, len(sPlate)):
						location.append(sPlate[token])
						if sPlate[token+1] == 'T.' or sPlate[token+1] == 'Ht.' or sPlate[token+1] == 'Actual' or sPlate[token+1] == 'PLATE' or sPlate[token+1] == 'Diam.' or sPlate[token+1] == 'Max.':
							fLocation = ' '.join(location)
							file1 = open("Location.txt","a")
							file1.writelines(fLocation + '\n')
							file1.close()
							plate = []
							location = []
							break