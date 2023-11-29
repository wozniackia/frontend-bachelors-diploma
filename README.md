## Co jest do zrobienia i poprawy:

- minisidebar nie zmienia się konkretnych stronach.
- w związku z tym ^ strony nie są połączone ale na domyślnym porcie macie proste menu ze wszystkimi stronami ( tylko dla nas)
- nie ma formularzy dodawania i edycji 
- nie ma strony konfiguracji (placówka - konfiguracja(dyrektor) w figmie)
-lista obecności nie działa, trzeba zrobić że każdy przycisk przy dziecku ma state ustawiony na true, tak by nauczyciel tylko odznaczał nieobecnych
no i musi się to na bieżąco z każdą zmianą statea zmieniać w bazie/serwisie obecności
- nie ma galerii, ale szczerze nie mam pomysłu jak się dodaje pliki/zdjęcia na stronę i jak to napisać żeby działało.

## Endpointy:

- [ ] /register
- [ ] /login
- [ ] /facilities
	- wszystkie placowki danego dyrektora
- [ ] /groups
	- wszystkie grupy danej placowki
- [ ] /facilitySummary
	- ile obecnych dzieci dzisiaj
	- ile nieobecnych dzisiaj
	- ile nieobecnych jutro
	- ilosc wszystkich dzieci w placowce)
- [ ] /diets
	- per placowka
- [ ] /absence
	- zgloszenia nieobecnosci w tym tygodniu
	- imie nazwisko dziecka, grupa, data
- [ ] /attendance
	- per grupa lub placowka
	- kazde dziecko (imie i nazwisko) + stan obecnosci dzisiaj	
- [ ] /kids
	- per grupa lub placowka
- [ ] /posts
- [ ] /employees
	- wszyscy pracownicy
	- imie
	- nazwisko
	- placowka
	- grupa
- [ ] /leaves
	- wnioski urlopowe
	- data >=dzisiaj
- [ ] /parents
	- imie nazwisko dziecka
	- imie nazwisko rodzica 1
	- imie nazwisko rodzica 2 (optional)
- [ ] /add, edit, delete Facility
- [ ] /add, edit, deleteGroup
- [ ] /add, edit, deleteDiet
- [ ] /add, edit, deleteKid
- [ ] /add, edit, deleteParent
- [ ] /add, edit, deleteEmployee
- [ ] jakis endpoint do generowania hasła dla rodzica (wysylanie mailem?)
