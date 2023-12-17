import mysql.connector
import json
import sys

host = "sql11.freesqldatabase.com"
user = "sql11667768"
password = "5XwkuvlLCm"
database = "sql11667768"

name = sys.argv[1].lower()

if name:
    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )

        if connection.is_connected():
            query = f"SELECT description FROM Medication WHERE name = '{name}'"
            cursor = connection.cursor()

            cursor.execute(query)
            result = cursor.fetchone()

            if result:
                print("Description:", result[0])
            else:
                print(f"No matching records found for name='{name}'")

    except mysql.connector.Error as err:
        print("Error:", err)

    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
else:
    print("XD literowka?")
