
import { writeBatch, doc } from "firebase/firestore";

const batch = writeBatch(db);

const A1 = doc(db, "A-1", "2022-07-01");
batch.set(A1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A12 = doc(db, "A-1", "2022-07-02");
batch.set(A12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A13 = doc(db, "A-1", "2022-07-03");
batch.set(A13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A14 = doc(db, "A-1", "2022-07-04");
batch.set(A14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A15 = doc(db, "A-1", "2022-07-05");
batch.set(A15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A16 = doc(db, "A-1", "2022-07-06");
batch.set(A16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A17 = doc(db, "A-1", "2022-07-07");
batch.set(A17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A18 = doc(db, "A-1", "2022-07-08");
batch.set(A18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A19 = doc(db, "A-1", "2022-07-09");
batch.set(A19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A110 = doc(db, "A-1", "2022-07-10");
batch.set(A110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const A2 = doc(db, "A-2", "2022-07-01");
batch.set(A2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A22 = doc(db, "A-2", "2022-07-02");
batch.set(A22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A23 = doc(db, "A-2", "2022-07-03");
batch.set(A23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A24 = doc(db, "A-2", "2022-07-04");
batch.set(A24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A25 = doc(db, "A-2", "2022-07-05");
batch.set(A25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A26 = doc(db, "A-2", "2022-07-06");
batch.set(A26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A27 = doc(db, "A-2", "2022-07-07");
batch.set(A27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A28 = doc(db, "A-2", "2022-07-08");
batch.set(A28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A29 = doc(db, "A-2", "2022-07-09");
batch.set(A29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A210 = doc(db, "A-2", "2022-07-10");
batch.set(A210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const A3 = doc(db, "A-3", "2022-07-01");
batch.set(A3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A32 = doc(db, "A-3", "2022-07-02");
batch.set(A32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A33 = doc(db, "A-3", "2022-07-03");
batch.set(A33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A34 = doc(db, "A-3", "2022-07-04");
batch.set(A34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A35 = doc(db, "A-3", "2022-07-05");
batch.set(A35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A36 = doc(db, "A-3", "2022-07-06");
batch.set(A36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A37 = doc(db, "A-3", "2022-07-07");
batch.set(A37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A38 = doc(db, "A-3", "2022-07-08");
batch.set(A38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A39 = doc(db, "A-3", "2022-07-09");
batch.set(A39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const A310 = doc(db, "A-3", "2022-07-10");
batch.set(A310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const B1 = doc(db, "B-1", "2022-07-01");
batch.set(B1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B12 = doc(db, "B-1", "2022-07-02");
batch.set(B12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B13 = doc(db, "B-1", "2022-07-03");
batch.set(B13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B14 = doc(db, "B-1", "2022-07-04");
batch.set(B14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B15 = doc(db, "B-1", "2022-07-05");
batch.set(B15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B16 = doc(db, "B-1", "2022-07-06");
batch.set(B16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B17 = doc(db, "B-1", "2022-07-07");
batch.set(B17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B18 = doc(db, "B-1", "2022-07-08");
batch.set(B18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B19 = doc(db, "B-1", "2022-07-09");
batch.set(B19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B110 = doc(db, "B-1", "2022-07-10");
batch.set(B110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const B2 = doc(db, "B-2", "2022-07-01");
batch.set(B2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B22 = doc(db, "B-2", "2022-07-02");
batch.set(B22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B23 = doc(db, "B-2", "2022-07-03");
batch.set(B23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B24 = doc(db, "B-2", "2022-07-04");
batch.set(B24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B25 = doc(db, "B-2", "2022-07-05");
batch.set(B25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B26 = doc(db, "B-2", "2022-07-06");
batch.set(B26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B27 = doc(db, "B-2", "2022-07-07");
batch.set(B27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B28 = doc(db, "B-2", "2022-07-08");
batch.set(B28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B29 = doc(db, "B-2", "2022-07-09");
batch.set(B29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B210 = doc(db, "B-2", "2022-07-10");
batch.set(B210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const B3 = doc(db, "B-3", "2022-07-01");
batch.set(B3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B32 = doc(db, "B-3", "2022-07-02");
batch.set(B32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B33 = doc(db, "B-3", "2022-07-03");
batch.set(B33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B34 = doc(db, "B-3", "2022-07-04");
batch.set(B34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B35 = doc(db, "B-3", "2022-07-05");
batch.set(B35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B36 = doc(db, "B-3", "2022-07-06");
batch.set(B36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B37 = doc(db, "B-3", "2022-07-07");
batch.set(B37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B38 = doc(db, "B-3", "2022-07-08");
batch.set(B38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B39 = doc(db, "B-3", "2022-07-09");
batch.set(B39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const B310 = doc(db, "B-3", "2022-07-10");
batch.set(B310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});



const C1 = doc(db, "C-1", "2022-07-01");
batch.set(C1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C12 = doc(db, "C-1", "2022-07-02");
batch.set(C12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C13 = doc(db, "C-1", "2022-07-03");
batch.set(C13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C14 = doc(db, "C-1", "2022-07-04");
batch.set(C14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C15 = doc(db, "C-1", "2022-07-05");
batch.set(C15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C16 = doc(db, "C-1", "2022-07-06");
batch.set(C16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C17 = doc(db, "C-1", "2022-07-07");
batch.set(C17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C18 = doc(db, "C-1", "2022-07-08");
batch.set(C18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C19 = doc(db, "C-1", "2022-07-09");
batch.set(C19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C110 = doc(db, "C-1", "2022-07-10");
batch.set(C110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const C2 = doc(db, "C-2", "2022-07-01");
batch.set(C2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C22 = doc(db, "C-2", "2022-07-02");
batch.set(C22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C23 = doc(db, "C-2", "2022-07-03");
batch.set(C23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C24 = doc(db, "C-2", "2022-07-04");
batch.set(C24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C25 = doc(db, "C-2", "2022-07-05");
batch.set(C25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C26 = doc(db, "C-2", "2022-07-06");
batch.set(C26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C27 = doc(db, "C-2", "2022-07-07");
batch.set(C27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C28 = doc(db, "C-2", "2022-07-08");
batch.set(C28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C29 = doc(db, "C-2", "2022-07-09");
batch.set(C29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C210 = doc(db, "C-2", "2022-07-10");
batch.set(C210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const C3 = doc(db, "C-3", "2022-07-01");
batch.set(C3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C32 = doc(db, "C-3", "2022-07-02");
batch.set(C32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C33 = doc(db, "C-3", "2022-07-03");
batch.set(C33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C34 = doc(db, "C-3", "2022-07-04");
batch.set(C34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C35 = doc(db, "C-3", "2022-07-05");
batch.set(C35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C36 = doc(db, "C-3", "2022-07-06");
batch.set(C36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C37 = doc(db, "C-3", "2022-07-07");
batch.set(C37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C38 = doc(db, "C-3", "2022-07-08");
batch.set(C38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C39 = doc(db, "C-3", "2022-07-09");
batch.set(C39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const C310 = doc(db, "C-3", "2022-07-10");
batch.set(C310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D1 = doc(db, "D-1", "2022-07-01");
batch.set(D1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D12 = doc(db, "D-1", "2022-07-02");
batch.set(D12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D13 = doc(db, "D-1", "2022-07-03");
batch.set(D13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D14 = doc(db, "D-1", "2022-07-04");
batch.set(D14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D15 = doc(db, "D-1", "2022-07-05");
batch.set(D15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D16 = doc(db, "D-1", "2022-07-06");
batch.set(D16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D17 = doc(db, "D-1", "2022-07-07");
batch.set(D17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D18 = doc(db, "D-1", "2022-07-08");
batch.set(D18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D19 = doc(db, "D-1", "2022-07-09");
batch.set(D19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D110 = doc(db, "D-1", "2022-07-10");
batch.set(D110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const D2 = doc(db, "D-2", "2022-07-01");
batch.set(D2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D22 = doc(db, "D-2", "2022-07-02");
batch.set(D22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D23 = doc(db, "D-2", "2022-07-03");
batch.set(D23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D24 = doc(db, "D-2", "2022-07-04");
batch.set(D24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D25 = doc(db, "D-2", "2022-07-05");
batch.set(D25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D26 = doc(db, "D-2", "2022-07-06");
batch.set(D26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D27 = doc(db, "D-2", "2022-07-07");
batch.set(D27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D28 = doc(db, "D-2", "2022-07-08");
batch.set(D28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D29 = doc(db, "D-2", "2022-07-09");
batch.set(D29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D210 = doc(db, "D-2", "2022-07-10");
batch.set(D210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const D3 = doc(db, "D-3", "2022-07-01");
batch.set(D3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D32 = doc(db, "D-3", "2022-07-02");
batch.set(D32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D33 = doc(db, "D-3", "2022-07-03");
batch.set(D33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D34 = doc(db, "D-3", "2022-07-04");
batch.set(D34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D35 = doc(db, "D-3", "2022-07-05");
batch.set(D35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D36 = doc(db, "D-3", "2022-07-06");
batch.set(D36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D37 = doc(db, "D-3", "2022-07-07");
batch.set(D37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D38 = doc(db, "D-3", "2022-07-08");
batch.set(D38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D39 = doc(db, "D-3", "2022-07-09");
batch.set(D39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const D310 = doc(db, "D-3", "2022-07-10");
batch.set(D310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E1 = doc(db, "E-1", "2022-07-01");
batch.set(E1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E12 = doc(db, "E-1", "2022-07-02");
batch.set(E12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E13 = doc(db, "E-1", "2022-07-03");
batch.set(E13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E14 = doc(db, "E-1", "2022-07-04");
batch.set(E14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E15 = doc(db, "E-1", "2022-07-05");
batch.set(E15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E16 = doc(db, "E-1", "2022-07-06");
batch.set(E16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E17 = doc(db, "E-1", "2022-07-07");
batch.set(E17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E18 = doc(db, "E-1", "2022-07-08");
batch.set(E18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E19 = doc(db, "E-1", "2022-07-09");
batch.set(E19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E110 = doc(db, "E-1", "2022-07-10");
batch.set(E110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const E2 = doc(db, "E-2", "2022-07-01");
batch.set(E2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E22 = doc(db, "E-2", "2022-07-02");
batch.set(E22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E23 = doc(db, "E-2", "2022-07-03");
batch.set(E23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E24 = doc(db, "E-2", "2022-07-04");
batch.set(E24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E25 = doc(db, "E-2", "2022-07-05");
batch.set(E25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E26 = doc(db, "E-2", "2022-07-06");
batch.set(E26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E27 = doc(db, "E-2", "2022-07-07");
batch.set(E27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E28 = doc(db, "E-2", "2022-07-08");
batch.set(E28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E29 = doc(db, "E-2", "2022-07-09");
batch.set(E29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E210 = doc(db, "E-2", "2022-07-10");
batch.set(E210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const E3 = doc(db, "E-3", "2022-07-01");
batch.set(E3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E32 = doc(db, "E-3", "2022-07-02");
batch.set(E32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E33 = doc(db, "E-3", "2022-07-03");
batch.set(E33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E34 = doc(db, "E-3", "2022-07-04");
batch.set(E34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E35 = doc(db, "E-3", "2022-07-05");
batch.set(E35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E36 = doc(db, "E-3", "2022-07-06");
batch.set(E36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E37 = doc(db, "E-3", "2022-07-07");
batch.set(E37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E38 = doc(db, "E-3", "2022-07-08");
batch.set(E38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E39 = doc(db, "E-3", "2022-07-09");
batch.set(E39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const E310 = doc(db, "E-3", "2022-07-10");
batch.set(E310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F1 = doc(db, "F-1", "2022-07-01");
batch.set(F1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F12 = doc(db, "F-1", "2022-07-02");
batch.set(F12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F13 = doc(db, "F-1", "2022-07-03");
batch.set(F13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F14 = doc(db, "F-1", "2022-07-04");
batch.set(F14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F15 = doc(db, "F-1", "2022-07-05");
batch.set(F15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F16 = doc(db, "F-1", "2022-07-06");
batch.set(F16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F17 = doc(db, "F-1", "2022-07-07");
batch.set(F17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F18 = doc(db, "F-1", "2022-07-08");
batch.set(F18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F19 = doc(db, "F-1", "2022-07-09");
batch.set(F19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F110 = doc(db, "F-1", "2022-07-10");
batch.set(F110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const F2 = doc(db, "F-2", "2022-07-01");
batch.set(F2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F22 = doc(db, "F-2", "2022-07-02");
batch.set(F22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F23 = doc(db, "F-2", "2022-07-03");
batch.set(F23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F24 = doc(db, "F-2", "2022-07-04");
batch.set(F24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F25 = doc(db, "F-2", "2022-07-05");
batch.set(F25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F26 = doc(db, "F-2", "2022-07-06");
batch.set(F26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F27 = doc(db, "F-2", "2022-07-07");
batch.set(F27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F28 = doc(db, "F-2", "2022-07-08");
batch.set(F28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F29 = doc(db, "F-2", "2022-07-09");
batch.set(F29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F210 = doc(db, "F-2", "2022-07-10");
batch.set(F210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const F3 = doc(db, "F-3", "2022-07-01");
batch.set(F3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F32 = doc(db, "F-3", "2022-07-02");
batch.set(F32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F33 = doc(db, "F-3", "2022-07-03");
batch.set(F33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F34 = doc(db, "F-3", "2022-07-04");
batch.set(F34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F35 = doc(db, "F-3", "2022-07-05");
batch.set(F35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F36 = doc(db, "F-3", "2022-07-06");
batch.set(F36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F37 = doc(db, "F-3", "2022-07-07");
batch.set(F37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F38 = doc(db, "F-3", "2022-07-08");
batch.set(F38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F39 = doc(db, "F-3", "2022-07-09");
batch.set(F39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const F310 = doc(db, "F-3", "2022-07-10");
batch.set(F310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G1 = doc(db, "G-1", "2022-07-01");
batch.set(G1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G12 = doc(db, "G-1", "2022-07-02");
batch.set(G12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G13 = doc(db, "G-1", "2022-07-03");
batch.set(G13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G14 = doc(db, "G-1", "2022-07-04");
batch.set(G14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G15 = doc(db, "G-1", "2022-07-05");
batch.set(G15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G16 = doc(db, "G-1", "2022-07-06");
batch.set(G16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G17 = doc(db, "G-1", "2022-07-07");
batch.set(G17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G18 = doc(db, "G-1", "2022-07-08");
batch.set(G18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G19 = doc(db, "G-1", "2022-07-09");
batch.set(G19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G110 = doc(db, "G-1", "2022-07-10");
batch.set(G110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const G2 = doc(db, "G-2", "2022-07-01");
batch.set(G2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G22 = doc(db, "G-2", "2022-07-02");
batch.set(G22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G23 = doc(db, "G-2", "2022-07-03");
batch.set(G23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G24 = doc(db, "G-2", "2022-07-04");
batch.set(G24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G25 = doc(db, "G-2", "2022-07-05");
batch.set(G25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G26 = doc(db, "G-2", "2022-07-06");
batch.set(G26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G27 = doc(db, "G-2", "2022-07-07");
batch.set(G27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G28 = doc(db, "G-2", "2022-07-08");
batch.set(G28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G29 = doc(db, "G-2", "2022-07-09");
batch.set(G29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G210 = doc(db, "G-2", "2022-07-10");
batch.set(G210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const G3 = doc(db, "G-3", "2022-07-01");
batch.set(G3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G32 = doc(db, "G-3", "2022-07-02");
batch.set(G32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G33 = doc(db, "G-3", "2022-07-03");
batch.set(G33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G34 = doc(db, "G-3", "2022-07-04");
batch.set(G34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G35 = doc(db, "G-3", "2022-07-05");
batch.set(G35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G36 = doc(db, "G-3", "2022-07-06");
batch.set(G36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G37 = doc(db, "G-3", "2022-07-07");
batch.set(G37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G38 = doc(db, "G-3", "2022-07-08");
batch.set(G38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G39 = doc(db, "G-3", "2022-07-09");
batch.set(G39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const G310 = doc(db, "G-3", "2022-07-10");
batch.set(G310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H1 = doc(db, "H-1", "2022-07-01");
batch.set(H1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H12 = doc(db, "H-1", "2022-07-02");
batch.set(H12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H13 = doc(db, "H-1", "2022-07-03");
batch.set(H13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H14 = doc(db, "H-1", "2022-07-04");
batch.set(H14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H15 = doc(db, "H-1", "2022-07-05");
batch.set(H15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H16 = doc(db, "H-1", "2022-07-06");
batch.set(H16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H17 = doc(db, "H-1", "2022-07-07");
batch.set(H17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H18 = doc(db, "H-1", "2022-07-08");
batch.set(H18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H19 = doc(db, "H-1", "2022-07-09");
batch.set(H19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H110 = doc(db, "H-1", "2022-07-10");
batch.set(H110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const H2 = doc(db, "H-2", "2022-07-01");
batch.set(H2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H22 = doc(db, "H-2", "2022-07-02");
batch.set(H22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H23 = doc(db, "H-2", "2022-07-03");
batch.set(H23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H24 = doc(db, "H-2", "2022-07-04");
batch.set(H24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H25 = doc(db, "H-2", "2022-07-05");
batch.set(H25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H26 = doc(db, "H-2", "2022-07-06");
batch.set(H26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H27 = doc(db, "H-2", "2022-07-07");
batch.set(H27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H28 = doc(db, "H-2", "2022-07-08");
batch.set(H28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H29 = doc(db, "H-2", "2022-07-09");
batch.set(H29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H210 = doc(db, "H-2", "2022-07-10");
batch.set(H210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const H3 = doc(db, "H-3", "2022-07-01");
batch.set(H3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H32 = doc(db, "H-3", "2022-07-02");
batch.set(H32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H33 = doc(db, "H-3", "2022-07-03");
batch.set(H33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H34 = doc(db, "H-3", "2022-07-04");
batch.set(H34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H35 = doc(db, "H-3", "2022-07-05");
batch.set(H35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H36 = doc(db, "H-3", "2022-07-06");
batch.set(H36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H37 = doc(db, "H-3", "2022-07-07");
batch.set(H37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H38 = doc(db, "H-3", "2022-07-08");
batch.set(H38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H39 = doc(db, "H-3", "2022-07-09");
batch.set(H39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const H310 = doc(db, "H-3", "2022-07-10");
batch.set(H310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I1 = doc(db, "I-1", "2022-07-01");
batch.set(I1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I12 = doc(db, "I-1", "2022-07-02");
batch.set(I12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I13 = doc(db, "I-1", "2022-07-03");
batch.set(I13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I14 = doc(db, "I-1", "2022-07-04");
batch.set(I14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I15 = doc(db, "I-1", "2022-07-05");
batch.set(I15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I16 = doc(db, "I-1", "2022-07-06");
batch.set(I16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I17 = doc(db, "I-1", "2022-07-07");
batch.set(I17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I18 = doc(db, "I-1", "2022-07-08");
batch.set(I18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I19 = doc(db, "I-1", "2022-07-09");
batch.set(I19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I110 = doc(db, "I-1", "2022-07-10");
batch.set(I110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const I2 = doc(db, "I-2", "2022-07-01");
batch.set(I2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I22 = doc(db, "I-2", "2022-07-02");
batch.set(I22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I23 = doc(db, "I-2", "2022-07-03");
batch.set(I23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I24 = doc(db, "I-2", "2022-07-04");
batch.set(I24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I25 = doc(db, "I-2", "2022-07-05");
batch.set(I25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I26 = doc(db, "I-2", "2022-07-06");
batch.set(I26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I27 = doc(db, "I-2", "2022-07-07");
batch.set(I27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I28 = doc(db, "I-2", "2022-07-08");
batch.set(I28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I29 = doc(db, "I-2", "2022-07-09");
batch.set(I29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I210 = doc(db, "I-2", "2022-07-10");
batch.set(I210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const I3 = doc(db, "I-3", "2022-07-01");
batch.set(I3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I32 = doc(db, "I-3", "2022-07-02");
batch.set(I32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I33 = doc(db, "I-3", "2022-07-03");
batch.set(I33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I34 = doc(db, "I-3", "2022-07-04");
batch.set(I34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I35 = doc(db, "I-3", "2022-07-05");
batch.set(I35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I36 = doc(db, "I-3", "2022-07-06");
batch.set(I36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I37 = doc(db, "I-3", "2022-07-07");
batch.set(I37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I38 = doc(db, "I-3", "2022-07-08");
batch.set(I38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I39 = doc(db, "I-3", "2022-07-09");
batch.set(I39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const I310 = doc(db, "I-3", "2022-07-10");
batch.set(I310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J1 = doc(db, "J-1", "2022-07-01");
batch.set(J1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J12 = doc(db, "J-1", "2022-07-02");
batch.set(J12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J13 = doc(db, "J-1", "2022-07-03");
batch.set(J13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J14 = doc(db, "J-1", "2022-07-04");
batch.set(J14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J15 = doc(db, "J-1", "2022-07-05");
batch.set(J15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J16 = doc(db, "J-1", "2022-07-06");
batch.set(J16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J17 = doc(db, "J-1", "2022-07-07");
batch.set(J17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J18 = doc(db, "J-1", "2022-07-08");
batch.set(J18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J19 = doc(db, "J-1", "2022-07-09");
batch.set(J19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J110 = doc(db, "J-1", "2022-07-10");
batch.set(J110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const J2 = doc(db, "J-2", "2022-07-01");
batch.set(J2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J22 = doc(db, "J-2", "2022-07-02");
batch.set(J22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J23 = doc(db, "J-2", "2022-07-03");
batch.set(J23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J24 = doc(db, "J-2", "2022-07-04");
batch.set(J24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J25 = doc(db, "J-2", "2022-07-05");
batch.set(J25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J26 = doc(db, "J-2", "2022-07-06");
batch.set(J26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J27 = doc(db, "J-2", "2022-07-07");
batch.set(J27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J28 = doc(db, "J-2", "2022-07-08");
batch.set(J28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J29 = doc(db, "J-2", "2022-07-09");
batch.set(J29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J210 = doc(db, "J-2", "2022-07-10");
batch.set(J210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const J3 = doc(db, "J-3", "2022-07-01");
batch.set(J3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J32 = doc(db, "J-3", "2022-07-02");
batch.set(J32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J33 = doc(db, "J-3", "2022-07-03");
batch.set(J33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J34 = doc(db, "J-3", "2022-07-04");
batch.set(J34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J35 = doc(db, "J-3", "2022-07-05");
batch.set(J35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J36 = doc(db, "J-3", "2022-07-06");
batch.set(J36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J37 = doc(db, "J-3", "2022-07-07");
batch.set(J37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J38 = doc(db, "J-3", "2022-07-08");
batch.set(J38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J39 = doc(db, "J-3", "2022-07-09");
batch.set(J39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const J310 = doc(db, "J-3", "2022-07-10");
batch.set(J310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K1 = doc(db, "K-1", "2022-07-01");
batch.set(K1, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K12 = doc(db, "K-1", "2022-07-02");
batch.set(K12, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K13 = doc(db, "K-1", "2022-07-03");
batch.set(K13, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K14 = doc(db, "K-1", "2022-07-04");
batch.set(K14, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K15 = doc(db, "K-1", "2022-07-05");
batch.set(K15, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K16 = doc(db, "K-1", "2022-07-06");
batch.set(K16, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K17 = doc(db, "K-1", "2022-07-07");
batch.set(K17, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K18 = doc(db, "K-1", "2022-07-08");
batch.set(K18, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K19 = doc(db, "K-1", "2022-07-09");
batch.set(K19, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K110 = doc(db, "K-1", "2022-07-10");
batch.set(K110, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const K2 = doc(db, "K-2", "2022-07-01");
batch.set(K2, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K22 = doc(db, "K-2", "2022-07-02");
batch.set(K22, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K23 = doc(db, "K-2", "2022-07-03");
batch.set(K23, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K24 = doc(db, "K-2", "2022-07-04");
batch.set(K24, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K25 = doc(db, "K-2", "2022-07-05");
batch.set(K25, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K26 = doc(db, "K-2", "2022-07-06");
batch.set(K26, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K27 = doc(db, "K-2", "2022-07-07");
batch.set(K27, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K28 = doc(db, "K-2", "2022-07-08");
batch.set(K28, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K29 = doc(db, "K-2", "2022-07-09");
batch.set(K29, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K210 = doc(db, "K-2", "2022-07-10");
batch.set(K210, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


const K3 = doc(db, "K-3", "2022-07-01");
batch.set(K3, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K32 = doc(db, "K-3", "2022-07-02");
batch.set(K32, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K33 = doc(db, "K-3", "2022-07-03");
batch.set(K33, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K34 = doc(db, "K-3", "2022-07-04");
batch.set(K34, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K35 = doc(db, "K-3", "2022-07-05");
batch.set(K35, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K36 = doc(db, "K-3", "2022-07-06");
batch.set(K36, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K37 = doc(db, "K-3", "2022-07-07");
batch.set(K37, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K38 = doc(db, "K-3", "2022-07-08");
batch.set(K38, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K39 = doc(db, "K-3", "2022-07-09");
batch.set(K39, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});

const K310 = doc(db, "K-3", "2022-07-10");
batch.set(K310, {
  "09:00-12:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "12:00-18:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "18:00-21:00": {
    "inputDate": "",
    "inputGender": "",
    "inputName": "",
    "inputTel": "",
    "inputTime": "",
    "status": false,
    "tableNum": "",
    "shot": ""
  },
  "morStatus": false,
  "aftStatus": false,
  "nigStatus": false,
});


// Commit the batch
await batch.commit();



