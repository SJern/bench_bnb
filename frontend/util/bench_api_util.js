const BenchApiUtil = {
  fetchAllBenches(successCB) {
    $.ajax({
      url: "api/benches",
      success(res) {
        successCB(res);
      }
    });
  }
};




module.exports = BenchApiUtil;
