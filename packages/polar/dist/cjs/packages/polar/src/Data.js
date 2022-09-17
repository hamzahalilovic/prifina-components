'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var getUserInfo = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getUserInfo.js');
var listNotifications = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listNotifications.js');
var listActivities = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listActivities.js');
var getActivitySummary = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getActivitySummary.js');
var getStepSample = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getStepSample.js');
var getZoneSample = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getZoneSample.js');
var listTrainingExercises = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listTrainingExercises.js');
var getExerciseSummary = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getExerciseSummary.js');
var getHeartRateZones = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getHeartRateZones.js');
var getAvailableSamples = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getAvailableSamples.js');
var getSamples = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getSamples.js');
var listPhysicalInfo = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listPhysicalInfo.js');
var getPhysicalInfo = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getPhysicalInfo.js');
var getWebhook = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getWebhook.js');
var listExercises = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listExercises.js');
var getExercise = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getExercise.js');
var listSleep = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listSleep.js');
var getSleep = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getSleep.js');
var getAvailableSleepTimes = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getAvailableSleepTimes.js');
var listNightlyRecharge = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/listNightlyRecharge.js');
var getNightlyRecharge = require('../../../node_modules/@dynamic-data/polar-data/dist/esm/mockups/getNightlyRecharge.js');

/*
import { ouraDaily } from "./activityMockup";
import { ouraHourly } from "./activityMockup";
import { netflixData } from "./activityMockup";
*/
var dataQuery = "query dataObject($input:DataObjectInput!) {\n  getDataObject(input:$input) {\n    result\n  }\n}";
/*
const s3Query = `query s3Object($input:S3ObjectInput!) {
  getS3Object(input:$input) {
    result
  }
}`;
*/

var getInfo = function getInfo() {
  //return ["queryOuraDaily", "queryOuraHourly", "queryNetflixData"];
  return ["queryGetUserInfo", "queryListNotifications", "queryListActivities", "queryGetActivitySummary", "queryGetStepSample", "queryGetZoneSample", "queryListTrainingExercises", "queryGetExerciseSummary", "queryGetHeartRateZones", "queryGetAvailableSamples", "queryGetSamples", "queryListPhysicalInfo", "queryGetPhysicalInfo", "queryGetWebhook", "queryListExercises", "queryGetExercise", "queryListSleep", "queryGetSleep", "queryGetAvailableSleepTimes", "queryListNightlyRecharge", "queryGetNightlyRecharge"];
};
var getModuleName = function getModuleName() {
  return "Polar";
};
var getFields = function getFields(query) {
  var fields = [];

  switch (query) {
    case "queryGetUserInfo":
      fields = Object.keys(getUserInfo.getUserInfo);
      break;

    case "queryListNotifications":
      fields = Object.keys(listNotifications.listNotifications);
      break;

    case "queryListActivities":
      fields = Object.keys(listActivities.listActivities);
      break;

    case "queryGetActivitySummary":
      fields = Object.keys(getActivitySummary.getActivitySummary);
      break;

    case "queryGetStepSample":
      fields = Object.keys(getStepSample.getStepSample);
      break;

    case "queryGetZoneSample":
      fields = Object.keys(getZoneSample.getZoneSample);
      break;

    case "queryListTrainingExercises":
      fields = Object.keys(listTrainingExercises.listTrainingExercises);
      break;

    case "queryGetExerciseSummary":
      fields = Object.keys(getExerciseSummary.getExerciseSummary);
      break;

    case "queryGetHeartRateZones":
      fields = Object.keys(getHeartRateZones.getHeartRateZones);
      break;

    case "queryGetAvailableSamples":
      fields = Object.keys(getAvailableSamples.getAvailableSamples);
      break;

    case "queryGetSamples":
      fields = Object.keys(getSamples.getSamples);
      break;

    case "queryListPhysicalInfo":
      fields = Object.keys(listPhysicalInfo.listPhysicalInfo);
      break;

    case "queryGetPhysicalInfo":
      fields = Object.keys(getPhysicalInfo.getPhysicalInfo);
      break;

    case "queryGetWebhook":
      fields = Object.keys(getWebhook.getWebhook);
      break;

    case "queryListExercises":
      fields = Object.keys(listExercises.listExercises);
      break;

    case "queryGetExercise":
      fields = Object.keys(getExercise.getExercise);
      break;

    case "queryListSleep":
      fields = Object.keys(listSleep.listSleep);
      break;

    case "queryGetSleep":
      fields = Object.keys(getSleep.getSleep);
      break;

    case "queryGetAvailableSleepTimes":
      fields = Object.keys(getAvailableSleepTimes.getAvailableSleepTimes);
      break;

    case "queryListNightlyRecharge":
      fields = Object.keys(listNightlyRecharge.listNightlyRecharge);
      break;

    case "queryGetNightlyRecharge":
      fields = Object.keys(getNightlyRecharge.getNightlyRecharge);
      break;

    default:
      fields = [];
  }

  return fields;
};
var queryGetUserInfo = function queryGetUserInfo(_ref) {
  var stage = _ref.stage,
      appID = _ref.appID,
      name = _ref.name,
      createQuery = _ref.createQuery,
      fields = _ref.fields,
      filter = _ref.filter,
      next = _ref.next,
      fieldsList = _ref.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getUserInfo.getUserInfo
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListNotifications = function queryListNotifications(_ref2) {
  var stage = _ref2.stage,
      appID = _ref2.appID,
      name = _ref2.name,
      createQuery = _ref2.createQuery,
      fields = _ref2.fields,
      filter = _ref2.filter,
      next = _ref2.next,
      fieldsList = _ref2.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listNotifications.listNotifications
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListActivities = function queryListActivities(_ref3) {
  var stage = _ref3.stage,
      appID = _ref3.appID,
      name = _ref3.name,
      createQuery = _ref3.createQuery,
      fields = _ref3.fields,
      filter = _ref3.filter,
      next = _ref3.next,
      fieldsList = _ref3.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listActivities.listActivities
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetActivitySummary = function queryGetActivitySummary(_ref4) {
  var stage = _ref4.stage,
      appID = _ref4.appID,
      name = _ref4.name,
      createQuery = _ref4.createQuery,
      fields = _ref4.fields,
      filter = _ref4.filter,
      next = _ref4.next,
      fieldsList = _ref4.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getActivitySummary.getActivitySummary
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetStepSample = function queryGetStepSample(_ref5) {
  var stage = _ref5.stage,
      appID = _ref5.appID,
      name = _ref5.name,
      createQuery = _ref5.createQuery,
      fields = _ref5.fields,
      filter = _ref5.filter,
      next = _ref5.next,
      fieldsList = _ref5.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getStepSample.getStepSample
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetZoneSample = function queryGetZoneSample(_ref6) {
  var stage = _ref6.stage,
      appID = _ref6.appID,
      name = _ref6.name,
      createQuery = _ref6.createQuery,
      fields = _ref6.fields,
      filter = _ref6.filter,
      next = _ref6.next,
      fieldsList = _ref6.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getZoneSample.getZoneSample
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListTrainingExercises = function queryListTrainingExercises(_ref7) {
  var stage = _ref7.stage,
      appID = _ref7.appID,
      name = _ref7.name,
      createQuery = _ref7.createQuery,
      fields = _ref7.fields,
      filter = _ref7.filter,
      next = _ref7.next,
      fieldsList = _ref7.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listTrainingExercises.listTrainingExercises
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetExerciseSummary = function queryGetExerciseSummary(_ref8) {
  var stage = _ref8.stage,
      appID = _ref8.appID,
      name = _ref8.name,
      createQuery = _ref8.createQuery,
      fields = _ref8.fields,
      filter = _ref8.filter,
      next = _ref8.next,
      fieldsList = _ref8.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getExerciseSummary.getExerciseSummary
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetHeartRateZones = function queryGetHeartRateZones(_ref9) {
  var stage = _ref9.stage,
      appID = _ref9.appID,
      name = _ref9.name,
      createQuery = _ref9.createQuery,
      fields = _ref9.fields,
      filter = _ref9.filter,
      next = _ref9.next,
      fieldsList = _ref9.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getHeartRateZones.getHeartRateZones
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetAvailableSamples = function queryGetAvailableSamples(_ref10) {
  var stage = _ref10.stage,
      appID = _ref10.appID,
      name = _ref10.name,
      createQuery = _ref10.createQuery,
      fields = _ref10.fields,
      filter = _ref10.filter,
      next = _ref10.next,
      fieldsList = _ref10.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getAvailableSamples.getAvailableSamples
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetSamples = function queryGetSamples(_ref11) {
  var stage = _ref11.stage,
      appID = _ref11.appID,
      name = _ref11.name,
      createQuery = _ref11.createQuery,
      fields = _ref11.fields,
      filter = _ref11.filter,
      next = _ref11.next,
      fieldsList = _ref11.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getSamples.getSamples
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListPhysicalInfo = function queryListPhysicalInfo(_ref12) {
  var stage = _ref12.stage,
      appID = _ref12.appID,
      name = _ref12.name,
      createQuery = _ref12.createQuery,
      fields = _ref12.fields,
      filter = _ref12.filter,
      next = _ref12.next,
      fieldsList = _ref12.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listPhysicalInfo.listPhysicalInfo
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetPhysicalInfo = function queryGetPhysicalInfo(_ref13) {
  var stage = _ref13.stage,
      appID = _ref13.appID,
      name = _ref13.name,
      createQuery = _ref13.createQuery,
      fields = _ref13.fields,
      filter = _ref13.filter,
      next = _ref13.next,
      fieldsList = _ref13.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getPhysicalInfo.getPhysicalInfo
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetWebhook = function queryGetWebhook(_ref14) {
  var stage = _ref14.stage,
      appID = _ref14.appID,
      name = _ref14.name,
      createQuery = _ref14.createQuery,
      fields = _ref14.fields,
      filter = _ref14.filter,
      next = _ref14.next,
      fieldsList = _ref14.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getWebhook.getWebhook
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListExercises = function queryListExercises(_ref15) {
  var stage = _ref15.stage,
      appID = _ref15.appID,
      name = _ref15.name,
      createQuery = _ref15.createQuery,
      fields = _ref15.fields,
      filter = _ref15.filter,
      next = _ref15.next,
      fieldsList = _ref15.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listExercises.listExercises
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetExercise = function queryGetExercise(_ref16) {
  var stage = _ref16.stage,
      appID = _ref16.appID,
      name = _ref16.name,
      createQuery = _ref16.createQuery,
      fields = _ref16.fields,
      filter = _ref16.filter,
      next = _ref16.next,
      fieldsList = _ref16.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getExercise.getExercise
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListSleep = function queryListSleep(_ref17) {
  var stage = _ref17.stage,
      appID = _ref17.appID,
      name = _ref17.name,
      createQuery = _ref17.createQuery,
      fields = _ref17.fields,
      filter = _ref17.filter,
      next = _ref17.next,
      fieldsList = _ref17.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listSleep.listSleep
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetSleep = function queryGetSleep(_ref18) {
  var stage = _ref18.stage,
      appID = _ref18.appID,
      name = _ref18.name,
      createQuery = _ref18.createQuery,
      fields = _ref18.fields,
      filter = _ref18.filter,
      next = _ref18.next,
      fieldsList = _ref18.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getSleep.getSleep
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetAvailableSleepTimes = function queryGetAvailableSleepTimes(_ref19) {
  var stage = _ref19.stage,
      appID = _ref19.appID,
      name = _ref19.name,
      createQuery = _ref19.createQuery,
      fields = _ref19.fields,
      filter = _ref19.filter,
      next = _ref19.next,
      fieldsList = _ref19.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getAvailableSleepTimes.getAvailableSleepTimes
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryListNightlyRecharge = function queryListNightlyRecharge(_ref20) {
  var stage = _ref20.stage,
      appID = _ref20.appID,
      name = _ref20.name,
      createQuery = _ref20.createQuery,
      fields = _ref20.fields,
      filter = _ref20.filter,
      next = _ref20.next,
      fieldsList = _ref20.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: listNightlyRecharge.listNightlyRecharge
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};
var queryGetNightlyRecharge = function queryGetNightlyRecharge(_ref21) {
  var stage = _ref21.stage,
      appID = _ref21.appID,
      name = _ref21.name,
      createQuery = _ref21.createQuery,
      fields = _ref21.fields,
      filter = _ref21.filter,
      next = _ref21.next,
      fieldsList = _ref21.fieldsList;

  if (stage === "dev") {
    return Promise.resolve({
      data: {
        getDataObject: {
          content: getNightlyRecharge.getNightlyRecharge
        }
      }
    });
  } else {
    //SELECT * FROM s3object s  where EXTRACT(YEAR FROM TO_TIMESTAMP(s.p_datetime))=2021 LIMIT 5
    //https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-glacier-select-sql-reference-select.html
    return createQuery({
      query: dataQuery,
      name: name,
      fields: fields,
      filter: filter,
      next: next,
      appId: appID,
      fieldsList: fieldsList
    });
  }
};

exports.getFields = getFields;
exports.getInfo = getInfo;
exports.getModuleName = getModuleName;
exports.queryGetActivitySummary = queryGetActivitySummary;
exports.queryGetAvailableSamples = queryGetAvailableSamples;
exports.queryGetAvailableSleepTimes = queryGetAvailableSleepTimes;
exports.queryGetExercise = queryGetExercise;
exports.queryGetExerciseSummary = queryGetExerciseSummary;
exports.queryGetHeartRateZones = queryGetHeartRateZones;
exports.queryGetNightlyRecharge = queryGetNightlyRecharge;
exports.queryGetPhysicalInfo = queryGetPhysicalInfo;
exports.queryGetSamples = queryGetSamples;
exports.queryGetSleep = queryGetSleep;
exports.queryGetStepSample = queryGetStepSample;
exports.queryGetUserInfo = queryGetUserInfo;
exports.queryGetWebhook = queryGetWebhook;
exports.queryGetZoneSample = queryGetZoneSample;
exports.queryListActivities = queryListActivities;
exports.queryListExercises = queryListExercises;
exports.queryListNightlyRecharge = queryListNightlyRecharge;
exports.queryListNotifications = queryListNotifications;
exports.queryListPhysicalInfo = queryListPhysicalInfo;
exports.queryListSleep = queryListSleep;
exports.queryListTrainingExercises = queryListTrainingExercises;
