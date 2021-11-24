import xlrd
import pandas as pd 
fileName = 'ActionItems Data.xlsx'
book = xlrd.open_workbook("ActionItems Data.xlsx")
df = pd.read_excel(fileName)
df.dropna(how='all')

#returns a dataframe based on the staging group, action nature, and action type
def parse(stage_group_num, action_nature_type, action_type):
	#Example: df.loc[df["StageGroup"] == 1]
	stage_group = df.loc[df["StageGroup"] == stage_group_num]

	#stage_group.loc[stage_group["Action Nature"] == "Workup"]
	action_nature = stage_group.loc[stage_group["Action Nature"] == action_nature_type]

	#action_type.loc[action_type["Action Type"] == "Suggestion"]
	action_type_var = action_nature.loc[action_nature["Action Type"] == action_type]

	return action_type_var


#returns a dataframe based on the staging group and action nature
def parseAction_nature(stage_group_num, action_nature_type):
	#Example: df.loc[df["StageGroup"] == 1]
	stage_group = df.loc[df["StageGroup"] == stage_group_num]


	#stage_group.loc[stage_group["Action Nature"] == "Workup"]
	action_nature = stage_group.loc[stage_group["Action Nature"] == action_nature_type]

	return action_nature


#returns the unqiue action natures and action types for each stage group
def Action_natures_and_Action_type(stageGroup):

	#Possible types of action types
	x = ["Workup", "Treatment", "Follow Up", "Initial Treatment", "Adjuvant Treatment", "Additional Workup"]
	#Possible action types
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

	return (Action_nature, Action_type)


#Handles the internal formating of the titles, notes, and classes
def internalFormatting(df_list, index):
	formated5 = "\t\t\t\t" + "{ \n" 
	formated6 = ""
	formated7 = ""
	formated8 = ""

	quotation= "\""

	if type(df_list[index][3]) == str:
		title = str(df_list[index][3]).replace("\'", "\"").replace("\n", "")
		formated6 = "\t\t\t\t\t" + quotation + "title" + quotation + ": " +  quotation + (title) + quotation
		if type(df_list[index][4]) == str or type(df_list[index][5]) == str:
			formated6 += ","

	if type(df_list[index][4]) == str:
		notes = str(df_list[index][4].split("\\")).replace("\'", "\"")
		notes = notes.replace("\\n", "")

		formated7 = "\n\t\t\t\t\t" + quotation + "notes" + quotation + ": " +  (notes)
		if type(df_list[index][5]) == str:
			formated7 += ","

	if type(df_list[index][5]) == str:
		classes = str(df_list[index][5]).replace("\'", "\"")
		formated8 = "\n\t\t\t\t\t" + quotation + "classes" + quotation + ": [" + quotation + (classes) + quotation + "]"

	formated9 = "\n\t\t\t\t" + "} \n"

	print(formated5 + formated6 + formated7 + formated8)

	#Checks to see if the last element to see whether comma is needed
	if index != len(df_list) -1: 
		formated9 = "\n\t\t\t\t" + "}, \n"
		print(formated9)
	else:
		formated9 = "\n\t\t\t\t" + "} \n"
		print(formated9)


#Formats the json
def formatting():

	#Returns a list of all the unique staging groups
	x = df.StageGroup.unique()

	stage_group = []
	for m in x:
		try:
			stage_group.append(int(m))
		except ValueError as verr:
			pass
		except Exception as ex:
			pass
	#opening Json parethensis
	print("{")

	#Defines the quatation mark character
	quotation= "\""

	#For each stageing group
	for stageGroup in stage_group: 
		
		formated1 = quotation + str(stageGroup) + quotation + ": { \n"
		formated2 = "\t" + quotation + "actions" + quotation + ": {"

		print(formated1 + formated2)
	
		#Get the unique action nature and action types for each stage group
		(Action_nature, Action_type) = Action_natures_and_Action_type(stageGroup)

		for actionNature in Action_nature: 
			formated3 = "\t\t" + quotation + actionNature +  quotation + ": {"
			print(formated3)

			for actionType in Action_type:
				titles = []
				comments = []
				NCCNRef = []

				df_parsed = parse(stageGroup, actionNature, actionType)
				df_list = df_parsed.values.tolist()

				formated4 = "\t\t\t" + quotation + actionType + quotation + ": [ \n"

				print(formated4)
				
				for index in range(len(df_list)):
					
					internalFormatting(df_list, index)

				#Checks to see if the last element to see whether comma is needed
				if actionType != Action_type[-1] or (index != len(df_list) -1 and len(df_list) != 0): 
					formated10 = "\n\t\t\t" + "], \n"
					print(formated10)
				else:
					formated10 = "\n\t\t\t" + "] \n"
					print(formated10)

			if actionNature == Action_nature[-1]:
				print("}")
			else:
				formated10_1 = "\n\t\t" + "}, \n"
				print(formated10_1)
			
		
		print("}")
		#Checks to see if the last element to see whether comma is needed
		if stageGroup != stage_group[-1]: 
			formated12 = "\t" + "}, \n"
			print(formated12)
		else:
			formated12 = "\t" + "} \n"
			print(formated12)

	#closeing Json paren
	print("}")

formatting()
