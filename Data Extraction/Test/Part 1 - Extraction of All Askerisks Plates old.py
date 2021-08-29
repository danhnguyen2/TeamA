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



for r_Num in range (1,108):
        for row in text.split('\n'):
            try:
                if row.startswith('*' + str(r_Num) + ' '):
                    plate = text[text.index('*' + str(r_Num) + ' '):text.index('*' + str(r_Num +1) + ' ')]
                    file1 = open("ExtractedText.txt","a")
                    file1.writelines(plate + '\n')
                    file1.close()
            except ValueError: 
                if row.startswith('*' + str(r_Num) + ' '):
                    plate = text[text.index('*' + str(r_Num) + ' '):text.index(str(r_Num +1) + ' ', text.index('*' + str(r_Num) + ' '), len(text))]
                    file1 = open("ExtractedText.txt","a")
                    file1.writelines(plate + '\n')
                    file1.close()
            except ValueError:
                pass