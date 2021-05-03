import xlrd
book = xlrd.open_workbook("StagingGroups Data.xlsx")
print("The number of worksheets is {0}".format(book.nsheets))
print("Worksheet name(s): {0}".format(book.sheet_names()))
sh = book.sheet_by_index(0)
print("{0} {1} {2}".format(sh.name, sh.nrows, sh.ncols))

#Group Number
print(sh.cell_value(0,0))

#Stage 
print(sh.cell_value(0,1))

#Five Year Survival
print(sh.cell_value(0,2))

#Pathologic Stage
print(sh.cell_value(0,3))

print("")

for index in range(1, sh.nrows - 1):
	print("\"" + sh.cell_value(index,1) + "\" : { \"survival_rate\": \"" + str(sh.cell_value(index,2)) + "%\", \"action_group\": \"" + str(int(sh.cell_value(index,0))) + "\", \"pathologic_stage\": \"" + str(sh.cell_value(index,3)) + "\" }, ")

index = sh.nrows - 1
print("\"" + sh.cell_value(index,1) + "\" : { \"survival_rate\": \"" + str(sh.cell_value(index,2)) + "%\", \"action_group\": \"" + str(int(sh.cell_value(index,0))) + "\", \"pathologic_stage\": \"" + str(sh.cell_value(index,3)) + "\" } ")



