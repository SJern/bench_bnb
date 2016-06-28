const BenchApiUtil = {
  fetchAllBenches(bounds, successCB) {
    $.ajax({
      url: "api/benches",
      data: {bounds: bounds},
      success(res) {
        successCB(res);
      }
    });
  }
};




module.exports = BenchApiUtil;
