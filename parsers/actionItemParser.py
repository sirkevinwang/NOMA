import xlrd
import pandas as pd 
fileName = 'ActionItems Data.xlsx'
book = xlrd.open_workbook("ActionItems Data.xlsx")
df = pd.read_excel(fileName)


#x = df.StageGroup.unique()
#filter out the non stageGroup 
#x1 = [n for n in x if type(n) == int]
#print(x1)

#for stage_group in x1:
#	print(df.loc[df["Title"] == stage_group])


def parse(stage_group_num, action_nature_type, action_type):
	#Example: df.loc[df["StageGroup"] == 1]
	stage_group = df.loc[df["StageGroup"] == stage_group_num]


	#stage_group.loc[stage_group["Action Nature"] == "Workup"]
	action_nature = stage_group.loc[stage_group["Action Nature"] == action_nature_type]

	#action_type.loc[action_type["Action Type"] == "Suggestion"]
	action_type_var = action_nature.loc[action_nature["Action Type"] == action_type]

	return action_type_var


def parseAction_nature(stage_group_num, action_nature_type):
	#Example: df.loc[df["StageGroup"] == 1]
	stage_group = df.loc[df["StageGroup"] == stage_group_num]


	#stage_group.loc[stage_group["Action Nature"] == "Workup"]
	action_nature = stage_group.loc[stage_group["Action Nature"] == action_nature_type]

	return action_nature





def formatting():

	x = df.StageGroup.unique()
	stage_group = [n for n in x if type(n) == int]

	print("{")



	for stageGroup in stage_group: 
		quotation= "\""

		formated1 = quotation + str(stageGroup) + quotation + ": { \n"

		formated2 = "\t" + quotation + "actions" + quotation + ": {"

		print(formated1 + formated2)


		x = ["Workup", "Treatment", "Follow Up", "Initial Treatment", "Adjuvant Treatment", "Additional Workup"] # this thing needs to scale
		y = ["Suggestion", "Consideration", "Not Recommended"]

		Action_nature = []
		Action_type = []

		for actionNature in x: 
			types1 = parseAction_nature(stageGroup, actionNature)

			if len(types1) != 0:
				Action_nature.append(actionNature)
			for actionType in y: 
				types2 = parse(stageGroup, actionNature, actionType)
				if len(types2) != 0:
					Action_type.append(actionType)
			




		Action_nature = list(dict.fromkeys(Action_nature))
		Action_type = list(dict.fromkeys(Action_type))

	


		for actionNature in Action_nature: 

			#stage_group = df.loc[df["StageGroup"] == stageGroup]

			if len("hi") != 0:
				formated3 = "\t\t" + quotation + actionNature +  quotation + ": {"
				print(formated3)

				for actionType in Action_type:
					titles = []
					comments = []
					NCCNRef = []

					what = parse(stageGroup, actionNature, actionType)

					testing = what.values.tolist()

					formated4 = "\t\t\t" + quotation + actionType + quotation + ": [ \n"

					print(formated4)
					
					for index in range(len(testing)):
						

						formated5 = "\t\t\t\t" + "{ \n" 

						formated6 = ""
						formated7 = ""
						formated8 = ""

						if type(testing[index][3]) == str:

							formated6 = "\t\t\t\t\t" + quotation + "title" + quotation + ": " +  quotation + (str(testing[index][3]).replace("\'", "\"").replace("\n", "")) + quotation
							if type(testing[index][4]) == str or type(testing[index][5]) == str:
								formated6 += ","

						if type(testing[index][4]) == str:

							notes = str(testing[index][4].split("\\")).replace("\'", "\"")
							notes = notes.replace("\\n", "")

							formated7 = "\n\t\t\t\t\t" + quotation + "notes" + quotation + ": " +  (notes)
							if type(testing[index][5]) == str:
								formated7 += ","

						if type(testing[index][5]) == str:
							formated8 = "\n\t\t\t\t\t" + quotation + "classes" + quotation + ": [" + quotation + (str(testing[index][5]).replace("\'", "\"")) + quotation + "]"

						formated9 = "\n\t\t\t\t" + "} \n"


						print(formated5 + formated6 + formated7 + formated8)

						if index != len(testing) -1: 
							formated9 = "\n\t\t\t\t" + "}, \n"
							print(formated9)
						else:
							fformated9 = "\n\t\t\t\t" + "} \n"
							print(fformated9)


			
					if actionType != Action_type[-1] or index != len(testing) -1: 
						formated10 = "\n\t\t\t" + "], \n"
						print(formated10)
					else:
						formated10 = "\n\t\t\t" + "] \n"
						print(formated10)

				if actionNature == Action_nature[-1]:
				#if actionNature != Action_nature[-1]: 
					print("}")
				else:
					formated10_1 = "\n\t\t" + "}, \n"
					print(formated10_1)
					
					
		
		print("}")
		if stageGroup != stage_group[-1]: 
			formated12 = "\t" + "}, \n"
			print(formated12)
		else:
			formated12 = "\t" + "} \n"
			print(formated12)





formatting()


print("}")







"""
#Get all the stage group and sort by work up
Workup = test.loc[test["Action Nature"] == "Workup"]
print("Workup", Workup.head())

print("------------ Suggestion ------------")
Suggestion = Workup.loc[Workup["Action Type"] == "Suggestion"]
print("Suggestion", Suggestion.head())

print("------------ Consideration ------------")
Consideration = Workup.loc[Workup["Action Type"] == "Consideration"]
print("Consideration", Consideration.head())

print("------------ Not Recommended ------------")
Not_Recommended = Workup.loc[Workup["Action Type"] == "Not Recommended"]
print("Not Recommended", Not_Recommended.head())

print(Suggestion["Title"])

Treatment = test.loc[test["Action Nature"] == "Treatment"]
print("Treatment", Treatment.head())

FollowUp = test.loc[test["Action Nature"] == "Follow Up"]
print("FollowUp", FollowUp.head())

print("------------ Suggestion ------------")
Suggestion = FollowUp.loc[FollowUp["Action Type"] == "Suggestion"]
print("Suggestion", Suggestion.head())

print("------------ Consideration ------------")
Consideration = FollowUp.loc[FollowUp["Action Type"] == "Consideration"]
print("Consideration", Consideration.head())

print("------------ Not Recommended ------------")
Not_Recommended = FollowUp.loc[FollowUp["Action Type"] == "Not Recommended"]
print("Not Recommended", Not_Recommended.head())

#print(df.StageGroup.unique())
"""

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

stage_group_initial = print("initial, " + str(int(sh.cell_value(1,0))))

stage_list = []








