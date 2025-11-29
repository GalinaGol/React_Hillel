1. Home ( / )

Короткий текст.

Посилання:

“Список курсів”

“Профіль користувача”

2. Courses ( /courses )

Є масив курсів у коді (id, title, level, category).

Виводиться список курсів.

Кожен курс має кнопку/лінк:

“Деталі” → /courses/:id

Фільтри (useSearchParams):

Поле пошуку search (по title).

Select level (all / beginner / advanced).

Фільтри синхронізуються з URL

3. Course Details ( /courses/:id )

Читання параметра id через useParams().

Пошук курсу в масиві.

Відображення детальної інформації.