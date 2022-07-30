const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Козлов",
            "id_2": "Смирнов",
            "id_3": "Володин",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Путин",
            "id_8": "Федоров",
            "id_9": "Валуев",
            "id_10": "Зимин",
            "id_11": "Коколов",
            "id_12": "Дорохов",
            "id_13": "Ионов",
            "id_14": "Павлов",
            "id_15": "Бастрыкин",
            "id_16": "Летов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Владимир",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFeMaleJson: `{
        "count": 9,
        "list": { 
            "id_1": "Масяня",
            "id_2": "Аврора",
            "id_3": "Анастасия",
            "id_4": "Ксения",
            "id_5": "Галина",
            "id_6": "Валерия",
            "id_7": "Кристина",
            "id_8": "Любовь",
            "id_9": "Екатерина",
            "id_10": "Алина"
        }
    }`,
    fatherNameMaleJson: `{  
        "count": 9,
        "list": {
            "id_1": "Станиславович",
            "id_2": "Петрович",
            "id_3": "Владимирович",
            "id_4": "Витальевич",
            "id_5": "Сергеевич",
            "id_6": "Александрович",
            "id_7": "Максимович",
            "id_8": "Евгеньевич",
            "id_9": "Алексеевич",
            "id_10": "Николаевич"
        }
    }`,
    fatherNameFemaleJson: `{  
        "count": 9,
        "list": {
            "id_1": "Станиславовна",
            "id_2": "Петровна",
            "id_3": "Ильинишна",
            "id_4": "Витальевна",
            "id_5": "Сергеевна",
            "id_6": "Александровна",
            "id_7": "Максимовна",
            "id_8": "Евгеньевна",
            "id_9": "Алексеевна",
            "id_10": "Николаевна"
        }
    }`,
    professionMaleJson: `{
        "count": 9,
        "list": {
            "id_1": "Кузнец",
            "id_2": "Веб-разработчик",
            "id_3": "Инженер",
            "id_4": "Бармен",
            "id_5": "Риэлтор",
            "id_6": "Шеф-Повар",
            "id_7": "Физик",
            "id_8": "Программист",
            "id_9": "Депутат",
            "id_10": "Дефектоскопист"
        }
    }`,
    professionFemaleJson: `{
        "count": 9,
        "list": {
            "id_1": "Воспитатель",
            "id_2": "Массажистка",
            "id_3": "Тестировщик",
            "id_4": "Педиатр",
            "id_5": "Парикмахер",
            "id_6": "Офис-менеджер",
            "id_7": "Предприниматель",
            "id_8": "Уборщица",
            "id_9": "Груммер",
            "id_10": "Ветеринарный врач"
        }
    }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomGender: function () {
        GENDER_MALE = "Мужчина";
        GENDER_FEMALE = "Женщина";
        this.gender = this.randomIntNumber(1, 0); // переменная для определения пола: 0 = Муж, 1 = Жен
        if (this.gender <= 0) {
            return `${GENDER_MALE}`;
        } else {
            return `${GENDER_FEMALE}`;
        }
    },

    randomFirstName: function() { // Имена
        if (this.gender <= 0)  {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFeMaleJson);
        }
    },

    randomSurname: function() { // Фамилии
        if (this.gender <= 0)  {
            return this.randomValue(this.surnameJson);
        } else {
            let sureFemale = this.randomValue(this.surnameJson);
            return `${sureFemale}a` 
        }
    },
    randomFatherName: function() { // Отчества
        if (this.gender <= 0)  {
            return this.randomValue(this.fatherNameMaleJson);
        } else {
            return this.randomValue(this.fatherNameFemaleJson); 
        }
    },

    randomProfession: function() { // Профессии
        if (this.gender <= 0)  {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson); 
        }
    },
    
    dateBorn: function () { 
        let year = this.randomIntNumber(2002, 1966);
        let mounth = this.randomIntNumber(12, 1);
        let day = 30;
        switch (mounth) { // конструкция для сравнения присвоенного месяца и присвоения кейсу строкового значения месяца
            case 1: mounth = 'Января';
                break;
            case 2: mounth = 'Февраля';
                break;
            case 3: mounth = 'Марта';
                break;
            case 4: mounth = 'Апреля';
                break;
            case 5: mounth = 'Мая';
                break;
            case 6: mounth = 'Июня';
                break;
            case 7: mounth = 'Июля';
                break;
            case 8: mounth = 'Августа';
                break;
            case 9: mounth = 'Сентября';
                break;
            case 10: mounth = 'Октября';
                break;
            case 11: mounth = 'Ноября';
                break;
            case 12: mounth = 'Декабря';
                break;
        }

        if (mounth === 'Апрель' && mounth ==='Июнь' && mounth ==='Сентябрь' && mounth ==='Ноябрь') {
            day = this.randomIntNumber(30,1);
        } if (mounth === 'Февраль') {
            day = this.randomIntNumber(28,1);
        } else {
            day = this.randomIntNumber(31,1);
        }

        return [` ${day} ${mounth} ${year} года`];

    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.fatherName = this.randomFatherName();
        this.person.profession = this.randomProfession();

        return this.person;
    }
};