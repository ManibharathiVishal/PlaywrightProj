module.exports = {
  default: {
    require: ["src/steps/*.js"],
    format: ["json:reports/report.json"],
    timeout: 40000
  }
};