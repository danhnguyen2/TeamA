import os
os.chdir('C:\\Users\\Danh\\Desktop\\CSE3PRA & CSE3PRB')

with open('Part 1 - Extract.txt') as plates:
    text = plates.readlines()
	
plate =[]

lPlate = 107

for r_Num in range(1,lPlate):
	for row_Num in range(0,len(text)):
		if text[row_Num].startswith('*' + str(r_Num) + ' '):
			for p_rows in range(row_Num,len(text)):
				plate.append(text[p_rows])
				if text[p_rows+1].startswith('*') == True or text[p_rows+1].startswith(str(r_Num+1) + ' ') == True:
					fPlate = '\n'.join(plate)
					file1 = open("ReferenceNumber.txt","a")
					file1.writelines(fPlate.split()[0] + '\n')
					file1.close()
					plate = []
					break
		if text[row_Num].startswith(str(r_Num) + ' '):
			for p_rows in range(row_Num,len(text)):
				plate.append(text[p_rows])
				if text[p_rows+1].startswith('*') == True or text[p_rows+1].startswith(str(r_Num+1) + ' ') == True:
					fPlate = '\n'.join(plate)
					file1 = open("ReferenceNumber.txt","a")
					file1.writelines(fPlate.split()[0] + '\n')
					file1.close()
					plate = []
					break
					
for row_Num in range(0,len(text)):
	if text[row_Num].startswith(str(lPlate) + ' ') or text[row_Num].startswith('*' + str(lPlate) + ' '):
		for p_rows in range(row_Num,len(text)):
			plate.append(text[p_rows])
			fPlate = '\n'.join(plate)
			file1 = open("ReferenceNumber.txt","a")
			file1.writelines(fPlate.split()[0] + '\n')
			file1.close()
			plate = []
			break