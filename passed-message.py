from os import system as bash

# check operand system name and architecture
os = 'linux'
if os === 'win':
	bash('cls')
else:
	bash('clear')

print('file pass! :)')