import os
import pdfplumber
os.chdir('C:\\Users\\Danh\\Desktop\\CSE3PRA & CSE3PRB')

text = ''
with pdfplumber.open(r'RVP.pdf') as pdf:
	for page_number in range (55,82):
		page = pdf.pages[page_number]
		pText = page.extract_text()
		pText = pText.split('\n')
		del pText[0]
		pText = '\n'.join(pText)
		text += pText + '\n'
		
		
rows = text.split('\n')
plate = []

for r_Num in range(1,108):
    for row_Num in range(0,len(rows)):
        try:
            if rows[row_Num].startswith('*' + str(r_Num) + ' ') or rows[row_Num].startswith('*' + ' ' + str(r_Num) + ' '):
                for p_rows in range(row_Num,len(rows)):
                    plate.append(rows[p_rows])
                    if rows[p_rows+1].startswith('*') == True or rows[p_rows+1].startswith(str(r_Num+1) + ' ') == True:
                        fPlate = '\n'.join(plate)
                        file1 = open("ExtractedText.txt","a")
                        file1.writelines(fPlate + '\n' + '\n')
                        file1.close()
                        plate = []
                        break
        except IndexError:
            pass
for r_Num in range (1,108):
	for row_Num in range(0,len(rows)):
		try:
			if rows[row_Num].startswith(str(r_Num) + ' '):
				for p_rows in range(row_Num,len(rows)):
					plate.append(rows[p_rows])
					if rows[p_rows+1].startswith('*') == True or rows[p_rows+1].startswith(str(r_Num+1) + ' ') == True:
						fPlate = '\n'.join(plate)
						file1 = open("ExtractedText.txt","a")
						file1.writelines(fPlate + '\n' + '\n')
						file1.close()
						plate = []
						break
		except IndexError:
			pass