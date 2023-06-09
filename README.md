# ШРИ 2023: Краулер сайта

Тестовое задание
макс. 100 балл.
Дедлайн: 11 июн. 23:00
Все языкиNode.js 16.17.0
Ограничение времени 20 секунд 1 секунда
Ограничение памяти 189.1 Мб 1.7 Кб
Ввод стандартный ввод или input.js
Вывод стандартный вывод или output.txt

## Условие

Компания, занимающаяся разработкой сайтов, столкнулась с проблемой: их клиенты жаловались на низкую посещаемость сайтов. Оказалось, что многие страницы не были проиндексированы поисковыми системами из-за отсутствия ссылок на них.

Вам необходимо написать программу-краулер с использованием Node.js, которая будет проходить по указанному URL-адресу обходить все страницы на сайте и собирать список всех ссылок на другие страницы.

Таким образом можно будет убедиться, что все страницы сайта проиндексированы поисковыми системами и доступны для пользователей.

## Предусловия

версия Node.js - v16.13.0
из npm модулей можно использовать только express.js
команда запуска сервера node src/server.js
для получения содержимого доменов используется поставляемая библиотека fetcher, использовать другие библиотеки нельзя
сервер должен запускаться на порту 3000
не использовать рекурсию
максимальное количество ретраев при ошибках сервера не более 1
Формат отправляемых данных
Необходимо весь код поместить в папку src, после чего необходимо заархивировать папку src - в файл src.zip и загрузить архив на проверку в контест

## Обратите внимание

Очень важно, чтобы в итоговом решении fetcher был импортирован следующим образом

const { fetcher } = require('../fetcher.js');

## Описание ручек

Краулер должен собрать со всех страниц уникальные и действительные адреса страниц и сохранить их в массив.

Ссылка для парсинга: POST http://localhost:3000/parse body: { domainName: string} returns: string[]

Скачать вложения можно по ссылке

Если используете typescript - в src.zip должно находиться уже скомпилированное в js приложение с файлом server.js для запуска и остальными файлами.

## Комменты

```
curl --location 'localhost:3000/parse' \
--header 'Content-Type: application/json' \
--data '{"domainName": "https://test.com/"}'
```
