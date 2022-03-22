// задача с самым часто встречаемым числом

const arr1 = [3, 5, 3, 5, 3, 10, 3, 100, 100, 100, 100, 100, 3];

const getFrequencyNumber = (arr) => {
  const obj = arr.reduce((result, num) => {
    if (!result[num]) {
      result[num] = 1;
    } else {
      result[num] = result[num] + 1;
    }
    return result;
  }, {});
  const arrOfFrequency = [];
  for (const key in obj) {
    arrOfFrequency.push(obj[key]);
  }
  arrOfFrequency.sort((a, b) => b - a);

  const maxFrequency = arrOfFrequency[0];
  for (const key in obj) {
    if (obj[key] === maxFrequency) {
      return key;
    }
  }
  //return arrOfFrequencyNumbers;
};

console.log(getFrequencyNumber(arr1));

//1

const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "male",
    ip_address: "229.179.4.212",
  },
];

const sortByGenders = (users) => {
  return users.reduce((result, user) => {
    const userGender = user.gender;
    const userName = user.first_name;
    const userSurname = user.last_name;

    const { first_name, last_name, ...rest } = user;
    rest.fullName = `${userName}${userSurname}`;
    const modifiedUser = rest;

    if (!result[userGender]) {
      result[userGender] = [modifiedUser];
    } else {
      result[userGender].push(modifiedUser);
    }
    return result;
  }, {});
};

console.log(sortByGenders(users));

//2 Преобразуйте массив в объект используя функцию reduce.

const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

const turnArrayIntoObj = (arr) => {
  return arr.reduce((result, { id, title }) => {
    result[id] = title;
    return result;
  }, {});
};

console.log(turnArrayIntoObj(videos));

// 3 Выведите массив ids для релизов у которых рейтинг 5.0
const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

const getRelease = (arr) => {
  return arr.reduce((result, release) => {
    if (release.rating[0] === 5.0) {
      result.push(release.id);
    }
    return result;
  }, []);
};

console.log(getRelease(newReleases));

// 4 С помощью функций map, reduce, вывести url у которого самая большая площадь
const boxarts = [
  {
    width: 3000,
    height: 2000,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];
const getBiggestArea = (arr) => {
  return arr.reduce((result, { url, width, height }) => {
    if (width * height >= result) {
      result = width * height;
    }
    return url;
  });
};

console.log(getBiggestArea(boxarts));

// 7

const arr7 = [1, 2, 3, "1", "100", 7, "8", 9];

const turnNumbersToString = (arr) => {
  return arr.map((item) => {
    if (typeof item === "number") {
      return String(item);
    }
    return Number(item);
  });
};

console.log(turnNumbersToString(arr7));

// 8

const connectArrs = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(connectArrs([1, 2, 2, 5], [10, 12, 11, 67, 4]));

// 9

const getValidString = (str, num) => {
  if (str.length > num) {
    return `${str.slice(0, num)}...`;
  }
  return str;
};

console.log(getValidString("abcdef", 9));
