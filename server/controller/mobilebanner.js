const mobileBanner = require("../model/mobilebanner");

/***********Create mobileBanner */
exports.createmobileBanner = async (req, res) => {
  console.log(req.body);
  try {
    const banner = new mobileBanner(req.body);
    await banner.save();

    res.status(201).json({ msg: "Mobile Banner Created Successfully", banner });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something went Wrong!", error });
  }
};

/**********Get All mobileBanner */
exports.getAllmobileBanner = async (req, res) => {
  try {
    const banner = await mobileBanner.find();
    res.status(201).json(banner);
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something Went Wrong!", error });
  }
};

/*************get one mobileBanner */

exports.getOnemobileBanner = async (req, res) => {
  try {
    const banner = await mobileBanner.findById(req.params.id);
    res.status(201).json(banner);
  } catch (error) {
    res.status(401).json({ err: "Something Went Wrong!!", error });
  }
};

/***********Update mobileBanner */
exports.updatemobileBanner = async (req, res) => {
  console.log(req.params);
  try {
    await mobileBanner.updateOne({ _id: req.params.id }, req.body);
    res.status(201).json({ msg: "Mobile Banner Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(401).json({ err: "Something Went Wrong!!", error });
  }
};

/***********Delete mobileBanner */
exports.deletemobileBanner = async (req, res) => {
  console.log(req.params.id);
  try {
    const banner = await mobileBanner.findByIdAndDelete({ _id: req.params.id });
    res.status(201).json({ msg: "Mobile Banner deleted Successfully", banner });
  } catch (error) {
    res.status(401).json({ err: "Something went Wrong!!", error });
  }
};
