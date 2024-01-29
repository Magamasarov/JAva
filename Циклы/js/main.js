public class Main {
    public static void main(String[] args) {
        // Вывод столбца чисел от 1 до 100
        System.out.println("Столбец чисел от 1 до 100:");
        for (int i = 1; i <= 100; i++) {
            System.out.println(i);
        }

        // Вывод столбца чисел от 11 до 33
        System.out.println("\nСтолбец чисел от 11 до 33:");
        for (int i = 11; i <= 33; i++) {
            System.out.println(i);
        }

        // Вывод столбца четных чисел от 0 до 100
        System.out.println("\nСтолбец четных чисел от 0 до 100:");
        for (int i = 0; i <= 100; i += 2) {
            System.out.println(i);
        }

        // Нахождение суммы чисел от 1 до 100
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("\nСумма чисел от 1 до 100: " + sum);
    }
}

//////////////////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Задача 1: Вывод элементов массива на экран
        int[] array1 = {1, 2, 3, 4, 5};
        System.out.println("Элементы массива:");
        for (int i = 0; i < array1.length; i++) {
            System.out.println(array1[i]);
        }

        // Задача 2: Нахождение суммы элементов массива
        int[] array2 = {1, 2, 3, 4, 5};
        int result = 0;
        for (int i = 0; i < array2.length; i++) {
            result += array2[i];
        }
        System.out.println("\nСумма элементов массива: " + result);
    }
}

//////////////////////////////////////////////////

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Создаем объект Map
        Map<String, Object> obj = new HashMap<>();
        obj.put("key1", "value1");
        obj.put("key2", 42);
        obj.put("key3", true);

        // Используем цикл for-each для вывода ключей и элементов объекта
        System.out.println("Ключи и элементы объекта:");
        for (Map.Entry<String, Object> entry : obj.entrySet()) {
            System.out.println("Ключ: " + entry.getKey() + ", Элемент: " + entry.getValue());
        }
    }
}


////////////////////////////////////////////////////////

import java.util.HashMap;
import java.util.Map;

public class Main {
    public static void main(String[] args) {
        // Создаем объект Map с ключами Коля, Вася, Петя и значениями '200', '300', '400'
        Map<String, String> obj = new HashMap<>();
        obj.put("Коля", "200");
        obj.put("Вася", "300");
        obj.put("Петя", "400");

        // Используем цикл for-each для вывода строк с зарплатами
        for (Map.Entry<String, String> entry : obj.entrySet()) {
            System.out.println(entry.getKey() + " - зарплата " + entry.getValue() + " долларов.");
        }
    }
}

/////////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Заданный массив
        int[] array = {2, 5, 9, 15, 0, 4};

        // Используем цикл for и оператор if для вывода элементов в нужном диапазоне
        System.out.println("Элементы массива больше 3 и меньше 10:");
        for (int i = 0; i < array.length; i++) {
            if (array[i] > 3 && array[i] < 10) {
                System.out.println(array[i]);
            }
        }
    }
}


//////////////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Заданный массив с числами
        int[] array = {2, -5, 9, -15, 0, 4};

        // Используем цикл for для нахождения суммы положительных элементов
        int sumOfPositives = 0;
        for (int i = 0; i < array.length; i++) {
            if (array[i] > 0) {
                sumOfPositives += array[i];
            }
        }

        // Выводим результат
        System.out.println("Сумма положительных элементов массива: " + sumOfPositives);
    }
}


/////////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Заданный массив
        int[] array = {1, 2, 5, 9, 4, 13, 4, 10};

        // Используем цикл for и оператор if для поиска элемента со значением 4
        for (int i = 0; i < array.length; i++) {
            if (array[i] == 4) {
                System.out.println("Есть!");
                // Выходим из цикла, так как уже нашли элемент
                break;
            }
        }
    }
}

//////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Заданный массив
        int[] array = {10, 20, 30, 50, 235, 3000};

        // Используем цикл for и оператор if для вывода чисел, начинающихся на 1, 2 или 5
        System.out.println("Числа, начинающиеся на 1, 2 или 5:");
        for (int i = 0; i < array.length; i++) {
            // Преобразуем число в строку для проверки первой цифры
            String numAsString = String.valueOf(array[i]);

            // Проверяем, начинается ли число на 1, 2 или 5
            if (numAsString.startsWith("1") || numAsString.startsWith("2") || numAsString.startsWith("5")) {
                System.out.println(array[i]);
            }
        }
    }
}

//////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Заданный массив
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};

        // Используем цикл for для создания строки '-1-2-3-4-5-6-7-8-9-'
        StringBuilder result = new StringBuilder("-");
        for (int i = 0; i < array.length; i++) {
            result.append(array[i]).append("-");
        }

        // Выводим результат
        System.out.println(result.toString());
    }
}

//////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        // Заданный массив дней недели
        String[] daysOfWeek = {"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"};

        // Используем цикл for для вывода дней недели
        for (int i = 0; i < daysOfWeek.length; i++) {
            // Проверяем, является ли текущий день выходным
            if (i >= 5) {
                // Выводим выходные дни жирным шрифтом
                System.out.println("\033[1m" + daysOfWeek[i] + "\033[0m");
            } else {
                // Выводим обычные дни
                System.out.println(daysOfWeek[i]);
            }
        }
    }
}

//////////////////////////////////////////////

import java.time.DayOfWeek;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        // Получаем текущий день недели
        DayOfWeek currentDayOfWeek = LocalDate.now().getDayOfWeek();

        // Заданный массив дней недели
        String[] daysOfWeek = {"Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"};

        // Используем цикл for для вывода дней недели
        for (int i = 0; i < daysOfWeek.length; i++) {
            // Проверяем, является ли текущий день равным текущему дню недели
            if (i + 1 == currentDayOfWeek.getValue()) {
                // Выводим текущий день курсивом
                System.out.println("\033[3m" + daysOfWeek[i] + "\033[0m");
            } else {
                // Выводим обычные дни
                System.out.println(daysOfWeek[i]);
            }
        }
    }
}

//////////////////////////////////////////////

public class Main {
    public static void main(String[] args) {
        int n = 1000;
        int num = 0;

        while (n >= 50) {
            n /= 2;
            num++;
        }

        System.out.println("Полученное число: " + n);
        System.out.println("Количество итераций: " + num);
    }
}


//////////////////////////////////////////////